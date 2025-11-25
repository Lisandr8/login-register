import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-violet-50 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <AuthPage />
    </main>
  );
}
