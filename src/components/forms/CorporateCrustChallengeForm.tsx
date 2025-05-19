import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  address: '',
  city: '',
  postalCode: '',
  website: '',
  socialMedia: '',
  bakerCategory: '',
  eventPoliciesAgreement: false,
  refundPolicyAgreement: false,
  socialMediaPolicyAgreement: false,
  paymentPolicyAgreement: false,
  termsAgreement: false,
};

type CorporateCrustChallengeFormState = typeof initialForm;

const CorporateCrustChallengeForm: React.FC = () => {
  const [form, setForm] = useState<CorporateCrustChallengeFormState>(initialForm);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('Thank you for your application! We\'ll be in touch soon.');
    setForm(initialForm);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.form
      key="corporate-crust-challenge-form"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-tart-mint mb-6">Corporate Crust Challenge Application</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Baker's Full Name</label>
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
          <label className="block text-sm font-medium mb-2">Contact Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Organization/Company Name</label>
        <input
          type="text"
          name="organization"
          value={form.organization}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Street Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Business Website (optional)</label>
        <input
          type="url"
          name="website"
          value={form.website}
          onChange={handleInputChange}
          placeholder="https://yourwebsite.com"
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Social Media Links (optional)</label>
        <input
          type="text"
          name="socialMedia"
          value={form.socialMedia}
          onChange={handleInputChange}
          placeholder="Instagram, Facebook, Twitter, etc."
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Baker Category</label>
        <select
          name="bakerCategory"
          value={form.bakerCategory}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        >
          <option value="">Select category</option>
          <option value="home">Home Baker</option>
          <option value="community">Community Org</option>
          <option value="corporate">Large Corp</option>
        </select>
      </div>

      {/* Disclaimers */}
      <div className="space-y-4 my-6 p-4 bg-[#2c2222] rounded-lg">
        <h3 className="text-lg font-bold text-tart-mint mb-3">Policies & Agreements</h3>
        
        <div className="space-y-3">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="eventPoliciesAgreement"
              checked={form.eventPoliciesAgreement}
              onChange={handleInputChange}
              required
              className="mt-1 mr-2 accent-tart-mint"
            />
            <span className="text-sm">
              <span className="font-semibold">Event Policies:</span> I understand that all vendors must complete the official application form by the specified deadline, booth locations are assigned by the organizing committee, and I must comply with all local health and safety regulations.
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="refundPolicyAgreement"
              checked={form.refundPolicyAgreement}
              onChange={handleInputChange}
              required
              className="mt-1 mr-2 accent-tart-mint"
            />
            <span className="text-sm">
              <span className="font-semibold">Refund Policy:</span> I understand that all vendor fees are non-refundable regardless of circumstances such as inclement weather or personal emergencies.
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="socialMediaPolicyAgreement"
              checked={form.socialMediaPolicyAgreement}
              onChange={handleInputChange}
              required
              className="mt-1 mr-2 accent-tart-mint"
            />
            <span className="text-sm">
              <span className="font-semibold">Social Media Policy:</span> I understand that all official communications will be through verified channels and I will not make payments through social media platforms. I agree to proper brand representation if promoting my participation.
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="paymentPolicyAgreement"
              checked={form.paymentPolicyAgreement}
              onChange={handleInputChange}
              required
              className="mt-1 mr-2 accent-tart-mint"
            />
            <span className="text-sm">
              <span className="font-semibold">Payment Policy:</span> I understand there is a non-refundable entry fee of $60.00. Interac e-transfers are the preferred payment method and payment details will be provided upon application acceptance.
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="termsAgreement"
              checked={form.termsAgreement}
              onChange={handleInputChange}
              required
              className="mt-1 mr-2 accent-tart-mint"
            />
            <span className="text-sm font-semibold">
              I have read, understand, and agree to all of the terms and conditions of this application and all the terms, conditions and policies contained herein.
            </span>
          </label>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-tart-mint text-soul-brown px-8 py-3 rounded-full font-bold flex items-center justify-center"
      >
        <Send className="mr-2" size={20} />
        Submit Application
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

export default CorporateCrustChallengeForm;
