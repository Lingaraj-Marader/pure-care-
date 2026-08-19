"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

declare global {
  interface Window {
    openConsultationModal?: () => void;
  }
}

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    window.openConsultationModal = openModal;
    return () => {
      delete window.openConsultationModal;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const message = encodeURIComponent(
      `Hi Pure Care! I'd like a free consultation.\n\nName: ${formData.name}\n\nPhone: ${formData.phone}\n\nEmail: ${formData.email}\n\nService: ${formData.service}\n\nMessage: ${formData.message}\n`
    );

    window.open(`https://wa.me/971586368849?text=${message}`, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-300/40 max-w-lg w-full max-h-[90dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-primary/10 to-red-primary/10 border-b border-slate-200 px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Free Consultation
                </h3>
                <p className="text-slate-600 text-xs mt-0.5">
                  Get expert advice for your vehicle
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full hover:bg-red-primary/5 flex items-center justify-center transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes className="text-slate-600 hover:text-red-primary" />
              </button>
            </div>

            <div className="p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-service"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-blue-primary/50 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-white text-slate-900">
                        Select a service
                      </option>
                      <option
                        value="Exterior Detailing"
                        className="bg-white text-slate-900"
                      >
                        Exterior Detailing
                      </option>
                      <option
                        value="Interior Detailing"
                        className="bg-white text-slate-900"
                      >
                        Interior Detailing
                      </option>
                      <option
                        value="Paint Protection Services"
                        className="bg-white text-slate-900"
                      >
                        Paint Protection Services
                      </option>
                      <option
                        value="Additional Detailing Services"
                        className="bg-white text-slate-900"
                      >
                        Additional Detailing Services
                      </option>
                      <option value="Other" className="bg-white text-slate-900">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle and what service you need..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r from-blue-primary to-blue-dark hover:from-red-primary hover:to-red-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-primary/20 text-sm ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-xl hover:shadow-red-primary/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
