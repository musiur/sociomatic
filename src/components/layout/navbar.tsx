import BrandLogo from "../assets/brandlogo";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-muted sticky top-0 z-50">
      <div className="container py-3 flex items-center justify-between">
        <BrandLogo />
        <div>
          Make this NAVBAR according to FIGMA mesurements and contents Bro!
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
