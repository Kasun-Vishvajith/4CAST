import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    deadline: '',
    datasetType: 'Not specified',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMessage = () => {
    return `*New Research Inquiry via 4CAST Website*
    
*Name:* ${formData.name || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Topic:* ${formData.topic || 'N/A'}
*Deadline:* ${formData.deadline || 'N/A'}
*Dataset:* ${formData.datasetType}

*Message:*
${formData.message}`;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = generateMessage();
    const url = `https://wa.me/94753140204?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = generateMessage();
    const subject = `Research Inquiry: ${formData.topic || 'New Project'}`;
    const url = `mailto:kasunvishvajithoffical@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Shared input styles for consistency
  const inputClasses = "w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all font-sans text-base text-slate-900 placeholder-slate-500";

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-10">
              Ready to start your analysis? Fill out the details or contact us directly using the options below. We usually respond within 2 hours.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/94753140204" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-teal-50 rounded-xl border border-teal-100 hover:bg-teal-100 transition-colors group">
                <div className="bg-teal-500 p-3 rounded-full text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Chat on WhatsApp</h3>
                  <p className="text-teal-700 text-sm">Fastest response for quick questions</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">+94 75 314 0204</p>
                </div>
              </a>
              
              <a href="mailto:kasunvishvajithoffical@gmail.com" className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                <div className="bg-slate-800 p-3 rounded-full text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-slate-600 text-sm">kasunvishvajithoffical@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Details</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="john@university.edu"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Research Topic</label>
                    <input
                      type="text"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="e.g. Marketing"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Deadline</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                 </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Dataset Type</label>
                <select 
                  name="datasetType"
                  value={formData.datasetType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="Not specified">Select type...</option>
                  <option value="Survey Responses (Excel/CSV)">Survey Responses (Excel/CSV)</option>
                  <option value="Time Series Data">Time Series Data</option>
                  <option value="Experimental Data">Experimental Data</option>
                  <option value="No data yet">I don't have data yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Tell us briefly about your research objectives..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                </button>
                <button
                  onClick={handleEmail}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="h-5 w-5" /> Send via Email
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;