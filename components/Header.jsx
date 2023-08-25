import Navbar from "./Navbar";
import Hero from "./Hero";
import '@/styles/header.css';

const Header = () => {
  return (
    <header className="section_padding-x bg-gradient_header">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
