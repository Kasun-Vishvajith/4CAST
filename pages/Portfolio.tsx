import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const dataSales = [
  { month: 'Jan', actual: 4000, forecast: 4100 },
  { month: 'Feb', actual: 3000, forecast: 3200 },
  { month: 'Mar', actual: 2000, forecast: 2400 },
  { month: 'Apr', actual: 2780, forecast: 2900 },
  { month: 'May', actual: 1890, forecast: 2100 },
  { month: 'Jun', actual: 2390, forecast: 2500 },
  { month: 'Jul', actual: 3490, forecast: 3600 },
];

const dataSurvey = [
  { group: 'Group A', agree: 80, neutral: 10, disagree: 10 },
  { group: 'Group B', agree: 65, neutral: 25, disagree: 10 },
  { group: 'Group C', agree: 40, neutral: 30, disagree: 30 },
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Case Studies</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Sample Work</h1>
          <p className="text-lg text-slate-600">Examples of the visualization quality we deliver.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Example 1 - Mac Window Style */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono">sales_forecast_model_v2.py</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="text-teal-600 font-bold text-xs tracking-wider uppercase mb-1 block">Forecasting</span>
                <h3 className="text-2xl font-bold text-slate-900">Sales Prediction Model</h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Comparison between Actual vs Predicted values using ARIMA.
                </p>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataSales}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" />
                    <Line type="monotone" dataKey="actual" stroke="#0f172a" strokeWidth={3} dot={{ r: 4, fill: '#0f172a' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="forecast" stroke="#14b8a6" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-slate-300"></div>
               <div className="w-3 h-3 rounded-full bg-slate-300"></div>
               <span className="ml-2 text-xs text-slate-500 font-mono">survey_results_final.csv</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="text-teal-600 font-bold text-xs tracking-wider uppercase mb-1 block">Survey Analytics</span>
                <h3 className="text-2xl font-bold text-slate-900">Likert Scale Distribution</h3>
                <p className="text-slate-600 mt-2 text-sm">
                  Cross-tabulation of survey responses across demographic groups.
                </p>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataSurvey}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="group" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      cursor={{fill: '#f8fafc'}}
                    />
                    <Legend iconType="circle" />
                    <Bar dataKey="agree" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="neutral" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="disagree" fill="#1e293b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>

        {/* Case Studies */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "PhD Thesis: Supply Chain",
                desc: "Analyzed 10,000+ data points for a logistics optimization model. Provided full regression analysis and formatted tables.",
                tag: "Doctoral"
              },
              {
                title: "MBA Market Research",
                desc: "Cleaned and visualized survey data from 500 participants regarding consumer behavior post-pandemic.",
                tag: "Master's"
              },
              {
                title: "Undergrad ML Project",
                desc: "Assisted in feature selection and model tuning for a sentiment analysis project using Python.",
                tag: "Undergraduate"
              }
            ].map((study, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wide">{study.tag}</span>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{study.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;