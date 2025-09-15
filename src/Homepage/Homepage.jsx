import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll"; 
import { FiMenu, FiX } from "react-icons/fi";
import sunset from "../assets/Masai_Mara_at_Sunset.jpg";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeroSection style={{ backgroundImage: `url(${sunset})` }}>
      <Header>
        <Logo>SafariWorld</Logo>
        <Nav>
          <Link to="about" smooth={true} duration={600} offset={-70}>About Us</Link>
          <Link to="tours" smooth={true} duration={600} offset={-70}>Tours</Link>
          <Link to="gallery" smooth={true} duration={600} offset={-70}>Gallery</Link>
          <Link to="contact" smooth={true} duration={600} offset={-70}>Contact Us</Link>
        </Nav>

        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </MenuIcon>
      </Header>

      {/* Mobile Navigation */}
      {isOpen && (
        <MobileNav>
          <Link onClick={() => setIsOpen(false)} to="about" smooth duration={600} offset={-70}>
            About Us
          </Link>
          <Link onClick={() => setIsOpen(false)} to="tours" smooth duration={600} offset={-70}>
            Tours
          </Link>
          <Link onClick={() => setIsOpen(false)} to="gallery" smooth duration={600} offset={-70}>
            Gallery
          </Link>
          <Link onClick={() => setIsOpen(false)} to="contact" smooth duration={600} offset={-70}>
            Contact Us
          </Link>
        </MobileNav>
      )}

      <HeroContent>
        <Title>SafariWorld</Title>
        <Paragraph>
          Discover the beauty of Africa with unforgettable safari experiences.
          From breathtaking wildlife to scenic landscapes, we bring your dream
          safari to life.
        </Paragraph>
      </HeroContent>
    </HeroSection>
  );
}

export default Homepage;

// ✅ Styled Components
const HeroSection = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* stays on top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5); /* semi-transparent */
  backdrop-filter: blur(6px);
`;

const Logo = styled.h1`
  font-size: 28px;
  font-family: "Playfair Display", serif; /* fancy font */
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 999;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin-top: 120px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-family: "Playfair Display", serif; /* cursive/fancy */
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-family: "Playfair Display", serif; /* consistent font */
`;
