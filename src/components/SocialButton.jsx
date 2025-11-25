import React from "react";

export default function SocialButton({ icon, label, ...props }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all duration-200 shadow-sm group"
      {...props}
    >
      <span className="text-gray-500 group-hover:text-gray-900 transition-colors">
        {icon}
      </span>
      {label}
    </button>
  );
}
