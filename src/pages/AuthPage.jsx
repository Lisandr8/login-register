import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function AuthPage() {
  const [view, setView] = useState("login");

  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {view === "login" && (
          <motion.div
            key="login"
            {...animations}
            className="w-full flex justify-center"
          >
            <LoginForm goRegister={() => setView("register")} />
          </motion.div>
        )}

        {view === "register" && (
          <motion.div
            key="register"
            {...animations}
            className="w-full flex justify-center"
          >
            <RegisterForm goLogin={() => setView("login")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
