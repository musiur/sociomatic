import Asset___AuthBackground from "@/components/assets/auth-background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen justify-center p-4 pt-32">
      <Asset___AuthBackground className="w-full h-full absolute inset-0 z-[-1] -translate-y-1/4" />
      <div className="max-w-[520px] w-full mx-auto">
        <div className="bg-white rounded-[32px] shadow-xl border space-y-8 p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
