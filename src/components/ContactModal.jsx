import { useState } from "react";
import { X } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Show thank you message for 3 seconds, then close
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-md bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
            <h2 className="font-mono text-sm font-semibold text-[var(--color-text)]">
              Send Message
            </h2>
            <button
              onClick={onClose}
              className="text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Success Message */}
          {isSuccess ? (
            <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-[var(--color-cyan)] text-center">
                Thank You!
              </h3>
              <p className="text-[var(--color-muted)] text-center mt-2">
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs text-[var(--color-amber)] font-mono mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--color-amber)] font-mono mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--color-amber)] font-mono mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--color-amber)] font-mono mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-md text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-cyan)] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-[var(--color-cyan)] hover:bg-[var(--color-cyan)]/90 text-[var(--color-bg)] font-mono text-sm font-semibold rounded-md transition disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
