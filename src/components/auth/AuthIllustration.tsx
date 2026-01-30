import React from 'react';

/** Auth page left-side line illustration */
const AuthIllustration: React.FC = () => (
  <svg
    className="auth-illustration"
    viewBox="0 0 480 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    {/* Background arcs */}
    <path
      d="M80 120 Q240 40 400 120 L400 400 Q240 480 80 400 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeOpacity="0.12"
      fill="none"
    />
    <path
      d="M120 160 Q240 100 360 160 L360 380 Q240 440 120 380 Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.08"
      fill="none"
    />
    {/* Figure outline */}
    <circle cx="240" cy="180" r="42" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" fill="none" />
    <path
      d="M240 222 v80 M240 302 l-50 100 M240 302 l50 100 M240 302 l-35 60 M240 302 l35 60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.4"
    />
    {/* Lock and key */}
    <path
      d="M320 280 h-48 a12 12 0 0 0 -12 12 v64 a12 12 0 0 0 12 12 h48 a12 12 0 0 0 12 -12 v-64 a12 12 0 0 0 -12 -12 z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeOpacity="0.5"
      fill="none"
    />
    <circle cx="296" cy="308" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" fill="none" />
    <path
      d="M340 308 l28 -48 M368 260 l-16 8 l12 20 l-16 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.45"
    />
    {/* Document / UI wireframe */}
    <path
      d="M140 320 h140 v100 h-140 z M155 335 h110 M155 355 h80 M155 375 h60"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeOpacity="0.35"
      fill="none"
    />
    {/* Decorative lines */}
    <path
      d="M60 260 Q180 200 300 260"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="6 4"
    />
    <path
      d="M180 440 Q240 400 300 440"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.2"
      fill="none"
      strokeDasharray="6 4"
    />
  </svg>
);

export default AuthIllustration;
