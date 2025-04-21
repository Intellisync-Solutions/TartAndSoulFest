import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface TartisanFormProps {
  onSuccess?: () => void;
}

const initialForm = {
  bakerName: '',
  phone: '',
  email: '',
  bakerType: '', // 'home' or 'pro'
  address: '',
  specialty: '', // optional
  tartDescription: '',
  website: '', // optional
  facebook: '', // optional
  tiktok: '', // optional
  instagram: '', // optional
  otherSocials: '', // optional
  eventPolicies: false,
  feesPolicy: false,
  socialPolicy: false,
  indemnification: false,
  paymentAttest: false,
  finalAttest: false,
};

type TartisanFormState = typeof initialForm;

const TartisanForm: React.FC<TartisanFormProps> = ({ onSuccess }) => {
  const [form, setForm] = useState<TartisanFormState>(initialForm);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add any API submission logic here
    setSubmitStatus('Thank you for your interest! We’ll be in touch soon.');
    setForm(initialForm);
    if (onSuccess) onSuccess();
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <motion.form
      key="tartisan-form"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Baker's Name: First & Last</label>
          <input
            type="text"
            name="bakerName"
            value={form.bakerName}
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
          <label className="block text-sm font-medium mb-2">Baker Type</label>
          <div className="flex gap-4 items-center">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="bakerType"
                value="home"
                checked={form.bakerType === 'home'}
                onChange={handleInputChange}
                className="form-radio text-tart-mint"
                required
              />
              <span className="ml-2">Home Baker</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="bakerType"
                value="pro"
                checked={form.bakerType === 'pro'}
                onChange={handleInputChange}
                className="form-radio text-tart-mint"
              />
              <span className="ml-2">Pro-Baker</span>
            </label>
          </div>
          {form.bakerType === 'home' && (
            <div className="mt-2 text-tart-mint text-sm font-semibold">Entrance Fee: $60.00</div>
          )}
          {form.bakerType === 'pro' && (
            <div className="mt-2 text-tart-mint text-sm font-semibold">Entrance Fee: $200.00</div>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          {form.bakerType === 'pro' ? 'Business Address' : 'Home Address'}
        </label>
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
        <label className="block text-sm font-medium mb-2">Tart Specialty <span className="text-xs text-gray-400">(optional)</span></label>
        <input
          type="text"
          name="specialty"
          value={form.specialty}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          placeholder="e.g., Traditional Butter Tarts, Soul Food Fusion"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Tell us about your Tart</label>
        <textarea
          name="tartDescription"
          value={form.tartDescription}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
          required
        />
      </div>
      {/* Advertisement Section */}
      <div className="pt-4">
        <h4 className="font-semibold mb-2">Advertisement & Socials <span className="text-xs text-gray-400">(optional)</span></h4>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            placeholder="Website Address"
          />
          <input
            type="text"
            name="facebook"
            value={form.facebook}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            placeholder="Facebook"
          />
          <input
            type="text"
            name="tiktok"
            value={form.tiktok}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            placeholder="TikTok"
          />
          <input
            type="text"
            name="instagram"
            value={form.instagram}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            placeholder="Instagram"
          />
          <input
            type="text"
            name="otherSocials"
            value={form.otherSocials}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg bg-[#3A2C2C] border border-gray-600 focus:border-tart-mint focus:outline-none"
            placeholder="Other Socials (LinkedIn, etc)"
          />
        </div>
      </div>
      {/* Legal Disclaimers */}
      <div className="pt-4 space-y-3">
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="eventPolicies"
              checked={form.eventPolicies}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              <strong>Event Policies Application Process:</strong> All vendors must complete the official application form by the specified deadline. Acceptance is based on product quality, relevance, and space availability.<br/>
              <strong>Booth Assignment:</strong> Booth locations are assigned by the organizing committee and are non-transferable. Vendors must operate within their designated spaces.<br/>
              <strong>Operational Hours:</strong> Vendors are required to set up before the event starts and remain open for the entire duration. Early teardown is not permitted.<br/>
              <strong>Compliance:</strong> All vendors must adhere to local health and safety regulations, including obtaining necessary permits for food handling.
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="feesPolicy"
              checked={form.feesPolicy}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              <strong>Fees and Refund Policy:</strong> All vendor fees are non-refundable. Once payment is made, no refunds will be issued, regardless of circumstances such as inclement weather or personal emergencies.
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="socialPolicy"
              checked={form.socialPolicy}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              <strong>Social Media Policy:</strong> All official communications regarding vendor applications and acceptance will be conducted through verified channels by the festival staff. We will never solicit payments over social media. Please be aware that platforms like Facebook, Instagram, and Twitter are not secure for payments. Brand Representation: Vendors are encouraged to promote their participation in the festival on social media. However, any use of the festival's logo or branding materials must be approved by the organizing committee.
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="indemnification"
              checked={form.indemnification}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              <strong>Indemnification Clause:</strong> By participating in the Tart & Soul Butter Tart Festival, vendors agree to indemnify and hold harmless Doug Robbins, the Tart & Soul Butter Tart Festival, its organizers, volunteers, and the property owners from any claims, damages, losses, or expenses arising out of or resulting from their participation in the event. This includes, but is not limited to, claims related to personal injury, property damage, or financial loss. Adherence to these policies ensures a safe and enjoyable experience for all participants. If you have any questions or require further clarification, please contact the organizing.
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="paymentAttest"
              checked={form.paymentAttest}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              <strong>Payment:</strong> Interac E-transfers are preferred as payment for your participation. Once your application is accepted you will receive details including payment email address.
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              name="finalAttest"
              checked={form.finalAttest}
              onChange={handleInputChange}
              required
            />
            <span className="text-xs text-gray-200">
              I / We have read, comprehend, and agree to all of the terms and conditions of this application and all the terms, conditions and policies contained herein. All is deemed true and accurate.
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
        Submit Tartisan Application
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

export default TartisanForm;
