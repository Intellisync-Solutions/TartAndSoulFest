import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  availability: '',
  interests: '',
  experience: '',
  message: '',
  organization: '',
  unpaidAgreement: false,
  mediaAgreement: false,
  conductAgreement: false,
};

type VolunteerFormState = typeof initialForm;

const VolunteerForm: React.FC = () => {
  const [form, setForm] = useState<VolunteerFormState>(initialForm);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('Thank you for your interest! We’ll be in touch soon.');
    setForm(initialForm);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.form
      key="volunteer-form"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Availability</label>
          <select
            name="availability"
            value={form.availability}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          >
            <option value="">Select availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="both">Both Weekdays & Weekends</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Areas of Interest</label>
        <select
          name="interests"
          value={form.interests}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        >
          <option value="">Select area of interest</option>
          <option value="event-setup">Event Setup & Coordination</option>
          <option value="food-service">Food Service</option>
          <option value="music">Music & Entertainment</option>
          <option value="community">Community Outreach</option>
          <option value="photography">Photography & Social Media</option>
          <option value="general">General Support</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Previous Volunteer Experience</label>
        <textarea
          name="experience"
          value={form.experience}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          placeholder="Tell us about any relevant experience (optional)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Additional Information</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          placeholder="Share any additional information or questions you may have"
          required
        />
      </div>
      {/* Disclaimers */}
      <div className="space-y-3 my-6">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="unpaidAgreement"
            checked={form.unpaidAgreement}
            onChange={handleInputChange}
            required
            className="mt-1 mr-2 accent-tart-mint"
          />
          <span className="text-sm">I acknowledge that volunteering is unpaid and based on availability.</span>
        </label>
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="mediaAgreement"
            checked={form.mediaAgreement}
            onChange={handleInputChange}
            required
            className="mt-1 mr-2 accent-tart-mint"
          />
          <span className="text-sm">I consent to the use of photos/videos of me for event promotion.</span>
        </label>
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="conductAgreement"
            checked={form.conductAgreement}
            onChange={handleInputChange}
            required
            className="mt-1 mr-2 accent-tart-mint"
          />
          <span className="text-sm">I agree to adhere to event guidelines and instructions from organizers.</span>
        </label>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-tart-mint text-soul-brown px-8 py-3 rounded-full font-bold flex items-center justify-center"
      >
        <Send className="mr-2" size={20} />
        Submit Volunteer Application
      </motion.button>
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-4 rounded-lg text-center bg-tart-mint/20 text-tart-mint"
        >
          {submitStatus}
        </motion.div>
      )}
    </motion.form>
  );
};

export default VolunteerForm;
