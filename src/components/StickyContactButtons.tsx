import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

const StickyContactButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "0680518757"; // Humbulani's number
  const whatsappNumber = "27680518757"; // WhatsApp format with country code

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="text-white" size={24} />
        <span className="absolute -top-12 right-0 bg-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-14 h-14 gradient-electric rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 glow-electric-sm"
        aria-label="Call us"
      >
        <Phone className="text-primary-foreground" size={24} />
        <span className="absolute -top-12 right-0 bg-navy text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default StickyContactButtons;

