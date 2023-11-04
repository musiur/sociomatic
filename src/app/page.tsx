import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="bg-[url('/images/backgrounds/HeroBackground.svg')] bg-center bg-cover">
      <div className="container section flex flex-col items-start justify-start large-gap">
        <div className="flex flex-col items-start justify-start small-gap">
          <h1 className="text-primary">
            H1: Hello <span className="text-secondary">Sajid</span>...Let&apos;s get
            started...
          </h1>
          <h2 className="text-accent">
            H2: Sample Heading Two checked with accent color
          </h2>
          <p>
            Paragraph: Sint non adipisicing aute irure
            irure deserunt eiusmod id non. Veniam anim ex anim aliqua
            adipisicing ullamco exercitation fugiat deserunt officia est.
            Incididunt nulla magna ea veniam tempor ullamco pariatur duis
            excepteur. Cupidatat in culpa culpa magna occaecat ut nisi qui sunt
            est exercitation anim. Non commodo nostrud consectetur incididunt
            sint irure culpa consequat sit Lorem.
          </p>
          <p className="text-destructive font-bold text-3xl">
            Only SVG images can be used! And must convert that into TSX
            component First. For Reference Check brandlogo.tsx in project
            directory. In case of Background Images: store SVG images into{" "}
            <code>public/images/backgroundas/*.svg</code> And then use like
            this:
            <br />
            <code>{`className="bg-[url('/images/backgrounds/HeroBackground.svg')] bg-center bg-cover"`}</code>
          </p>
        </div>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Secondary</Button>
      </div>
    </main>
  );
};

export default Home;
