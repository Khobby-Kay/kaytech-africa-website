/** Stylized avatar — Teedra, KayTech's Ghanaian assistant. */
export function TeedraAvatar({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="80" height="80" rx="40" fill="#1a4971" />
      <ellipse cx="40" cy="52" rx="22" ry="18" fill="#E8C4A8" />
      <ellipse cx="40" cy="38" rx="17" ry="19" fill="#F0D4BC" />
      <path
        d="M22 34c2-10 10-16 18-16s16 6 18 16c-6-4-12-6-18-6s-12 2-18 6z"
        fill="#2A1810"
      />
      <path
        d="M26 28c4-2 8-3 14-3s10 1 14 3"
        stroke="#2A1810"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="33" cy="38" rx="2.5" ry="3" fill="#2A1810" />
      <ellipse cx="47" cy="38" rx="2.5" ry="3" fill="#2A1810" />
      <path
        d="M34 46c3 3 9 3 12 0"
        stroke="#C4866A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 42c3 8 8 12 22 12s19-4 22-12"
        stroke="#E8C4A8"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
