import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  TrendingUp, 
  FileCheck, 
  Database, 
  Users, 
  GraduationCap, 
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Dark Hero Section */}
      <section className="relative bg-[#0B1120] text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05]"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-teal-500 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">Consulting for Researchers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Data Analysis, <br />
            <span className="text-gradient">Simplified.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            We transform raw research data into thesis-ready results. 
            Stop stressing over <span className="text-teal-400 font-mono">p-values</span> and start writing your discussion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 bg-teal-500 text-white font-bold rounded-xl transition-all hover:bg-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Book Free Consultation
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
             <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span className="text-sm font-mono">Confidential</span>
             </div>
             <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span className="text-sm font-mono">PhD Supported</span>
             </div>
             <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span className="text-sm font-mono">SPSS / Python / R</span>
             </div>
             <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" />
                <span className="text-sm font-mono">IEEE Standards</span>
             </div>
          </div>
        </div>
      </section>

      {/* Modern Services Cards */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Professional-grade analytics support tailored for academic success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart, title: "Statistical Analysis", desc: "Hypothesis testing (t-test, ANOVA) explained simply." },
              { icon: TrendingUp, title: "Forecasting Models", desc: "Predictive analytics using regression and time-series." },
              { icon: Database, title: "Data Cleaning", desc: "We fix missing values and format your raw data." },
              { icon: Cpu, title: "Machine Learning", desc: "Clustering, classification, and neural networks." },
              { icon: BookOpen, title: "Thesis Support", desc: "Chapter 4 results written with APA/IEEE formatting." },
              { icon: Users, title: "Survey Analytics", desc: "Cronbach's alpha, factor analysis, and Likert scales." },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 card-glow cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="h-24 w-24 text-teal-500 transform rotate-12" />
                </div>
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm hover:shadow-md">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Bento Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <GraduationCap className="h-8 w-8 text-indigo-500 mb-4" />
                    <h4 className="font-bold text-slate-900">Undergraduates</h4>
                    <p className="text-sm text-slate-500 mt-2">Final year projects & assignments.</p>
                  </div>
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col h-full">
                    <BookOpen className="h-8 w-8 text-teal-400 mb-4" />
                    <h4 className="font-bold">Masters / MBA</h4>
                    <p className="text-sm text-slate-400 mt-2">Thesis data analysis & interpretation.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <Users className="h-8 w-8 text-teal-600 mb-4" />
                    <h4 className="font-bold text-slate-900">PhD Research</h4>
                    <p className="text-sm text-slate-500 mt-2">Complex modeling & defense prep.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col h-full">
                    <FileCheck className="h-8 w-8 text-emerald-500 mb-4" />
                    <h4 className="font-bold text-slate-900">Publications</h4>
                    <p className="text-sm text-slate-500 mt-2">Journal-ready charts & tables.</p>
                  </div>
                </div>
             </div>
             
             <div className="order-1 lg:order-2">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Academics. <br/><span className="text-teal-500">Built for Results.</span></h2>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 Whether you are working on your first undergraduate paper or a complex doctoral thesis, we provide the technical expertise you need to succeed.
               </p>
               <div className="space-y-4">
                 {[
                   "Strict confidentiality guaranteed",
                   "Results delivered in 24-48 hours",
                   "One-on-one explanation sessions",
                   "Unlimited revisions for premium plans"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="h-6 w-6 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                     </div>
                     <span className="text-slate-800 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B1120] relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.05]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to analyze your data?</h2>
          <p className="text-slate-400 mb-10 text-xl max-w-2xl mx-auto">
            Contact us today for a free feasibility check. We will discuss your project and provide a quote.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-slate-900 text-lg font-bold px-10 py-4 rounded-xl hover:bg-teal-50 transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;