import React, { useState } from 'react';
import { MessageCircle, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const SocialMediaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      url: 'https://wa.link/rpkawi',
      label: 'WhatsApp',
      color: 'hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-500'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/viqsystems',
      label: 'LinkedIn',
      color: 'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400'
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/viqsystems',
      label: 'Facebook',
      color: 'hover:bg-blue-600/20 hover:border-blue-600/50 hover:text-blue-500'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/viq.systems',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-pink-500/20 hover:via-purple-500/20 hover:to-yellow-500/20 hover:border-pink-500/50 hover:text-pink-400'
    },
    {
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UCqwGR2DEiXghq0gYXUi1U8g',
      label: 'YouTube',
      color: 'hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-500'
    },
    {
      icon: null,
      url: 'https://www.tiktok.com/@viqsystems',
      label: 'TikTok',
      customIcon: true,
      customIconPath: (
        <>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </>
      ),
      color: 'hover:bg-black/20 hover:border-gray-300/50 hover:text-white',
      viewBox: '0 0 24 24',
      iconClass: 'w-5 h-5',
    },
    {
      icon: null,
      url: 'https://twitter.com/viqsystems',
      label: 'X (Twitter)',
      customIcon: true,
      customIconPath: (
        <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
      ),
      color: 'hover:bg-black/20 hover:border-gray-300/50 hover:text-white',
      viewBox: '0 0 24 24',
      iconClass: 'w-5 h-5',
    }
  ];

  return (
    <div className="relative inline-block" onBlur={closeMenu} tabIndex="0">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer h-10 px-4 py-2 min-w-40 relative bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white border border-black/10 dark:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link w-4 h-4" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          {isOpen ? 'Cerrar' : 'Social'}
        </span>
      </button>

      <div
        className={`absolute top-0 left-full ml-2 flex h-10 overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'w-60 opacity-100' : 'w-0 opacity-0 pointer-events-none'
        }`}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-10 w-10 flex items-center justify-center bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-300/40 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-105 ${
              social.color
            } ${
              index === 0 ? 'rounded-l-md' : index === socialLinks.length - 1 ? 'rounded-r-md' : ''
            }`}
            title={social.label}
            aria-label={social.label}
          >
            {social.icon ? (
              <social.icon className="w-5 h-5" />
            ) : social.customIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox={social.viewBox || '0 0 24 24'}
                fill="currentColor"
                className={social.iconClass || "w-5 h-5"}
              >
                {social.customIconPath}
              </svg>
            ) : null}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaButton;