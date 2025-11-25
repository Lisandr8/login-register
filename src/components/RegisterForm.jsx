import React, { useState } from "react";
import InputField from "./InputField";

export default function RegisterForm({ goLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.pass !== formData.confirmPass) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    console.log("Enviando registro:", formData);
    alert("Registro exitoso ✔️");
  };

  const UserIcon = <i className="bi bi-person text-lg"></i>;
  const MailIcon = <i className="bi bi-envelope text-lg"></i>;
  const LockIcon = <i className="bi bi-lock text-lg"></i>;
  const ArrowRightIcon = <i className="bi bi-arrow-right text-lg"></i>;

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 sm:p-10">

        {/* Título */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-600 mb-4 shadow-sm">
            <i className="bi bi-person-plus text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Crear Cuenta
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Regístrate para continuar
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <InputField
            id="name"
            type="text"
            label="Nombre completo"
            placeholder="Tu nombre"
            icon={UserIcon}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputField
            id="email"
            type="email"
            label="Correo electrónico"
            placeholder="email@ejemplo.com"
            icon={MailIcon}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            id="password"
            type="password"
            label="Contraseña"
            placeholder="••••••••"
            icon={LockIcon}
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
          />

          <InputField
            id="confirmPass"
            type="password"
            label="Confirmar contraseña"
            placeholder="••••••••"
            icon={LockIcon}
            name="confirmPass"
            value={formData.confirmPass}
            onChange={handleChange}
            required
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center text-sm">{error}</p>
          )}

          {/* Botón */}
          <button
            type="submit"
            className="group w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2"
          >
            Crear cuenta
            <span className="group-hover:translate-x-1 transition-transform">
              {ArrowRightIcon}
            </span>
          </button>
        </form>

        {/* Ir a login */}
        <p className="mt-8 text-center text-sm text-gray-500">
          ¿Ya tienes una cuenta?{" "}
          <span
            onClick={goLogin}
            className="font-semibold text-violet-500 hover:text-violet-600 cursor-pointer"
          >
            Iniciar sesión
          </span>
        </p>

      </div>
    </div>
  );
}
