import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  PieChart, 
  Cpu, 
  FileText,
  Check,
  ArrowRight
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'stats',
      title: 'Thesis Statistical Testing',
      icon: BarChart2,
      color: 'text-blue-500',
      borderColor: 'border-blue-500',
      description: 'Comprehensive hypothesis testing and statistical validation for your research chapters.',
      features: [
        'T-tests (Independent & Paired)',
        'ANOVA (One-way & Two-way)',
        'Correlation Analysis',
        'Linear & Multiple Regression',
        'Full interpretation report included'
      ]
    },
    {
      id: 'survey',
      title: 'Survey Data Analytics',
      icon: PieChart,
      color: 'text-teal-500',
      borderColor: 'border-teal-500',
      description: 'Turn questionnaire responses into actionable insights using reliability testing.',
      features: [
        'Likert Scale Analysis',
        'Cronbach’s Alpha (Reliability)',
        'Exploratory Factor Analysis (EFA)',
        'Descriptive Statistics',
        'Cross-tabulations'
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning Projects',
      icon: Cpu,
      color: 'text-purple-500',
      borderColor: 'border-purple-500',
      description: 'End-to-end support for final year ML and AI based projects.',
      features: [
        'Data Preprocessing & Cleaning',
        'Classification & Clustering Models',
        'Model Evaluation (Accuracy, F1-Score)',
        'Feature Engineering',
        'Python/Jupyter Notebook delivery'
      ]
    },
    {
      id: 'viz',
      title: 'Publication Graphs & Tables',
      icon: FileText,
      color: 'text-pink-500',
      borderColor: 'border-pink-500',
      description: 'High-quality, formatted visuals ready for IEEE or APA publications.',
      features: [
        'Publication-ready Charts (300 DPI)',
        'Formatted Result Tables (APA Style)',
        'Interactive Dashboards (Power BI)',
        'Infographics for Posters',
        'Custom visual styles'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Expert Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From basic data cleaning to advanced machine learning models, we provide the analytical backbone for your research success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${service.borderColor.replace('border-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-slate-50 group-hover:bg-slate-900 transition-colors duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-teal-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 text-center shadow-2xl">
           <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.1]"></div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
             <p className="text-slate-400 mb-10 text-lg">Schedule a free 15-minute consultation to discuss your specific research goals.</p>
             <Link 
              to="/contact" 
              className="inline-block bg-teal-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20"
            >
              Talk to an Expert
            </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;