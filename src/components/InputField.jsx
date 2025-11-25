import React, { useState } from "react";

export default function InputField({ label, icon, className = "", type = "text", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="space-y-1.5">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 ml-1">
        {label}
      </label>

      <div className="relative group">
        {/* Icono izquierda */}
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-violet-500 transition-colors">
          {icon}
        </div>

        {/* Input */}
        <input
          {...props}
          type={inputType}
          className={`block w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-200 text-sm outline-none ${className}`}
        />

        {/* Botón mostrar/ocultar (solo para password) */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-violet-500 transition"
          >
            {showPassword ? (
              <i className="bi bi-eye-slash text-lg"></i>
            ) : (
              <i className="bi bi-eye text-lg"></i>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
