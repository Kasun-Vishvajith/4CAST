import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 30,
      icon: Zap,
      desc: 'Perfect for small assignments or initial data checks.',
      features: [
        'Basic Data Cleaning',
        '1 Statistical Test',
        '1 Summary Graph',
        'Results Table',
        '24h Turnaround'
      ]
    },
    {
      name: 'Standard',
      price: 120,
      icon: Star,
      recommended: true,
      desc: 'Complete analysis for a single thesis chapter.',
      features: [
        'Full Chapter Analysis',
        'Advanced Cleaning',
        'Up to 5 Tests (T-test/ANOVA)',
        'Interpretation Text Included',
        'Formatting (APA/IEEE)',
        '1 Revision Round'
      ]
    },
    {
      name: 'Premium',
      price: 300,
      icon: Shield,
      desc: 'End-to-end support for major research projects.',
      features: [
        'Advanced Modeling (ML/Regression)',
        'Unlimited Statistical Tests',
        'Publication-Ready Results',
        'Methodology Review',
        'Priority Support',
        'Unlimited Revisions'
      ]
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Transparent Pricing</h1>
          <p className="text-lg text-slate-600">Student-friendly rates. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                tier.recommended 
                  ? 'shadow-2xl border-2 border-teal-500 z-10 scale-105' 
                  : 'shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <span className="bg-teal-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-teal-500/30">
                     Most Popular
                   </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tier.recommended ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 text-slate-600'}`}>
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-2 min-h-[40px] leading-relaxed">{tier.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">${tier.price}</span>
                <span className="text-slate-500 ml-2 text-sm">/ project starting</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${tier.recommended ? 'text-teal-500' : 'text-slate-400'}`} />
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 px-6 rounded-xl text-center font-bold transition-all shadow-lg ${
                  tier.recommended
                    ? 'bg-teal-500 text-white hover:bg-teal-400 hover:shadow-teal-500/25'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose {tier.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm leading-relaxed">
            * <strong>Note:</strong> Final cost may vary depending on dataset size, complexity, and specific university requirements. 
            We provide a custom quote after reviewing your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;