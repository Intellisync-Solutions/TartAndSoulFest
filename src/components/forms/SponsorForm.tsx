import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SPONSOR_TIERS } from '../../data/SponsorsData';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  sponsorshipLevel: '',
  logo: null as File | null,
  instagram: '',
  facebook: '',
  twitter: '',
  website: '',
  feeAgreement: false,
  mediaAgreement: false,
  advertisingAgreement: false,
  message: ''
};

type SponsorFormState = typeof initialForm;

const SponsorForm: React.FC = () => {
  const [form, setForm] = useState<SponsorFormState>(initialForm);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (type === 'file') {
      const file = files && files[0] ? files[0] : null;
      setForm((prev) => ({ ...prev, logo: file }));
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setLogoPreview(reader.result as string);
        reader.readAsDataURL(file);
      } else {
        setLogoPreview(null);
      }
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
      key="sponsor-form"
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
          <label className="block text-sm font-medium mb-2">Organization</label>
          <input
            type="text"
            name="organization"
            value={form.organization}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            required
          />
        </div>
      </div>
      {/* Sponsorship Levels & Benefits */}
      <div className="mb-8">
        <div className="bg-[#2c2222] border border-tart-mint/40 rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-tart-mint mb-4">Sponsorship Levels & Benefits</h3>
          <ul className="space-y-4">
            {Object.entries(SPONSOR_TIERS).map(([key, tierObj]) => {
  const tier = tierObj as {
    name: string;
    color: string;
    benefits: string[];
  };
  return (
    <li key={key}>
      <span className="font-semibold" style={{ color: tier.color }}>{tier.name}</span>
      <ul className="list-disc list-inside ml-4 text-white/90 text-sm">
        {tier.benefits.map((benefit: string, idx: number) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
    </li>
  );
})}
          </ul>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Sponsorship Level</label>
        <select
          name="sponsorshipLevel"
          value={form.sponsorshipLevel}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        >
          <option value="">Select level</option>
          <option value="bronze">Bronze ($500)</option>
          <option value="silver">Silver ($1,000)</option>
          <option value="gold">Gold ($2,500)</option>
          <option value="platinum">Platinum ($5,000)</option>
        </select>
      </div>
      {/* Logo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Organization Logo</label>
        <input
          type="file"
          name="logo"
          accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
          onChange={handleInputChange}
          className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-tart-mint/80 file:text-soul-brown hover:file:bg-tart-mint"
        />
        {logoPreview && (
          <div className="mt-3">
            <span className="block text-xs text-gray-400 mb-1">Logo Preview:</span>
            <img src={logoPreview} alt="Logo Preview" className="h-20 rounded shadow border border-gray-700 bg-white/10" />
          </div>
        )}
      </div>
      {/* Social Media Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Instagram</label>
          <input
            type="url"
            name="instagram"
            value={form.instagram}
            onChange={handleInputChange}
            placeholder="https://instagram.com/yourprofile"
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Facebook</label>
          <input
            type="url"
            name="facebook"
            value={form.facebook}
            onChange={handleInputChange}
            placeholder="https://facebook.com/yourpage"
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Twitter/X</label>
          <input
            type="url"
            name="twitter"
            value={form.twitter}
            onChange={handleInputChange}
            placeholder="https://x.com/yourprofile"
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Website</label>
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleInputChange}
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        />
      </div>
      {/* Disclaimers */}
      <div className="space-y-3 my-6">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="feeAgreement"
            checked={form.feeAgreement}
            onChange={handleInputChange}
            required
            className="mt-1 mr-2 accent-tart-mint"
          />
          <span className="text-sm">I acknowledge that sponsorship requires payment of the selected level’s fee.</span>
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
          <span className="text-sm">I consent to the use of my organization’s name, logo, and likeness in event media and promotional materials.</span>
        </label>
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="advertisingAgreement"
            checked={form.advertisingAgreement}
            onChange={handleInputChange}
            required
            className="mt-1 mr-2 accent-tart-mint"
          />
          <span className="text-sm">I agree to allow the event to use our sponsorship for advertising and promotional purposes.</span>
        </label>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-tart-mint text-soul-brown px-8 py-3 rounded-full font-bold flex items-center justify-center"
      >
        <Send className="mr-2" size={20} />
        Submit Sponsor Application
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

export default SponsorForm;
