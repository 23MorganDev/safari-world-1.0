import React from "react";
import styled from "styled-components";
import { FaSafari, FaShieldAlt, FaUsers, FaCar, FaLeaf, FaGlobe } from "react-icons/fa";
import van from "../assets/customized-safari-van-.jpg";
import landcruiser from "../assets/gamedrive vehicles kenya.jpg";
import safariGuide from "../assets/safari_cruiser.jpg";

// ------------------ Styled Components ------------------
const PageContainer = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #f9f7f3;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 3rem 1.5rem;
`;

/* ---------- Section Wrappers ---------- */
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-style: italic;
  color: #6b4226;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-family: "Playfair Display", serif; 
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 850px;
  margin: 0 auto;
  color: #444;
`;

/* ---------- Grid Layouts ---------- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

/* ---------- Card Styles ---------- */
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #6b4226;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.95rem;
  color: #666;
`;

/* ---------- Features Section ---------- */
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  svg {
    font-size: 2rem;
    color: #d4a017; /* Safari golden accent */
    margin-bottom: 1rem;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  color: #6b4226;
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

/* ---------- Timeline Section ---------- */
const Timeline = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
`;

const TimelineItem = styled.div`
  padding: 1rem 1.5rem;
  background: #fff;
  border-left: 4px solid #d4a017;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
`;

const TimelineYear = styled.h4`
  color: #6b4226;
  margin-bottom: 0.3rem;
`;

/* ---------- Testimonials ---------- */
const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  font-style: italic;
`;

const TestimonialAuthor = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: #6b4226;
`;

/* ---------- Call-to-Action ---------- */
const CTA = styled.div`
  background: linear-gradient(135deg, #6b4226, #d4a017);
  color: #fff;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #fff;
  color: #6b4226;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #6b4226;
    color: #fff;
  }
`;

// ------------------ Component ------------------
const AboutUs = () => {
  return (
    <PageContainer>
      {/* Story Section */}
      <Section>
        <Title>Our Story</Title>
        <Paragraph>
          SafariWorld was founded with a simple dream: to share the magic of
          Kenya’s landscapes, wildlife, and cultures with the world. What began
          as a small family-run safari service has grown into a trusted name in
          East African travel, bringing together passionate guides, reliable
          vehicles, and unforgettable experiences for adventurers across the
          globe.
        </Paragraph>
      </Section>

      {/* Mission, Vision, Values */}
      <Section>
        <Title>Our Mission, Vision & Values</Title>
        <FeaturesGrid>
          <FeatureCard>
            <FaGlobe />
            <FeatureTitle>Our Mission</FeatureTitle>
            <FeatureDesc>
              To provide world-class safari experiences while preserving Africa’s natural and cultural heritage.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FaSafari />
            <FeatureTitle>Our Vision</FeatureTitle>
            <FeatureDesc>
              To become Africa’s most trusted safari company, connecting travelers to authentic adventures.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FaLeaf />
            <FeatureTitle>Our Values</FeatureTitle>
            <FeatureDesc>
              Sustainability, respect for communities, and creating memories that last a lifetime.
            </FeatureDesc>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* Timeline */}
      <Section>
        <Title>Our Journey</Title>
        <Timeline>
          <TimelineItem>
            <TimelineYear>2010</TimelineYear>
            <p>SafariWorld was founded as a small family-run safari service in Nairobi.</p>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2015</TimelineYear>
            <p>Expanded our fleet and introduced bilingual cultural guides.</p>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2020</TimelineYear>
            <p>Recognized as one of East Africa’s top safari operators.</p>
          </TimelineItem>
          <TimelineItem>
            <TimelineYear>2023</TimelineYear>
            <p>Launched eco-tourism initiatives supporting local communities and conservation.</p>
          </TimelineItem>
        </Timeline>
      </Section>

      {/* Team & Fleet */}
      <Section>
        <Title>Meet Our Team & Fleet</Title>
        <Grid>
          <Card>
            <CardImage src={van} alt="Driver" />
            <CardContent>
              <CardTitle>James Mwangi</CardTitle>
              <CardDesc>Senior Safari Guide with 10+ years of experience.</CardDesc>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={van} alt="Safari Van" />
            <CardContent>
              <CardTitle>Safari Van</CardTitle>
              <CardDesc>4x4 safari van equipped with pop-up roof and A/C.</CardDesc>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={safariGuide} alt="Driver" />
            <CardContent>
              <CardTitle>Sarah Njeri</CardTitle>
              <CardDesc>Bilingual guide specializing in cultural tours.</CardDesc>
            </CardContent>
          </Card>
          <Card>
            <CardImage src={landcruiser} alt="Land Cruiser" />
            <CardContent>
              <CardTitle>Land Cruiser</CardTitle>
              <CardDesc>Reliable 4x4 Land Cruiser for off-road adventures.</CardDesc>
            </CardContent>
          </Card>
        </Grid>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <Title>Why Choose SafariWorld?</Title>
        <FeaturesGrid>
          <FeatureCard>
            <FaUsers />
            <FeatureTitle>Experienced Guides</FeatureTitle>
            <FeatureDesc>
              Our certified guides know Kenya’s wildlife and culture inside out.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FaShieldAlt />
            <FeatureTitle>Safety First</FeatureTitle>
            <FeatureDesc>
              Well-maintained vehicles and strict safety protocols for your peace of mind.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FaSafari />
            <FeatureTitle>Unique Safari Experiences</FeatureTitle>
            <FeatureDesc>
              From the Big Five to cultural encounters, we craft personalized adventures.
            </FeatureDesc>
          </FeatureCard>
          <FeatureCard>
            <FaCar />
            <FeatureTitle>Reliable Fleet</FeatureTitle>
            <FeatureDesc>
              Comfortable, safari-ready vehicles designed for African terrains.
            </FeatureDesc>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* Testimonials */}
      <Section>
        <Title>What Our Guests Say</Title>
        <Grid>
          <TestimonialCard>
            “An unforgettable adventure! The guides were knowledgeable, and every detail was perfectly arranged.”
            <TestimonialAuthor>- Emily R., UK</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            “From the Maasai Mara to Amboseli, SafariWorld made us feel safe and inspired. Highly recommended!”
            <TestimonialAuthor>- Ahmed K., UAE</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            “Traveling with SafariWorld was the highlight of my year. I’ll definitely return with my family.”
            <TestimonialAuthor>- Maria L., Spain</TestimonialAuthor>
          </TestimonialCard>
        </Grid>
      </Section>

      {/* Call-to-Action */}
      <CTA>
        <CTATitle>Ready to Start Your Adventure?</CTATitle>
        <p>Join SafariWorld and experience the heart of Africa like never before.</p>
        <CTAButton href="/contact">Book Your Safari Today</CTAButton>
      </CTA>
    </PageContainer>
  );
};

export default AboutUs;
