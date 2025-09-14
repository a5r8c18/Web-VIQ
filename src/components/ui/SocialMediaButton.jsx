import { useState } from 'react';
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
      color: 'hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-500'
    },
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/viqsystems',
      label: 'LinkedIn',
      color: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600'
    },
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/viqsystems',
      label: 'Facebook',
      color: 'hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-500'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/viq.systems',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-pink-500/10 hover:via-purple-500/10 hover:to-yellow-500/10 hover:border-pink-500/30 hover:text-pink-500'
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/channel/UCqwGR2DEiXghq0gYXUi1U8g',
      label: 'YouTube',
      color: 'hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500'
    },
    { 
      icon: null, 
      url: 'https://www.tiktok.com/@viqsystems',
      label: 'TikTok',
      customIcon: true,
      customIconPath: (
        <>
          <path fill="#FFD700" d="M9.875 11.842v-1.119A9 9 0 0 0 8.7 10.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 20.55c0-4.737 3.794-8.598 8.495-8.707"></path>
          <path fill="#FFD700" d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36V7.111a6.5 6.5 0 0 1-3.584-1.067 6.57 6.57 0 0 0 3.584 2.122"></path>
          <path fill="#D4AF37" d="M20.41 6.044a6.54 6.54 0 0 1-1.617-4.316h-1.265a6.56 6.56 0 0 0 2.881 4.316M8.707 15.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.41 0 .805.07 1.176.185v-4.833a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"></path>
          <path fill="#D4AF37" d="M23.992 8.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.718-.002-1.38-.148"></path>
          <path fill="#FFF8DC" d="M17.413 19.348V9.726a11.25 11.25 0 0 0 6.58 2.116V8.166a6.57 6.57 0 0 1-3.584-2.122 6.6 6.6 0 0 1-2.887-4.316h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715"></path>
        </>
      ),
      color: 'hover:bg-yellow-100/10 hover:border-yellow-500/30 hover:text-yellow-500',
      viewBox: '0 0 24 24',
      iconClass: 'w-4 h-4',
      customIconElement: (
        <div className="relative w-4 h-4">
          <svg viewBox="0 0 24 24" className="absolute top-0 left-0 w-full h-full">
            <path fill="#FFD700" d="M9.875 11.842v-1.119A9 9 0 0 0 8.7 10.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 20.55c0-4.737 3.794-8.598 8.495-8.707"></path>
            <path fill="#FFD700" d="M10.087 24.526c2.14 0 3.89-1.707 3.966-3.83l.007-18.968h3.462a7 7 0 0 1-.109-1.202h-4.727l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36V7.111a6.5 6.5 0 0 1-3.584-1.067 6.57 6.57 0 0 0 3.584 2.122"></path>
            <path fill="#D4AF37" d="M20.41 6.044a6.54 6.54 0 0 1-1.617-4.316h-1.265a6.56 6.56 0 0 0 2.881 4.316M8.707 15.365a3.98 3.98 0 0 0-3.974 3.976c0 1.528.87 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.41 0 .805.07 1.176.185v-4.833a9 9 0 0 0-1.176-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.175-.185"></path>
            <path fill="#D4AF37" d="M23.992 8.166v3.676a11.25 11.25 0 0 1-6.579-2.116v9.622c0 4.8-3.903 8.713-8.706 8.713a8.67 8.67 0 0 1-4.99-1.579 8.7 8.7 0 0 0 6.37 2.781c4.797 0 8.706-3.906 8.706-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.718-.002-1.38-.148"></path>
            <path fill="#FFF8DC" d="M17.413 19.348V9.726a11.25 11.25 0 0 0 6.58 2.116V8.166a6.57 6.57 0 0 1-3.584-2.122 6.6 6.6 0 0 1-2.887-4.316h-3.463l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83 3.99 3.99 0 0 1-3.225-1.656 3.99 3.99 0 0 1-2.134-3.523A3.98 3.98 0 0 1 8.7 15.372c.409 0 .805.07 1.176.185v-3.708c-4.702.103-8.496 3.964-8.496 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.989 1.58c4.797 0 8.706-3.913 8.706-8.715"></path>
          </svg>
        </div>
      )
    },
    { 
      icon: null, 
      url: 'https://twitter.com/viqsystems',
      label: 'X (Twitter)',
      customIcon: true,
      customIconPath: (
        <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
      ),
      color: 'hover:bg-white/10 hover:border-gray-300/30 hover:text-white',
      viewBox: '0 0 24 24'
    }
  ];

  return (
    <div className="relative inline-block" onBlur={closeMenu} tabIndex="0">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 cursor-pointer h-10 px-4 py-2 min-w-40 relative bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white border border-black/10 dark:border-white/10 transition-colors duration-200"
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
            className={`h-10 w-10 flex items-center justify-center bg-gray-700/50 border border-gray-600 text-gray-400 hover:text-white transition-colors duration-200 ${
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
