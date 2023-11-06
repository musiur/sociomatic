import HeroSection from "@/components/pages/home/herosection";

const CaseStudies = ({ params }: { params: { slug: string } }) => {
  {
    params.slug;
  }
  return (
    <div>
      <HeroSection
        H1={
          <h1 className="text-primary">
            We Craft <span className="text-secondary">Solution</span> on Demand
            to Go Online and Grow Business
          </h1>
        }
        P={
          <p className="hero-description">
            Being digital <span>agency</span>, the sociomatic
            <span>specialized with A to Z</span> to help improving business
            <span>analytics</span>, software <span>development</span>,
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </p>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={false}
      />
    </div>
  );
};

export default CaseStudies;
