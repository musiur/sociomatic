import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="section container min-h-[80vh] flex flex-col items-center justify-center large-gap ">
        <p>404 | Page not found</p>
        <Link
          href="/"
          className="text-secondary hover:text-primary font-medium"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
