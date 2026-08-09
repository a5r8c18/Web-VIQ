const ErrorHandler = {
  // Generic error messages for different scenarios
  errorMessages: {
    network:
      "Sorry, we encountered a network issue. Please check your connection and try again.",
    server:
      "Sorry, we're experiencing technical difficulties. Please try again in a few moments.",
    validation: "Please check your information and try again.",
    general: "Sorry, something went wrong. Please try again later.",
  },

  // Centralized error processing
  processError: (error) => {
    console.error("Contact Widget Error:", error);

    // Handle different error types
    if (
      error instanceof TypeError &&
      error.message.includes("Failed to fetch")
    ) {
      return ErrorHandler.errorMessages.network;
    }

    if (error.message && error.message.includes("Server error")) {
      return ErrorHandler.errorMessages.server;
    }

    if (
      (error.message && error.message.includes("400")) ||
      error.message.includes("422")
    ) {
      return ErrorHandler.errorMessages.validation;
    }

    // Default generic error
    return ErrorHandler.errorMessages.general;
  },
};

const initContactWidget = () => {
  // Default configuration with theme-aware colors
  const config = {
    animationDuration: "0.3s",
    widgetPosition: { bottom: "30px", right: "30px" },
    formWidth: "380px",
    customColors: window.contactWidgetConfig?.colors || {},
  };

  // Utility to validate and parse colors
  const parseColor = (color) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = color;
    return ctx.fillStyle === color || /^#[0-9A-F]{6}$/i.test(color)
      ? color
      : null;
  };

  // Convert hex to RGB for CSS rgba
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  // Detect site's color scheme and colors
  const detectSiteTheme = () => {
    const body = document.body;
    const html = document.documentElement;

    // Check for theme in localStorage (used by ThemeProvider)
    const storedTheme = localStorage.getItem("vite-ui-theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Check for theme classes on html or body elements
    const hasDarkClass =
      html.classList.contains("dark") || body.classList.contains("dark");

    // Check for data-theme attribute
    const dataTheme =
      html.getAttribute("data-theme") || body.getAttribute("data-theme");

    // Determine if we're in dark mode
    const isDarkMode =
      storedTheme === "dark" ||
      (storedTheme === "system" && systemPrefersDark) ||
      hasDarkClass ||
      dataTheme === "dark" ||
      (storedTheme === null && systemPrefersDark);

    return {
      isDark: isDarkMode,
      textColor: isDarkMode ? "#f3f4f6" : "#111827",
      bgColor: isDarkMode ? "#1f2937" : "#ffffff",
      primaryColor: config.customColors?.primary || "#10B981",
      borderColor: isDarkMode
        ? "rgba(75, 85, 99, 0.3)"
        : "rgba(209, 213, 219, 0.5)",
      successColor: config.customColors?.success || "#10B981",
    };
  };

  // Get contrast color
  const getContrastColor = (bgColor) => {
    try {
      const rgb = parseColor(bgColor);
      if (!rgb) return "#ffffff";
      const r = parseInt(rgb.slice(1, 3), 16);
      const g = parseInt(rgb.slice(3, 5), 16);
      const b = parseInt(rgb.slice(5, 7), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? "#000000" : "#ffffff";
    } catch {
      return "#ffffff";
    }
  };

  let siteTheme = detectSiteTheme();

  // Colores usando variables CSS del sistema
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  const primaryForeground = getComputedStyle(document.documentElement).getPropertyValue('--primary-foreground').trim();
  const cardBg = getComputedStyle(document.documentElement).getPropertyValue('--card').trim();
  const cardFg = getComputedStyle(document.documentElement).getPropertyValue('--card-foreground').trim();
  const border = getComputedStyle(document.documentElement).getPropertyValue('--border').trim();
  const input = getComputedStyle(document.documentElement).getPropertyValue('--input').trim();
  const foreground = getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim();
  const sidebar = getComputedStyle(document.documentElement).getPropertyValue('--sidebar').trim();
  
  // Colores para botones usando variables del sistema
  const primaryGradient = `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 50%, ${primaryColor}bb 100%)`;
  const btnTextColor = primaryForeground;
  const successColor = primaryColor;

  // Colores que cambian con el tema usando variables CSS
  let formBgColor = cardBg + 'f0'; // Añadir transparencia
  let formTextColor = cardFg;
  let borderColor = border;
  let inputBgColor = input;
  let inputFocusBgColor = cardBg;

  // Create or update styles
  const updateStyles = () => {
    const styleId = "contact-widget-styles";
    let style = document.getElementById(styleId);
    if (!style) {
      style = document.createElement("style");
      style.id = styleId;
      document.head.appendChild(style);
    }

    const primaryRgb = hexToRgb(siteTheme.primaryColor);

    style.textContent = `
      @keyframes floatIn {
        0% { 
          opacity: 0; 
          transform: translateY(20px) scale(0.95); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
      }

      @keyframes floatOut {
        0% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: translateY(20px) scale(0.95); 
        }
      }

      @keyframes glow-breathe {
        0%, 100% {
          box-shadow:
            inset 0 1px 0 rgba(255,251,230,0.09),
            inset 0 -1px 0 rgba(0,0,0,0.25),
            0 0 22px rgba(216,164,85,0.12);
        }
        50% {
          box-shadow:
            inset 0 1px 0 rgba(255,251,230,0.14),
            inset 0 -1px 0 rgba(0,0,0,0.2),
            0 0 36px rgba(216,164,85,0.28),
            0 0 80px rgba(216,164,85,0.08);
        }
      }

      @keyframes shimmer-sweep {
        0%   { transform: translateX(-110%) skewX(-15deg); }
        100% { transform: translateX(140%) skewX(-15deg); }
      }

      @keyframes cw-p1 {
        0%, 100% { transform: translate(0, 0) scale(1);        opacity: 0.45; }
        25%      { transform: translate(3px, -7px) scale(1.15); opacity: 0.9; }
        50%      { transform: translate(-2px, -3px) scale(0.9);  opacity: 0.55; }
        75%      { transform: translate(1px, -9px) scale(1.05); opacity: 0.8; }
      }
      @keyframes cw-p2 {
        0%, 100% { transform: translate(0, 0) scale(1);       opacity: 0.35; }
        30%      { transform: translate(-4px, -6px) scale(1.2);  opacity: 0.85; }
        60%      { transform: translate(3px, -2px) scale(0.85); opacity: 0.5; }
      }
      @keyframes cw-p3 {
        0%, 100% { transform: translate(0, 0) scale(1);        opacity: 0.5; }
        40%      { transform: translate(5px, -5px) scale(1.25); opacity: 0.95; }
        70%      { transform: translate(-3px, -8px) scale(0.95); opacity: 0.4; }
      }
      @keyframes cw-p4 {
        0%, 100% { transform: translate(0, 0) scale(1);        opacity: 0.3; }
        35%      { transform: translate(-2px, -10px) scale(1.1); opacity: 0.8; }
        65%      { transform: translate(4px, -1px) scale(0.9);  opacity: 0.45; }
      }
      @keyframes cw-p5 {
        0%, 100% { transform: translate(0, 0) scale(1);       opacity: 0.4; }
        45%      { transform: translate(2px, -7px) scale(1.15); opacity: 0.85; }
        75%      { transform: translate(-5px, -3px) scale(0.9); opacity: 0.5; }
      }

      /* Nueva animación para el avión de papel */
      @keyframes paperPlaneFly {
        0% {
          transform: translateX(0) translateY(0) rotate(0deg);
          opacity: 0;
        }
        20% {
          transform: translateX(10px) translateY(-5px) rotate(5deg);
          opacity: 1;
        }
        40% {
          transform: translateX(20px) translateY(-10px) rotate(10deg);
          opacity: 1;
        }
        60% {
          transform: translateX(30px) translateY(-15px) rotate(15deg);
          opacity: 1;
        }
        80% {
          transform: translateX(40px) translateY(-20px) rotate(20deg);
          opacity: 0.5;
        }
        100% {
          transform: translateX(50px) translateY(-25px) rotate(25deg);
          opacity: 0;
        }
      }

      .contact-widget-container {
        position: fixed;
        bottom: ${config.widgetPosition.bottom};
        right: ${config.widgetPosition.right};
        z-index: 10000;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        overflow: visible;
      }

      /* Tablet */
      @media (max-width: 768px) {
        .contact-widget-form {
          width: 340px;
          padding: 20px;
        }
        .contact-widget-form h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        .contact-widget-form .form-group {
          margin-bottom: 16px;
        }
        .contact-widget-form input,
        .contact-widget-form textarea {
          padding: 10px 14px;
          font-size: 14px;
        }
        .contact-widget-form textarea {
          min-height: 100px;
        }
      }

      /* Móvil */
      @media (max-width: 640px) {
        .contact-widget-container {
          bottom: 12px;
          right: 12px;
        }
        .contact-widget-btn {
          min-width: auto;
          height: 48px;
          padding: 0 16px;
          gap: 8px;
          font-size: 12px;
          border-radius: 9999px;
        }
        .contact-widget-btn svg {
          width: 18px;
          height: 18px;
        }
        .contact-widget-form {
          position: fixed;
          top: 12px;
          bottom: auto;
          right: 12px;
          left: 12px;
          width: auto;
          max-height: calc(100vh - 80px);
          max-height: calc(100dvh - 80px);
          padding: 18px;
          border-radius: 14px;
          transform-origin: bottom right;
        }
        .contact-widget-form h4 {
          font-size: 17px;
          margin-bottom: 14px;
        }
        .contact-widget-form .form-group {
          margin-bottom: 14px;
        }
        .contact-widget-form label {
          font-size: 13px;
          margin-bottom: 6px;
        }
        .contact-widget-form input,
        .contact-widget-form textarea {
          padding: 10px 12px;
          font-size: 14px;
          border-radius: 8px;
        }
        .contact-widget-form textarea {
          min-height: 80px;
        }
        .contact-widget-submit {
          padding: 10px 20px;
          font-size: 13px;
          min-width: 100px;
          width: 100%;
        }
        .contact-widget-success {
          padding: 14px;
          font-size: 13px;
        }
        .contact-widget-footer {
          margin-top: 14px;
          padding-top: 12px;
          font-size: 11px;
        }
        .contact-widget-charcount {
          font-size: 11px;
        }
      }

      /* Móvil muy pequeño */
      @media (max-width: 380px) {
        .contact-widget-container {
          bottom: 8px;
          right: 8px;
        }
        .contact-widget-text {
          display: none;
        }
        .contact-widget-btn {
          min-width: 48px;
          width: 48px;
          height: 48px;
          padding: 0;
          justify-content: center;
          border-radius: 9999px;
        }
        .contact-widget-form {
          top: 8px;
          bottom: auto;
          right: 8px;
          left: 8px;
          padding: 14px;
          max-height: calc(100vh - 72px);
          max-height: calc(100dvh - 72px);
        }
        .contact-widget-form h4 {
          font-size: 16px;
        }
      }

      /* Botón principal - Glass morphism + brass */
      .contact-widget-btn {
        background: linear-gradient(160deg, rgba(216,164,85,0.14) 0%, rgba(180,130,50,0.06) 45%, rgba(216,164,85,0.02) 100%);
        color: #d8a455;
        border: 1px solid rgba(216,164,85,0.32);
        border-radius: 9999px;
        min-width: 160px;
        height: 52px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow:
          inset 0 1px 0 rgba(255,251,230,0.09),
          inset 0 -1px 0 rgba(0,0,0,0.25),
          0 0 22px rgba(216,164,85,0.12);
        transition: all 0.5s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 24px;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        animation: glow-breathe 3.5s ease-in-out infinite;
      }

      .contact-widget-text {
        font-weight: 600;
        letter-spacing: 0.1em;
        text-shadow: 0 0 8px rgba(216,164,85,0.35), 0 0 20px rgba(216,164,85,0.12);
        position: relative;
        z-index: 10;
      }

      .contact-widget-btn svg {
        width: 20px;
        height: 20px;
        stroke-width: 1.5;
        position: relative;
        z-index: 10;
      }

      .contact-widget-btn:hover {
        border-color: rgba(216,164,85,0.65);
        background: linear-gradient(160deg, rgba(216,164,85,0.2) 0%, rgba(180,130,50,0.08) 50%, rgba(216,164,85,0.03) 100%);
        box-shadow:
          inset 0 1px 0 rgba(255,251,230,0.14),
          inset 0 -1px 0 rgba(0,0,0,0.2),
          0 0 36px rgba(216,164,85,0.28),
          0 0 80px rgba(216,164,85,0.08);
        transform: scale(1.045);
        animation: none;
      }

      /* Shimmer sweep */
      .contact-widget-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -110%;
        width: 200%;
        height: 100%;
        background: linear-gradient(100deg, transparent 28%, rgba(255,255,255,0.22) 46%, rgba(255,255,255,0.06) 54%, transparent 72%);
        transform: skewX(-15deg);
        transition: none;
      }

      .contact-widget-btn:hover::before {
        animation: shimmer-sweep 0.85s ease-out forwards;
      }

      /* Floating particles inside button */
      .cw-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        z-index: 5;
      }

      /* Formulario - Estilo actualizado */
      .contact-widget-form {
        display: none;
        position: absolute;
        bottom: 80px;
        right: 0;
        width: ${config.formWidth};
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 120px);
        max-height: calc(100dvh - 120px);
        overflow-y: auto;
        box-sizing: border-box;
        background: ${formBgColor};
        color: ${formTextColor};
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15),
                   0 0 20px ${primaryColor}1a;
        border: 1px solid ${borderColor};
        backdrop-filter: blur(20px);
        animation: floatIn ${
          config.animationDuration
        } cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: bottom right;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .contact-widget-form::-webkit-scrollbar {
        display: none;
      }

      .contact-widget-form.closing {
        animation: floatOut ${
          config.animationDuration
        } cubic-bezier(0.4, 0, 0.2, 1);
      }

      .contact-widget-form h4 {
        margin: 0 0 20px 0;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #d8a455;
        text-shadow: 0 0 10px rgba(216,164,85,0.25);
      }

      .contact-widget-form .form-group {
        margin-bottom: 20px;
      }

      .contact-widget-form label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
        color: ${formTextColor};
      }

      .contact-widget-form input,
      .contact-widget-form textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid ${borderColor};
        border-radius: 10px;
        font-size: 14px;
        transition: all ${config.animationDuration} ease;
        background: ${
          siteTheme.isDark
            ? "rgba(31, 41, 55, 0.5)"
            : "rgba(249, 250, 251, 0.8)"
        };
        color: ${formTextColor};
        backdrop-filter: blur(10px);
        box-sizing: border-box;
      }

      .contact-widget-form input:focus,
      .contact-widget-form textarea:focus {
        outline: none;
        border-color: ${primaryColor};
        box-shadow: 0 0 0 3px ${primaryColor}20,
                   0 0 0 1px ${primaryColor};
        background: ${
          siteTheme.isDark
            ? "rgba(31, 41, 55, 0.8)"
            : "rgba(255, 255, 255, 0.95)"
        };
      }

      .contact-widget-form textarea {
        min-height: 120px;
        resize: vertical;
      }

      /* Botón de enviar - Glass morphism + brass */
      .contact-widget-submit {
        background: linear-gradient(160deg, rgba(216,164,85,0.14) 0%, rgba(180,130,50,0.06) 45%, rgba(216,164,85,0.02) 100%);
        color: #d8a455;
        border: 1px solid rgba(216,164,85,0.32);
        padding: 12px 28px;
        border-radius: 9999px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        transition: all 0.5s ease;
        margin-top: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        min-width: 130px;
        box-shadow:
          inset 0 1px 0 rgba(255,251,230,0.09),
          inset 0 -1px 0 rgba(0,0,0,0.25),
          0 0 18px rgba(216,164,85,0.1);
        position: relative;
        overflow: hidden;
        text-shadow: 0 0 6px rgba(216,164,85,0.3);
      }

      .contact-widget-submit:hover {
        border-color: rgba(216,164,85,0.65);
        background: linear-gradient(160deg, rgba(216,164,85,0.2) 0%, rgba(180,130,50,0.08) 50%, rgba(216,164,85,0.03) 100%);
        box-shadow:
          inset 0 1px 0 rgba(255,251,230,0.14),
          inset 0 -1px 0 rgba(0,0,0,0.2),
          0 0 30px rgba(216,164,85,0.22),
          0 0 60px rgba(216,164,85,0.06);
        transform: scale(1.03);
      }

      .contact-widget-submit:active {
        transform: scale(0.97);
      }

      /* Estados del botón de submit */
      .contact-widget-submit .submit-text {
        display: inline-block;
        transition: opacity 0.3s ease;
      }

      .contact-widget-submit .submit-icon {
        display: none;
        width: 20px;
        height: 20px;
        transition: opacity 0.3s ease;
      }

      .contact-widget-submit .flying-plane {
        position: absolute;
        width: 16px;
        height: 16px;
        opacity: 0;
        pointer-events: none;
      }

      .contact-widget-submit.show-icon .submit-text {
        display: none;
      }

      .contact-widget-submit.show-icon .submit-icon {
        display: inline-block;
      }

      .contact-widget-submit.animate-plane .flying-plane {
        animation: paperPlaneFly 1.5s ease-out forwards;
      }

      /* Mensaje de éxito - Estilo actualizado */
      .contact-widget-success {
        display: none;
        text-align: center;
        padding: 20px;
        color: ${successColor};
        background: linear-gradient(135deg, ${primaryColor}1a, ${primaryColor}0d);
        border-radius: 12px;
        margin-top: 20px;
        border: 1px solid ${primaryColor}33;
        backdrop-filter: blur(10px);
        animation: floatIn ${config.animationDuration} ease;
      }

      .contact-widget-charcount {
        display: block;
        font-size: 12px;
        margin-top: 4px;
        color: ${formTextColor};
        opacity: 0.6;
      }

      .contact-widget-footer {
        margin-top: 20px;
        padding-top: 16px;
        border-top: 1px solid ${borderColor};
        text-align: center;
        font-size: 12px;
        color: ${formTextColor};
        opacity: 0.7;
      }

      .contact-widget-footer a {
        color: ${primaryColor};
        text-decoration: none;
        font-weight: 600;
        transition: all 0.2s ease;
      }

      .contact-widget-footer a:hover {
        color: ${primaryColor}dd;
        text-decoration: underline;
      }

      .contact-widget-error {
        display: none;
        color: #ef4444;
        font-size: 12px;
        margin-top: 6px;
        font-weight: 500;
      }
    `;
  };

  // Create widget container
  const widget = document.createElement("div");
  widget.className = "contact-widget-container";
  widget.innerHTML = `
    <button class="contact-widget-btn" aria-label="Open contact chat">
      <span class="cw-particle" style="width:2px;height:2px;left:16%;top:32%;background:rgba(216,164,85,0.55);animation:cw-p1 3.5s ease-in-out infinite 0s;"></span>
      <span class="cw-particle" style="width:1.5px;height:1.5px;left:34%;top:58%;background:rgba(216,164,85,0.55);animation:cw-p2 4.2s ease-in-out infinite 0.5s;"></span>
      <span class="cw-particle" style="width:2.5px;height:2.5px;left:52%;top:26%;background:rgba(216,164,85,0.55);animation:cw-p3 3.8s ease-in-out infinite 0.8s;"></span>
      <span class="cw-particle" style="width:1.5px;height:1.5px;left:70%;top:62%;background:rgba(216,164,85,0.55);animation:cw-p4 4.5s ease-in-out infinite 1.0s;"></span>
      <span class="cw-particle" style="width:2px;height:2px;left:84%;top:36%;background:rgba(216,164,85,0.55);animation:cw-p5 3.2s ease-in-out infinite 1.2s;"></span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15V9C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 9V15C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="contact-widget-text">Contact Us</span>
    </button>
    <form class="contact-widget-form" aria-labelledby="contact-form-title">
      <h4 id="contact-form-title">Get in Touch</h4>
      <div class="form-group">
        <label for="contact-name">Name *</label>
        <input type="text" id="contact-name" placeholder="Your full name" required aria-required="true" />
        <div class="contact-widget-error" id="contact-name-error">Please enter your name</div>
      </div>
      <div class="form-group">
        <label for="contact-phone">Phone *</label>
        <input type="tel" id="contact-phone" placeholder="+1 (555) 123-4567" required aria-required="true" />
        <div class="contact-widget-error" id="contact-phone-error">Please enter a valid phone number</div>
      </div>
      <div class="form-group">
        <label for="contact-email">Email</label>
        <input type="email" id="contact-email" placeholder="your.email@example.com" />
        <div class="contact-widget-error" id="contact-email-error">Please enter a valid email address</div>
      </div>
      <div class="form-group">
        <label for="contact-message">Message *</label>
        <textarea id="contact-message" placeholder="Tell us about your project or inquiry..." required aria-required="true" maxlength="200"></textarea>
        <div class="contact-widget-error" id="contact-message-error"></div>
        <div class="contact-widget-charcount">0/200 characters</div>
      </div>
      <button type="submit" class="contact-widget-submit">
        <span class="submit-text">Send Message</span>
        <svg class="submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="flying-plane" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="contact-widget-success" aria-live="polite">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        <p>Thank you! We'll get back to you soon.</p>
      </div>
      <div class="contact-widget-footer">
        <p>Powered by <a href="https://chatrium.com" target="_blank" aria-label="Visit Chatrium website" rel="noopener noreferrer">VIQSystem INC</a></p>
      </div>
    </form>
  `;
  document.body.appendChild(widget);

  // Función para manejar la animación del botón de submit
  const initSubmitButtonAnimation = () => {
    const submitButton = widget.querySelector(".contact-widget-submit");
    if (!submitButton) return;

    let animationInterval;
    let isFormOpen = false;

    const startAnimation = () => {
      // Cambiar entre texto e ícono cada 3 segundos
      animationInterval = setInterval(() => {
        submitButton.classList.toggle("show-icon");

        // Solo activar la animación del avión volando cuando se muestra el ícono
        if (submitButton.classList.contains("show-icon")) {
          submitButton.classList.add("animate-plane");
          // Remover la clase de animación después de que termine
          setTimeout(() => {
            submitButton.classList.remove("animate-plane");
          }, 1500);
        }
      }, 3000);
    };

    const stopAnimation = () => {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
      }
      // Restaurar el estado inicial
      submitButton.classList.remove("show-icon", "animate-plane");
    };

    // Observar cuando el formulario se abre/cierra
    const form = widget.querySelector(".contact-widget-form");
    const toggleButton = widget.querySelector(".contact-widget-btn");

    if (form && toggleButton) {
      toggleButton.addEventListener("click", () => {
        const isOpen = form.style.display === "block";
        if (isOpen && !isFormOpen) {
          isFormOpen = true;
          startAnimation();
        } else if (!isOpen && isFormOpen) {
          isFormOpen = false;
          stopAnimation();
        }
      });
    }

    // Detener animación al enviar el formulario
    form.addEventListener("submit", () => {
      stopAnimation();
    });

    // Limpiar intervalo cuando se cierre el widget
    return stopAnimation;
  };

  // Formatear número de teléfono
  const formatPhoneNumber = (input) => {
    if (!input) return "";

    let numbers = input.replace(/\D/g, "");

    if (!numbers) return "";

    let formatted = "";
    if (numbers.length > 0) {
      formatted = "+" + numbers.substring(0, 1);
      if (numbers.length > 1) {
        formatted += " (" + numbers.substring(1, 4) + ")";
        if (numbers.length > 4) {
          formatted += " " + numbers.substring(4, 7);
          if (numbers.length > 7) {
            formatted += " " + numbers.substring(7, 11);
          }
        }
      }
    }
    return formatted.trim();
  };

  // Agregar manejador de eventos al input de teléfono
  const phoneInput = widget.querySelector("#contact-phone");
  if (phoneInput) {
    let lastValue = "";

    phoneInput.addEventListener("input", (e) => {
      const input = e.target;
      const cursorPosition = input.selectionStart;
      const inputValue = input.value;

      if (inputValue.length < lastValue.length) {
        lastValue = inputValue;
        return;
      }

      const formatted = formatPhoneNumber(inputValue);

      if (formatted !== inputValue) {
        input.value = formatted;

        const newPosition =
          cursorPosition + (formatted.length - inputValue.length);
        requestAnimationFrame(() => {
          input.setSelectionRange(newPosition, newPosition);
        });
      }

      lastValue = formatted;
    });
  }

  // Ensure form stays within viewport
  const adjustFormPosition = () => {
    const form = widget.querySelector(".contact-widget-form");
    if (!form) return;

    const isMobile = window.innerWidth <= 640;

    if (isMobile) {
      // En móvil: position fixed, ocupar casi toda la pantalla
      form.style.position = "fixed";
      form.style.left = "12px";
      form.style.right = "12px";
      form.style.width = "auto";
      form.style.top = "12px";
      form.style.bottom = "auto";
      form.style.maxHeight = `calc(100dvh - 80px)`;
      form.style.maxHeight = `calc(100vh - 80px)`;
    } else {
      // En desktop: position absolute, alineado al botón
      form.style.position = "absolute";
      form.style.left = "";
      form.style.top = "";
      form.style.bottom = "80px";
      form.style.right = "0";
      form.style.width = "";
      form.style.maxHeight = "";

      // Ajustar horizontal si se sale del viewport
      const rect = form.getBoundingClientRect();
      if (rect.left < 20) {
        form.style.right = `-${rect.left - 20}px`;
      }
    }
  };

  // Toggle form visibility with pop animation
  const toggleButton = widget.querySelector(".contact-widget-btn");
  const form = widget.querySelector(".contact-widget-form");
  const successMessage = widget.querySelector(".contact-widget-success");

  if (!toggleButton || !form || !successMessage) {
    console.error("Required widget elements are missing.");
    return;
  }

  // Limpiar estilos inline de posición
  const resetFormPosition = () => {
    form.style.position = "";
    form.style.top = "";
    form.style.bottom = "";
    form.style.left = "";
    form.style.right = "";
    form.style.width = "";
    form.style.maxHeight = "";
  };

  toggleButton.addEventListener("click", () => {
    const isOpen = form.style.display === "block";
    if (isOpen) {
      form.classList.add("closing");
      setTimeout(() => {
        form.style.display = "none";
        form.classList.remove("closing");
        resetFormPosition();
        toggleButton.classList.add("pulse");
      }, parseFloat(config.animationDuration) * 1000);
    } else {
      form.style.display = "block";
      adjustFormPosition();
      toggleButton.classList.remove("pulse");
      const nameInput = form.querySelector("#contact-name");
      if (nameInput) nameInput.focus();
    }
  });

  // Update position on window resize (only if form is open)
  window.addEventListener("resize", () => {
    if (form.style.display === "block") {
      adjustFormPosition();
    }
  });

  // Close widget when clicking outside
  document.addEventListener("click", (e) => {
    const isClickInsideWidget = widget.contains(e.target);
    const isFormOpen = form.style.display === "block";
    
    if (isFormOpen && !isClickInsideWidget) {
      form.classList.add("closing");
      setTimeout(() => {
        form.style.display = "none";
        form.classList.remove("closing");
        resetFormPosition();
        toggleButton.classList.add("pulse");
      }, parseFloat(config.animationDuration) * 1000);
    }
  });

  // Email input validation
  const emailInput = form.querySelector("#contact-email");
  if (emailInput) {
    emailInput.addEventListener("keydown", (e) => {
      if (e.key === " " || e.keyCode === 32) {
        e.preventDefault();
      }
    });

    emailInput.addEventListener("input", (e) => {
      const value = e.target.value;
      const error = form.querySelector("#contact-email-error");

      if (error) {
        error.style.display = "none";
      }

      if (value.includes(" ")) {
        e.target.value = value.replace(/\s+/g, "");
        return;
      }

      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (error) {
          error.textContent = "Please enter a valid email address.";
          error.style.display = "block";
        }
      }
    });

    emailInput.addEventListener("blur", (e) => {
      const value = e.target.value.trim();
      const error = form.querySelector("#contact-email-error");

      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (error) {
          error.textContent = "Please enter a valid email address.";
          error.style.display = "block";
        }
      }
    });
  }

  // Add real-time validation for spaces and message length
  form.querySelectorAll("input, textarea").forEach((input) => {
    if (input.id === "contact-name") {
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        let cleanText = pastedText
          .replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s'-]/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .substring(0, 50);

        const start = input.selectionStart;
        const end = input.selectionEnd;
        const newValue =
          input.value.substring(0, start) +
          cleanText +
          input.value.substring(end);

        input.value = newValue.substring(0, 50);

        const newCursorPos = start + cleanText.length;
        input.setSelectionRange(newCursorPos, newCursorPos);

        input.dispatchEvent(new Event("input"));
      });
    }

    if (input.id === "contact-email") {
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        let pastedText = e.clipboardData.getData("text");

        pastedText = pastedText
          .replace(/\s+/g, "")
          .replace(/[^a-zA-Z0-9@._-]/g, "");

        const start = input.selectionStart;
        const end = input.selectionEnd;
        let newValue =
          input.value.substring(0, start) +
          pastedText +
          input.value.substring(end);

        newValue = newValue.substring(0, 50);

        const atCount = (newValue.match(/@/g) || []).length;
        if (atCount > 1) {
          const parts = newValue.split("@");
          newValue = parts[0] + "@" + parts.slice(1).join("").replace(/@/g, "");
        }

        input.value = newValue;

        const newCursorPos = Math.min(
          start + pastedText.length,
          newValue.length
        );
        input.setSelectionRange(newCursorPos, newCursorPos);

        input.dispatchEvent(new Event("input"));
      });

      input.addEventListener("input", (e) => {
        const value = e.target.value;
        const error = form.querySelector("#contact-email-error");

        if (error) {
          error.style.display = "none";
        }

        if (value.length > 50) {
          e.target.value = value.substring(0, 50);
          if (error) {
            error.textContent = "The email cannot exceed 50 characters.";
            error.style.display = "block";
          }
          return;
        }

        if (value && !/^[a-zA-Z0-9@._-]*$/.test(value)) {
          e.target.value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
          if (error) {
            error.textContent =
              "Only letters, numbers, @, ., _ and - are allowed.";
            error.style.display = "block";
          }
        }

        const atCount = (value.match(/@/g) || []).length;
        if (atCount > 1) {
          const parts = value.split("@");
          e.target.value =
            parts[0] + "@" + parts.slice(1).join("").replace(/@/g, "");
        }
      });
    }

    if (input.id === "contact-message") {
      input.addEventListener("paste", (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        let cleanText = pastedText
          .replace(/\s+/g, " ")
          .trim()
          .substring(0, 200);

        const start = input.selectionStart;
        const end = input.selectionEnd;
        const newValue =
          input.value.substring(0, start) +
          cleanText +
          input.value.substring(end);

        input.value = newValue.substring(0, 200);

        const newCursorPos = start + cleanText.length;
        input.setSelectionRange(newCursorPos, newCursorPos);

        input.dispatchEvent(new Event("input"));
      });
    }

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      if (value.startsWith(" ")) {
        e.target.value = value.trimStart();
      }
      if (value.includes("  ")) {
        e.target.value = value.replace(/\s+/g, " ");
      }
      if (e.target.id === "contact-name") {
        const error = form.querySelector("#contact-name-error");

        if (error) {
          error.style.display = "none";
        }

        if (value.length > 50) {
          e.target.value = value.substring(0, 50);
          return;
        }

        if (value.includes("  ")) {
          e.target.value = value.replace(/\s+/g, " ");
          return;
        }

        if (e.type === "blur" && value !== value.trim()) {
          e.target.value = value.trim();
          return;
        }

        if (value && !/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s'-]+$/.test(value)) {
          e.target.value = value.replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s'-]/g, "");
          if (error) {
            error.textContent =
              "Please enter a valid name (only letters, spaces, hyphens and apostrophes are allowed).";
            error.style.display = "block";
          }
        }
      }
      if (e.target.id === "contact-message") {
        if (value.includes("  ")) {
          e.target.value = value.replace(/\s+/g, " ");
          return;
        }

        const charCount = form.querySelector(".contact-widget-charcount");
        if (charCount) {
          charCount.textContent = `${value.length}/200 characters`;
        }
        if (value.length > 200) {
          e.target.value = value.substring(0, 200);
          const error = form.querySelector("#contact-message-error");
          if (error) {
            error.textContent = "The message cannot exceed 200 characters.";
            error.style.display = "block";
          }
        }
      }
    });

    input.addEventListener("blur", (e) => {
      const value = e.target.value;
      if (value !== value.trim()) {
        e.target.value = value.trim();
      }
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = form.querySelector("#contact-name");
    const emailInput = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");
    const phoneInput = form.querySelector("#contact-phone");

    if (!nameInput || !emailInput || !messageInput) {
      console.error("Form inputs are missing.");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const phone = phoneInput?.value.trim() || "";

    // Reset error messages
    form.querySelectorAll(".contact-widget-error").forEach((el) => {
      el.style.display = "none";
    });

    let isValid = true;

    if (
      !name ||
      name.length < 2 ||
      name.length > 20 ||
      name.includes("  ") ||
      !/^[a-zA-Z\s]+$/.test(name)
    ) {
      const error = form.querySelector("#contact-name-error");
      if (error) {
        if (name.length < 2) {
          error.textContent = "The name must be at least 2 characters.";
        } else if (name.length > 20) {
          error.textContent = "The name cannot exceed 20 characters.";
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
          error.textContent = "The name must contain only letters and spaces.";
        } else {
          error.textContent = "The name cannot contain consecutive spaces.";
        }
        error.style.display = "block";
      }
      isValid = false;
    }

    if (
      !email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
      email.length > 50
    ) {
      const error = form.querySelector("#contact-email-error");
      if (error) {
        if (email.length > 50) {
          error.textContent = "The email cannot exceed 50 characters.";
        } else {
          error.textContent =
            "Please enter a valid email address (e.g., name@example.com).";
        }
        error.style.display = "block";
      }
      isValid = false;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (phone && (!/^[0-9]{10,}$/.test(cleanPhone) || phone.includes("  "))) {
      const error = form.querySelector("#contact-phone-error");
      if (error) {
        error.textContent = "The phone number must have at least 10 digits.";
        error.style.display = "block";
      }
      isValid = false;
    }

    if (
      !message ||
      message.length < 10 ||
      message.length > 200 ||
      message.includes("  ")
    ) {
      const error = form.querySelector("#contact-message-error");
      if (error) {
        error.textContent =
          "The message must be between 10 and 200 characters.";
        error.style.display = "block";
      }
      isValid = false;
    }

    if (isValid) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phoneNumber", cleanPhone);
      formData.append("message", message);
      if (email) {
        formData.append("email", email);
      }

      console.log("Sending data:", {
        name: name,
        phoneNumber: cleanPhone,
        message: message,
        email: email,
      });

      successMessage.style.display = "block";
      successMessage.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
        <p>Sending message...</p>
      `;

      fetch(`http://localhost:8080/chatrium/api/conversations/leads/submit`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          const contentType = response.headers.get("content-type");

          if (!response.ok) {
            // Create a structured error for non-2xx responses
            const error = new Error(`Server error: ${response.status}`);
            error.status = response.status;
            throw error;
          }

          if (contentType && contentType.includes("application/json")) {
            return response
              .json()
              .then((data) => ({ status: response.status, data }));
          }
          return response
            .text()
            .then((text) => ({ status: response.status, text }));
        })
        .then(({ status, data, text }) => {
          if (status >= 200 && status < 300) {
            successMessage.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
      </svg>
      <p>Thank you for your message! We'll get back to you soon.</p>
    `;
            console.log("Success:", data || text);

            form.reset();
            const charCount = form.querySelector(".contact-widget-charcount");
            if (charCount) charCount.textContent = "0/200 characters";

            setTimeout(() => {
              form.classList.add("closing");
              setTimeout(() => {
                form.style.display = "none";
                form.classList.remove("closing");
                successMessage.style.display = "none";
                toggleButton.classList.add("pulse");
              }, parseFloat(config.animationDuration) * 1000);
            }, 2000);
          } else {
            throw new Error(`Unexpected response status: ${status}`);
          }
        })
        .catch((error) => {
          console.error("Contact Widget Submission Error:", error);

          // Use the centralized error handler
          const userFriendlyMessage = ErrorHandler.processError(error);

          successMessage.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <p>${userFriendlyMessage}</p>
  `;
          successMessage.style.display = "block";

          setTimeout(() => {
            successMessage.style.display = "none";
          }, 5000); // Show error for 5 seconds
        });
    }
  });

  // Trap focus within form for accessibility
  const focusableElements = form.querySelectorAll("input, textarea, button");
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  if (firstFocusable && lastFocusable) {
    form.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    });
  }

  // Update theme dynamically
  const handleThemeChange = () => {
    siteTheme = detectSiteTheme();

    // Actualizar solo las variables de color que deben cambiar con el tema
    formBgColor = siteTheme.isDark
      ? "rgba(17, 24, 39, 0.95)"
      : "rgba(255, 255, 255, 0.95)";
    formTextColor = siteTheme.isDark ? "#f9fafb" : "#111827";
    borderColor = siteTheme.isDark
      ? "rgba(75, 85, 99, 0.3)"
      : "rgba(209, 213, 219, 0.5)";
    inputBgColor = siteTheme.isDark
      ? "rgba(31, 41, 55, 0.5)"
      : "rgba(249, 250, 251, 0.8)";
    inputFocusBgColor = siteTheme.isDark
      ? "rgba(31, 41, 55, 0.8)"
      : "rgba(255, 255, 255, 0.95)";

    updateStyles();
  };

  // Escuchar cambios en la preferencia del sistema
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addEventListener("change", handleThemeChange);

  // Escuchar cambios en el localStorage para el tema
  const handleStorageChange = (e) => {
    if (e.key === "vite-ui-theme") {
      handleThemeChange();
    }
  };
  window.addEventListener("storage", handleStorageChange);

  // Escuchar cambios en las clases del body/html
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        (mutation.attributeName === "class" ||
          mutation.attributeName === "data-theme")
      ) {
        handleThemeChange();
      }
    });
  });

  // Observar cambios en el body y html
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
    childList: false,
    subtree: false,
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
    childList: false,
    subtree: false,
  });

  // Inicializar la animación del botón de submit
  const stopSubmitAnimation = initSubmitButtonAnimation();

  // Limpieza de event listeners
  const cleanup = () => {
    if (stopSubmitAnimation) {
      stopSubmitAnimation();
    }
    darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    window.removeEventListener("storage", handleStorageChange);
    observer.disconnect();
  };

  // Devolver función de limpieza si es necesario
  if (typeof returnCleanup !== "undefined") {
    returnCleanup(cleanup);
  }

  // Initial style rendering
  updateStyles();
};

// Export the function for use in other modules
export { initContactWidget };

export default initContactWidget;
