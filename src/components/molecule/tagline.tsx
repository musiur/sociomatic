import { ReactElement } from "react";

const Tagline = ({ text }: { text: ReactElement }) => {
  return (
    <p className="inline-flex border px-4 py-1 rounded-full text-[14px] text-center">
      {text}
    </p>
  );
};

export default Tagline;
