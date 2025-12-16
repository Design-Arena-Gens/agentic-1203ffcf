type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => (
  <svg
    className={className}
    viewBox="0 0 320 320"
    role="img"
    aria-labelledby="business-agent-logo-title business-agent-logo-desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="business-agent-logo-title">Agentic business professional logo</title>
    <desc id="business-agent-logo-desc">
      Abstract figure of a business professional with a briefcase rendered in blue and silver tones.
    </desc>
    <defs>
      <linearGradient id="accentBlue" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#1f3c88" />
        <stop offset="100%" stopColor="#3d6cd8" />
      </linearGradient>
      <linearGradient id="silverSheen" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#f0f4f8" />
        <stop offset="100%" stopColor="#c1c9d6" />
      </linearGradient>
      <linearGradient id="midTone" x1="15%" x2="85%" y1="20%" y2="80%">
        <stop offset="0%" stopColor="#284d9d" />
        <stop offset="100%" stopColor="#1f3c88" />
      </linearGradient>
      <clipPath id="figureClip">
        <path d="M160 58c-20.434 0-37 16.566-37 37s16.566 37 37 37 37-16.566 37-37-16.566-37-37-37Zm-35.4 92.4c-19.041 0-34.6 15.56-34.6 34.6v14.6c0 10.738 8.712 19.45 19.45 19.45h99.1c10.738 0 19.45-8.712 19.45-19.45v-14.6c0-19.04-15.559-34.6-34.6-34.6Z" />
      </clipPath>
    </defs>
    <circle cx="160" cy="160" r="144" fill="none" stroke="url(#accentBlue)" strokeWidth="12" />
    <path
      d="M256 83c-21.736-24.095-54.425-39.7-96-39.7-70.8 0-126 49.482-126 116.7 0 30.95 11.215 55.607 32.21 73.986 7.09 6.309 18.19 5.17 24.222-2.506l19.087-24.21c7.159-9.07 4.465-22.392-5.715-28.075-10.895-6.094-17.304-16.105-17.304-29.195 0-26.33 24.612-48.25 54.268-48.25 26.558 0 46.714 18.597 46.714 43.59 0 18.435-9.586 32.9-25.663 37.668-6.185 1.83-10.052 8.364-8.926 14.747l5.384 30.568c1.675 9.516 10.21 16.16 19.833 15.057 63.258-7.302 103.86-55.455 103.86-113.38 0-23.743-6.853-43.811-20.97-60.02Z"
      fill="url(#midTone)"
      opacity="0.82"
    />
    <g clipPath="url(#figureClip)">
      <circle cx="160" cy="95" r="32" fill="url(#silverSheen)" />
      <path
        d="M125.5 156h69c15.482 0 28 12.518 28 28v27c0 5.523-4.477 10-10 10h-105c-5.523 0-10-4.477-10-10v-27c0-15.482 12.518-28 28-28Z"
        fill="url(#accentBlue)"
      />
      <path
        d="M160 156c-16 22-24 46-24 72h48c0-26-8-50-24-72Z"
        fill="url(#silverSheen)"
      />
    </g>
    <path
      d="M194 202.5h32c6.075 0 11 4.925 11 11v31c0 6.075-4.925 11-11 11h-32c-6.075 0-11-4.925-11-11v-31c0-6.075 4.925-11 11-11Zm3.5-9.5h25c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5h-25c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5Z"
      fill="url(#silverSheen)"
      stroke="#0F1F3D"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M80 228c33.575 44.514 87.843 67.826 150.713 54.435C264.253 271.29 289 233.382 289 186"
      fill="none"
      stroke="url(#accentBlue)"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
