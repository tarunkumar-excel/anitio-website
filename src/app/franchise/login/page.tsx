'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, Eye, EyeOff, LogIn, AlertCircle, Building2, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function FranchiseLoginPage() {
  const [form, setForm] = useState({ franchiseCode: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.franchiseCode || !form.password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    // Simulate login (replace with real auth)
    if (form.franchiseCode === 'ANITIO-FC001' && form.password === 'demo123') {
      toast.success('Login successful! Redirecting to dashboard...');
      window.location.href = '/franchise/dashboard';
    } else {
      toast.error('Invalid franchise code or password. Try: ANITIO-FC001 / demo123');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-blue border border-primary-600">
              <GraduationCap size={24} className="text-gold-400" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-xl text-white">ANITIO</div>
              <div className="text-[10px] text-gray-400 font-medium tracking-wider">IT & SKILL DEVELOPMENT LLP</div>
            </div>
          </Link>
          <h1 className="font-display font-bold text-2xl text-white">Franchise Partner Login</h1>
          <p className="text-gray-400 text-sm mt-1">Access your franchise dashboard and management portal</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-card-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 p-4 flex items-center gap-2">
            <Building2 size={18} className="text-gold-400" />
            <span className="text-white font-semibold text-sm">Franchise Portal Access</span>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Franchise Code *</label>
              <input
                className="input-field"
                placeholder="e.g. ANITIO-FC001"
                value={form.franchiseCode}
                onChange={e => setForm(p => ({ ...p, franchiseCode: e.target.value }))}
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password *</label>
              <div className="relative">
                <input
                  className="input-field pr-11"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="/franchise/forgot-password" className="text-primary-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 disabled:opacity-70"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Logging in...
                </span>
              ) : (
                <><LogIn size={17} /> Login to Dashboard</>
              )}
            </button>

            {/* Demo hint */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <div className="flex items-start gap-2">
                <AlertCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-700">
                  <span className="font-semibold">Demo credentials:</span><br />
                  Code: <span className="font-mono">ANITIO-FC001</span> | Password: <span className="font-mono">demo123</span>
                </div>
              </div>
            </div>
          </form>

          <div className="px-8 pb-6 text-center border-t border-gray-100 pt-5">
            <p className="text-sm text-gray-600">
              Not a franchise partner yet?{' '}
              <Link href="/franchise/register" className="text-primary-600 font-semibold hover:underline">
                Apply for Franchise
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
            ← Back to Main Website
          </Link>
        </div>
      </div>
    </div>
  );
}
