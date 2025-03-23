import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Icons from "./Icons/Icons";
import MobileNav from "./MobileNav/MobileNav";

export default function Header() {
  return (
    <header className="flex border-b-[1px] border-slate-300/10 bg-[rgba(0,2,8,0.61)] p-8 shadow-2xl shadow-black/80">
      <Logo />
      <Navbar />
      <Icons />
      {/* The mobile navbar is hidden on larger screens */}
      <MobileNav />
    </header>
  );
}
