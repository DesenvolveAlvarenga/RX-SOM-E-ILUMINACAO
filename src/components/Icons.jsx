/* Ícones em traço (stroke), herdam a cor do texto. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  viewBox: '0 0 24 24',
};

export function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const p = { ...base, width: size, height: size, strokeWidth };
  switch (name) {
    case 'whatsapp':
      return (
        <svg {...p}>
          <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6z" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...p}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...p}>
          <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'speaker':
      return (
        <svg {...p}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <circle cx="12" cy="14" r="4" />
          <circle cx="12" cy="6.5" r="1.2" />
        </svg>
      );
    case 'light':
      return (
        <svg {...p}>
          <path d="M8 2h8l1 6H7z" />
          <path d="M12 8v2" />
          <path d="M6 22l6-10 6 10" />
          <path d="M9 22l3-5 3 5" />
        </svg>
      );
    case 'led':
      return (
        <svg {...p}>
          <rect x="2.5" y="3.5" width="19" height="13" rx="1.5" />
          <path d="M8 21h8M12 16.5V21" />
          <path d="M6.5 7.5h2M11 7.5h2M15.5 7.5h2M6.5 12h2M11 12h2M15.5 12h2" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...p}>
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      );
    case 'close':
      return (
        <svg {...p}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...p}>
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        </svg>
      );
    default:
      return null;
  }
}
