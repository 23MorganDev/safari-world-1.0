import React, { useState } from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import sunset from "../assets/lion_sunset_mara.jpg"

// ---------------- Styled Components ----------------
const PageContainer = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #f9f7f3;
  color: #333;
`;

/* -------- Hero Section -------- */
const Hero = styled.section`
  position: relative;
  background: url(${sunset}) center/cover no-repeat;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* overlay for readability */
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
`;

/* -------- Layout -------- */
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

/* -------- Contact Form -------- */
const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  min-height: 48px;

  &:focus {
    border-color: #d4a017;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  min-height: 48px;

  &:focus {
    border-color: #d4a017;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 150px;

  &:focus {
    border-color: #d4a017;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #d4a017;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  min-height: 48px;

  &:hover {
    background: #b88a14;
  }
`;

/* -------- Contact Info -------- */
const InfoCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  color: #444;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #d4a017;
    }
  }

  svg {
    font-size: 1.2rem;
    color: #d4a017;
  }
`;

/* -------- Map -------- */
const MapFrame = styled.div`
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

/* -------- FAQ -------- */
const FAQSection = styled.div`
  margin-top: 4rem;
`;

const FAQHeader = styled.h2`
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const FAQItem = styled.div`
  background: #fff;
  border-radius: 12px;
  margin-bottom: 1rem;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #6b4226;
  font-size: 1.1rem;
`;

const FAQAnswer = styled.p`
  margin-top: 0.8rem;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

/* -------- Enhanced Trust Strip -------- */
const TrustSection = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const TrustTitle = styled.h3`
  font-size: 1.6rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 1.5rem;
  color: #333;
`;

const TrustStrip = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 1.5rem;
`;

const TrustLogo = styled.img`
  height: 50px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

// ---------------- Component ----------------
const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: "Do I need a visa for Kenya?", a: "Most travelers need a visa, which can be applied for online via the Kenya eVisa portal." },
    { q: "When is the best time for safari?", a: "The dry season (June to October) offers the best wildlife viewing, especially during the wildebeest migration." },
    { q: "Is it safe to go on safari?", a: "Yes! Safaris are guided by professionals, and lodges/camps follow strict safety standards." },
  ];

  return (
    <PageContainer>
      {/* Hero */}
      <Hero>
        <HeroTitle>Get in Touch – Plan Your Adventure</HeroTitle>
        <HeroSubtitle>
          We’re here to craft your dream safari. Fill in the details below and let’s start planning your journey.
        </HeroSubtitle>
      </Hero>

      {/* Contact Section */}
      <Section>
        <Grid>
          {/* Form */}
          <Form>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number (with country code)" required />
            <Select required>
              <option value="">Select Safari Package</option>
              <option>Maasai Mara Safari</option>
              <option>Amboseli Adventure</option>
              <option>Lake Nakuru Safari</option>
              <option>Safari & Coast Escape</option>
            </Select>
            <Input type="date" placeholder="Preferred Travel Date" required />
            <Input type="number" placeholder="Number of Travelers" required />
            <Select>
              <option value="">Budget Range</option>
              <option>$500 - $1000</option>
              <option>$1000 - $3000</option>
              <option>$3000+</option>
            </Select>
            <Textarea placeholder="Tell us about your dream safari..." required />
            <Button type="submit">Start My Safari Journey</Button>
          </Form>

          {/* Info */}
          <InfoCard>
            <InfoItem><FaPhone /> +254 700 123 456</InfoItem>
            <InfoItem><FaWhatsapp /> <a href="https://wa.me/254700123456" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></InfoItem>
            <InfoItem><FaEnvelope /> info@safariworld.com</InfoItem>
            <InfoItem><FaMapMarkerAlt /> Nairobi, Kenya</InfoItem>
            <InfoItem><FaClock /> Mon–Fri: 9AM – 6PM EAT</InfoItem>
            <InfoItem><FaPhone /> 24/7 Emergency: +254 711 999 999</InfoItem>
          </InfoCard>
        </Grid>

        {/* Map */}
        <MapFrame>
          <iframe
            title="SafariWorld Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.6301975318024!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b8f16d9d2b%3A0xdee4cf0cbd2a8d!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1690000000000"
            loading="lazy"
          ></iframe>
        </MapFrame>

        {/* FAQ */}
        <FAQSection>
          <FAQHeader>Frequently Asked Questions</FAQHeader>
          {faqs.map((faq, index) => (
            <FAQItem key={index} onClick={() => toggleFAQ(index)}>
              <FAQQuestion>
                {faq.q}
                {openFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
              </FAQQuestion>
              {openFAQ === index && <FAQAnswer>{faq.a}</FAQAnswer>}
            </FAQItem>
          ))}
        </FAQSection>

        <TrustSection>
          <TrustTitle>Trusted by Leading Partners</TrustTitle>
          <TrustStrip>
            <TrustLogo src="https://dummyimage.com/160x60/ccc/000.png&text=KWS" alt="Kenya Wildlife Service" />
            <TrustLogo src="https://dummyimage.com/160x60/ccc/000.png&text=IATA" alt="IATA" />
            <TrustLogo src="https://dummyimage.com/160x60/ccc/000.png&text=Partner+Hotel" alt="Hotel Partner" />
            <TrustLogo src="https://dummyimage.com/160x60/ccc/000.png&text=Tour+Board" alt="Tour Board" />
          </TrustStrip>
        </TrustSection>
      </Section>
    </PageContainer>
  );
};

export default Contact;
