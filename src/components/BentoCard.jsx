import React from "react";
import { ArrowRight } from "lucide-react";

const BentoCard = ({
  icon,
  title,
  description,
  bgColor = "bg-white/10", 
  titleColor = "text-white",
  descriptionColor = "text-white/80",
  buttonColor = "text-[#98d422]",
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md backdrop-blur-md border border-white/10 transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:bg-[#98d422]/20 ${bgColor} ${className}`}
    >

      {icon && (
        <div className="text-3xl mb-4 text-[#98d422]">
          {icon}
        </div>
      )}

      {title && (
        <h3 className={`text-xl font-bold mb-2 ${titleColor}`}>
          {title}
        </h3>
      )}

      {description && (
        <p className={`mb-4 text-sm leading-relaxed ${descriptionColor}`}>
          {description}
        </p>
      )}

      <button className={`inline-flex items-center gap-2 text-sm font-medium hover:underline ${buttonColor}`}>
        Read more <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default BentoCard;

