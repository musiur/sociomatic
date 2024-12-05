import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <div className="flex min-w-full shrink-0">
          {children}
        </div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";

export default Marquee;
