const LandingVisualsSection = () => {
  return (
    <div className="container section space-y-10 text-center">
        <h2>See the Numbers Behind the Success</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 [&>li]:border [&>li]:p-8 [&>li]:bg-white [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:justify-center [&>li]:gap-4 [&>li]:rounded-xl [&>li>span]:text-4xl [&>li>span]:font-bold [&>li>span]:text-primary capitalize">
          <li>
            <span>700+</span> projects completed.
          </li>
          <li>
            <span>500+</span> positive reviews.
          </li>
          <li>
            <span>$1.2M</span> revenue growth for a single client.
          </li>
        </ul>
      </div>
  );
};

export default LandingVisualsSection;
