import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-gray-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand / short bio */}
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-semibold shadow-sm" aria-hidden>
              SS
            </div>
            <div>
              <p className="text-white font-medium">Suva Sanpui</p>
              <p className="text-sm text-gray-400">Software Developer — frontend & full‑stack (1 yr)</p>
            </div>
          </div>

          {/* Social / contact */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:suvasanpui74@gmail.com"
              aria-label="Email Suva Sanpui"
              className="p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg width="20" height="20" fill="none" aria-hidden="true" viewBox="0 0 24 24" className="text-gray-300">
                <path d="M3 6.5v11a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 17.5v-11A1.5 1.5 0 0019.5 5h-15A1.5 1.5 0 003 6.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.2l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/suva-sanpui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" className="text-gray-300">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.16h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-4V8z"/>
              </svg>
            </a>

            <a
              href="https://github.com/suvasanpui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" className="text-gray-300">
                <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.78 3.1 8.84 7.4 10.27.54.1.74-.24.74-.52 0-.26-.01-.95-.01-1.87-3.01.66-3.65-1.45-3.65-1.45-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.4-.27-4.93-1.2-4.93-5.33 0-1.18.42-2.14 1.11-2.9-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.11a10.1 10.1 0 012.68-.36c.91 0 1.83.12 2.68.36 2.05-1.4 2.95-1.11 2.95-1.11.59 1.47.22 2.56.11 2.83.69.76 1.11 1.72 1.11 2.9 0 4.14-2.54 5.05-4.96 5.32.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .28.2.63.75.52C20.99 20.44 24.1 16.38 24.1 11.6 24.1 5.33 19.27.5 12 .5z"/>
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile (opens in new tab)"
              className="p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" className="text-gray-300">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.94 4.94 0 01-2.21.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.06 0 14.03-7.51 14.03-14.03l-.02-.64A10.02 10.02 0 0024 4.56z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} Suva Sanpui. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="/privacy" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Privacy</a>
            <a href="/terms" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
