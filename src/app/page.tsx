import BlueGoogle from "@/components/assets/blue-google";
import FeatureCard from "@/components/molecule/feature-card";
import HeroSection from "@/components/pages/home/herosection";

const Home = () => {
  return (
    <main>
      <HeroSection
        H1={
          <>
            We Craft <span>Solution</span> on Demand
            to Go Online and Grow Business
          </>
        }
        P={
          <>
            Being digital <span>agency</span>, the sociomatic&nbsp;
            <span>specialized with A to Z</span> to help improving business&nbsp;
            <span>analytics</span>, software <span>development</span>,&nbsp;
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={true}
      />
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section">
          <FeatureCard
            image={<BlueGoogle />}
            title="Google Paid Advertising"
            description={
              <>
                Enhance Google platform ad strategies for effective{" "}
                <span>demand-driven</span> results.
              </>
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
