import React from "react";
import styled from "styled-components";
import sunset from "../assets/Masai_Mara_at_Sunset.jpg"
import amboseli from "../assets/Amboseli.jpg"
import elephants from "../assets/Elephants_at_Amboseli_national_park_against_Mount_Kilimanjaro.jpg"
import rhino from "../assets/rhino-on-safari-in-Kenya.jpeg"
import safariVan from "../assets/safari-vans.jpg"
import flamingos from "../assets/lake-nakuru-flamingos.jpeg"
import maasai from "../assets/kenyan-maasai.jpg"
import offroad from "../assets/safari_cruiser.jpg"

// ---------------- Styled Components ----------------
const PageContainer = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #f9f7f3;
  padding: 3rem 1.5rem;
  color: #333;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #6b4226; /* Warm safari brown */
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Caption = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: #444;
  text-align: center;
`;

// ---------------- Component ----------------
const Gallery = () => {
  return (
    <PageContainer>
      {/* Completed Tours */}
      <Section>
        <Title>Completed Tours</Title>
        <Grid>
          <Card>
            <CardImage src={sunset} alt="Lion" />
            <Caption>Sunset at Maasai Mara</Caption>
          </Card>
          <Card>
            <CardImage src={amboseli} alt="Elephants" />
            <Caption>Amboseli Giants</Caption>
          </Card>
          <Card>
            <CardImage src={rhino} alt="Rhino" />
            <Caption>Conservancy Rhino Sighting</Caption>
          </Card>
        </Grid>
      </Section>

      {/* Safari Vans */}
      <Section>
        <Title>Safari Vans & Cruisers</Title>
        <Grid>
          <Card>
            <CardImage src={safariVan} alt="Safari Van" />
            <Caption>Comfortable Safari Vans</Caption>
          </Card>
          <Card>
            <CardImage src={offroad} alt="Safari Jeep" />
            <Caption>4x4 Land Cruisers</Caption>
          </Card>
          <Card>
            <CardImage src={offroad} alt="Offroad Vehicle" />
            <Caption>Off-road Ready Vehicles</Caption>
          </Card>
        </Grid>
      </Section>

      {/* Travel Destinations */}
      <Section>
        <Title>Travel Destinations</Title>
        <Grid>
          <Card>
            <CardImage src={flamingos} alt="Lake Nakuru" />
            <Caption>Flamingos at Lake Nakuru</Caption>
          </Card>
          <Card>
            <CardImage src={elephants} alt="Amboseli" />
            <Caption>Elephants with Kilimanjaro Backdrop</Caption>
          </Card>
          <Card>
            <CardImage src={maasai} alt="Cultural Visit" />
            <Caption>Cultural Visit with Maasai</Caption>
          </Card>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default Gallery;
