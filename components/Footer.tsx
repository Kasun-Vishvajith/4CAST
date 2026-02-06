import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Mail, Phone, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BarChart2 className="h-6 w-6 text-teal-400" />
              <span className="font-bold text-xl tracking-tight">4CAST</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Turning raw data into meaningful results for researchers and students worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm">Statistical Analysis</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm">Forecasting</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm">Machine Learning</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white text-sm">Publication Charts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/pricing" className="text-slate-300 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300 text-sm gap-2">
                <Mail className="h-4 w-4" /> kasunvishvajithoffical@gmail.com
              </li>
              <li className="flex items-center text-slate-300 text-sm gap-2">
                <Phone className="h-4 w-4" /> +94 75 314 0204
              </li>
              <li className="flex items-center text-teal-400 text-sm gap-2 mt-2">
                <ShieldCheck className="h-4 w-4" /> Ethical Support Guarantee
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} 4CAST Analytics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-slate-500 text-xs">Privacy Policy</span>
             <span className="text-slate-500 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;