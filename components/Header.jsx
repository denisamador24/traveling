import Navbar from "./Navbar";
import Hero from "./Hero";
import '@/styles/header.css';

const Header = () => {
  return (
    <header className="h-[100vh] px-[5rem] bg-gradient_header">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
