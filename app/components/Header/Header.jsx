import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import MobileNav from "./MobileNav/MobileNav";

export default function Header() {
  return (
    <header className="flex border-b-[1px] border-slate-300/10 p-8 shadow-2xl">
      <Logo />
      <Navbar />
      {/* The mobile navbar is hidden on larger screens */}
      <MobileNav />
    </header>
  );
}
