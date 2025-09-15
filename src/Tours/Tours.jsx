import React, { useState } from "react";
import styled from "styled-components";
import amboseli from "../assets/Amboseli.jpg";
import lakeNakuru from "../assets/lake-nakuru-flamingos.jpeg";
import maasaiMara from "../assets/maasai-mara-secret-2.jpg";
import mombasa from "../assets/mombasa__safari.jpg";

/* ---------------- Styled Components ---------------- */

/* Page Container */
const PageContainer = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #f9f7f3;
  color: #333;
`;

/* Hero Section */
const Hero = styled.section`
  background: url(${maasaiMara}) center/cover no-repeat;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 700px;
  padding: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
`;

const HeroText = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

/* Section */
const Section = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #6b4226;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Playfair Display", serif;
`;

/* Filter Bar */
const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.active ? "#d4a017" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 2px solid #d4a017;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #b88a14;
    color: #fff;
  }
`;

/* Tour Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #6b4226;
  margin-bottom: 0.5rem;
  font-family: "Playfair Display", serif;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
`;

const CardInfo = styled.ul`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 1rem;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.3rem;
  }
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #d4a017;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #d4a017;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #b88a14;
  }
`;

/* FAQ Section */
const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.h4`
  font-size: 1.1rem;
  color: #6b4226;
  cursor: pointer;
`;

const Answer = styled.p`
  font-size: 0.95rem;
  color: #444;
  margin-top: 0.5rem;
`;

/* Testimonials */
const TestimonialCard = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 0.95rem;
  color: #444;
  text-align: center;
`;

/* CTA Section */
const CTASection = styled.section`
  background: #6b4226;
  color: white;
  text-align: center;
  padding: 3rem 1.5rem;
`;

const CTAButton = styled(Button)`
  background: #ffd700;
  color: #000;

  &:hover {
    background: #e6c200;
  }
`;

/* ---------------- Component ---------------- */

const Tours = () => {
  const [filter, setFilter] = useState("all");

  const tours = [
    {
      title: "3-Day Maasai Mara Safari",
      desc: "Wake up to lions roaring in the distance and elephants grazing on the savannah.",
      img: maasaiMara,
      price: "From $450 per person",
      duration: "3 Days / 2 Nights",
      highlights: ["Game drives", "Big Five spotting", "Luxury tented camp"],
    },
    {
      title: "2-Day Amboseli Adventure",
      desc: "See herds of elephants with Mount Kilimanjaro rising in the background.",
      img: amboseli,
      price: "From $320 per person",
      duration: "2 Days / 1 Night",
      highlights: ["Elephants & Kilimanjaro views", "Photography safari"],
    },
    {
      title: "1-Day Lake Nakuru Safari",
      desc: "Marvel at flamingos and rhinos in this UNESCO-listed paradise.",
      img: lakeNakuru,
      price: "From $150 per person",
      duration: "1 Day",
      highlights: ["Flamingos & rhinos", "Day trip from Nairobi"],
    },
    {
      title: "5-Day Safari & Coast Escape",
      desc: "Combine thrilling game drives with relaxing days on Diani Beach.",
      img: mombasa,
      price: "From $800 per person",
      duration: "5 Days / 4 Nights",
      highlights: ["Game drives", "Beach relaxation", "Cultural tours"],
    },
  ];

  const faqs = [
    {
      q: "What is the best time to go on safari?",
      a: "The best time is during the dry season (June–October) for easier wildlife spotting, but Kenya offers great safaris year-round.",
    },
    {
      q: "What’s included in safari packages?",
      a: "Accommodation, park entry fees, meals, game drives, and a professional guide. Flights are usually not included.",
    },
    {
      q: "Is it safe to go on safari?",
      a: "Yes! Our safaris are led by experienced guides, and lodges follow strict safety standards.",
    },
  ];

  const testimonials = [
    "“The Maasai Mara safari was life-changing. We saw lions every day!” – Sarah, UK",
    "“Our Amboseli trip was breathtaking. Elephants everywhere with Kilimanjaro in the backdrop.” – James, USA",
    "“Safari + beach combo was the best decision ever. Adventure + relaxation in one.” – Aisha, Kenya",
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <HeroTitle>Discover Your Dream Safari</HeroTitle>
          <HeroText>
            From thrilling game drives to luxury escapes, choose the perfect
            safari experience tailored for you.
          </HeroText>
        </HeroContent>
      </Hero>

      {/* Featured Tours */}
      <Section>
        <SectionTitle>Our Safari Packages</SectionTitle>

        {/* Filter Bar */}
        <FilterBar>
          {["all", "short", "long"].map((f) => (
            <FilterButton
              key={f}
              active={filter === f}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "All Tours" : f === "short" ? "1–3 Days" : "4+ Days"}
            </FilterButton>
          ))}
        </FilterBar>

        {/* Tours Grid */}
        <Grid>
          {tours
            .filter((tour) =>
              filter === "short"
                ? tour.duration.includes("1") || tour.duration.includes("2") || tour.duration.includes("3")
                : filter === "long"
                  ? tour.duration.includes("5")
                  : true
            )
            .map((tour, i) => (
              <Card key={i}>
                <CardImage src={tour.img} alt={tour.title} />
                <CardContent>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDesc>{tour.desc}</CardDesc>
                  <CardInfo>
                    <li>⏱ {tour.duration}</li>
                    {tour.highlights.map((h, idx) => (
                      <li key={idx}>• {h}</li>
                    ))}
                  </CardInfo>
                  <Price>{tour.price}</Price>
                  <Button>Book Now</Button>
                </CardContent>
              </Card>
            ))}
        </Grid>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        {faqs.map((item, i) => (
          <FAQItem key={i}>
            <Question>{item.q}</Question>
            <Answer>{item.a}</Answer>
          </FAQItem>
        ))}
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle>What Our Travelers Say</SectionTitle>
        <Grid>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i}>{t}</TestimonialCard>
          ))}
        </Grid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <h2>Plan Your Safari Today</h2>
        <p>
          Contact us for tailored itineraries, group bookings, and special
          packages.
        </p>
        <CTAButton>Get in Touch</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default Tours;
