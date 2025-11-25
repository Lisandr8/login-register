import { useState } from "react";
import InputField from "./InputField";
import SocialButton from "./SocialButton";
import GoogleIcon from "./icons/GoogleIcon";
import AppleIcon from "./icons/AppleIcon";

export default function LoginForm({ goRegister }) {
  const [isLoading, setIsLoading] = useState(false);

  const MailIcon = <i className="bi bi-envelope text-lg"></i>;
  const LockIcon = <i className="bi bi-lock text-lg"></i>;
  const LogInIcon = <i className="bi bi-box-arrow-in-right text-2xl"></i>;
  const ArrowRightIcon = <i className="bi bi-arrow-right text-lg"></i>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 sm:p-10">

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-600 mb-4 shadow-sm">
            {LogInIcon}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-gray-500 mt-2 text-sm">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            id="email"
            type="email"
            label="Correo Electrónico"
            placeholder="hola@ejemplo.com"
            icon={MailIcon}
            required
          />

          <div className="space-y-1">
            <InputField
              id="password"
              type="password"
              label="Contraseña"
              placeholder="••••••••"
              icon={LockIcon}
              required
            />

            <div className="flex justify-end">
              <a href="#" className="text-xs font-medium text-violet-500 hover:text-violet-600 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Iniciar Sesión{" "}
                <span className="group-hover:translate-x-1 transition-transform">{ArrowRightIcon}</span>
              </>
            )}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white/50 backdrop-blur-sm px-4 text-gray-400 font-medium tracking-wider">
              O continúa con
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialButton icon={<GoogleIcon />} label="Google" />
          <SocialButton icon={<AppleIcon />} label="Apple" />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <span
            onClick={goRegister}
            className="font-semibold text-violet-500 hover:text-violet-600 cursor-pointer"
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}
