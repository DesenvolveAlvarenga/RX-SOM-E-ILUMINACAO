import { useCallback, useEffect, useState } from 'react';

const KEY = 'rx-theme';

function readInitial() {
  if (typeof document === 'undefined') return 'dark';
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' ? 'light' : 'dark';
}

/** Tema claro/escuro. Começa no escuro e lembra a escolha do visitante. */
export function useTheme() {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#FAF8F2' : '#0A0A0B');
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      /* armazenamento indisponível: segue sem lembrar */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggle };
}
