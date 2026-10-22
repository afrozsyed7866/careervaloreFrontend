import { Telegram, WhatsApp, Instagram, Home,LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Company Logo and Name */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <img
            src="./logo.jpg"
            alt="Company Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <span className="text-2xl font-semibold text-gray-200">CareerValore</span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
        <a
    href="https://www.linkedin.com/company/careervalore/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-blue-700 transition-transform hover:scale-110 duration-200"
    aria-label="LinkedIn"
  >
    <LinkedIn fontSize="medium" /> {/* Added LinkedIn icon */}
  </a>
          <a
            href="https://t.me/careervalore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-transform hover:scale-110 duration-200"
            aria-label="Telegram"
          >
            <Telegram fontSize="medium" /> {/* Reduced from large to medium */}
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vay7sUV11ulUIhLBUI44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-500 transition-transform hover:scale-110 duration-200"
            aria-label="WhatsApp"
          >
            <WhatsApp fontSize="medium" /> {/* Reduced from large to medium */}
          </a>
          <a
            href="https://www.instagram.com/careervalore?igsh=bjl4N2EyaW54b2dm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-transform hover:scale-110 duration-200"
            aria-label="Instagram"
          >
            <Instagram fontSize="medium" /> {/* Reduced from large to medium */}
          </a>
          <a
            href="/"
            className="text-gray-300 hover:text-gray-400 transition-transform hover:scale-110 duration-200"
            aria-label="Home"
          >
            <Home fontSize="medium" /> {/* Reduced from large to medium */}
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm text-gray-500 border-t border-gray-700 pt-4">
  © {new Date().getFullYear()} CareerValore. All rights reserved.
  <div className="mt-2">
    <a href="/terms-conditions" className="text-gray-500 hover:text-gray-300 mx-2">
    Terms conditions
    </a>
    <span>|</span>
    <a href="/privacy-policy" className="text-gray-500 hover:text-gray-300 mx-2">
      Privacy Policy
    </a>
  </div>
</div>
    </footer>
  );
}