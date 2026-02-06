import React, { useState } from 'react';
import { Upload as UploadIcon, File, X, Shield, Lock } from 'lucide-react';

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Your Dataset</h1>
          <p className="text-slate-600">Securely upload your CSV, Excel, or SPSS files for a quick review.</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
          {!file ? (
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-teal-500 hover:bg-teal-50/20 transition-all group">
              <div className="bg-teal-50 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <UploadIcon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Drag & Drop or Click to Upload</h3>
              <p className="text-slate-500 text-sm mb-6">Supports .csv, .xlsx, .sav (SPSS)</p>
              
              <div className="relative">
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  accept=".csv,.xlsx,.xls,.sav"
                />
                <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
                  Browse Files
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-teal-200 p-3 rounded-lg">
                  <File className="h-6 w-6 text-teal-800" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{file.name}</p>
                  <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
              <button onClick={removeFile} className="text-slate-400 hover:text-red-500 p-2">
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

          {file && (
            <div className="mt-6">
               <label className="block text-sm font-medium text-slate-700 mb-2">Add a note (optional)</label>
               <textarea 
                 className="w-full p-3 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                 rows={3}
                 placeholder="Briefly describe what you need help with..."
               ></textarea>
               <button className="w-full mt-4 bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors shadow-lg">
                 Submit for Review
               </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <Lock className="h-3 w-3" /> 256-bit Encryption
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3" /> Confidential Guarantee
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-8">
          "Your data is confidential and never shared with third parties."
        </p>
      </div>
    </div>
  );
};

export default Upload;