import React from 'react';
import { Link } from 'react-router-dom';
import { User, Terminal, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro */}
      <div className="bg-slate-900 text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Behind 4CAST</h1>
          <p className="text-xl text-slate-400">
            "I created 4CAST to help researchers turn raw data into meaningful results."
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-40 h-40 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg">
             <User className="h-20 w-20 text-teal-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Research analytics shouldn't be a barrier to graduation. We believe that every student deserves clear, accurate, and ethical support to interpret their findings.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We bridge the gap between complex statistical theory and practical, actionable results for your thesis or publication.
            </p>
          </div>
        </div>

        {/* Toolkit */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Our Toolkit</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Python', icon: Code },
              { name: 'R Studio', icon: Terminal },
              { name: 'SPSS', icon: Database },
              { name: 'Power BI', icon: Terminal } // Reusing icon for simplicity
            ].map((tool, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
                <tool.icon className="h-8 w-8 text-slate-700 mb-3" />
                <span className="font-semibold text-slate-900">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ethics */}
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-teal-900 mb-6">Academic Integrity & Ethics</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-2xl mx-auto">
             <div className="flex-1">
               <div className="flex items-center gap-2 mb-2 text-teal-700 font-bold">
                 <span className="bg-teal-200 p-1 rounded">✅</span> We Support
               </div>
               <p className="text-sm text-teal-800">
                 Statistical analysis, model building, code debugging, and result interpretation.
               </p>
             </div>
             <div className="flex-1">
               <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
                 <span className="bg-red-100 p-1 rounded">❌</span> We Do Not
               </div>
               <p className="text-sm text-red-800">
                 Write full thesis chapters from scratch, fabricate data, or guarantee grades.
               </p>
             </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="text-slate-900 font-semibold border-b-2 border-teal-500 hover:text-teal-600 transition-colors">
            Contact us to learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;