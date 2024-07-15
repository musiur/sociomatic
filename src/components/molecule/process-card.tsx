import { ReactElement } from "react";
import Dollar from "../assets/dollar";

const ProcessCard = ({
  title = "Quality & Experience",

  details = (
    <>
      Our skill <span>qualities</span> and experience are a strong match for the
      job requirements.Which means we are <span>ready made</span> for this job.
    </>
  ),
  image = <Dollar />,
}: {
  title: string;
  details: ReactElement;
  image: ReactElement;
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto small-gap bg-white w-full  md:max-w-[376px] text-center h-auto p-[25px] rounded-[20px] cursor-pointer border-2 border-white hover:border-secondary hover:shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] hover:scale-[1.06] transition ease-in-out duration-700">
      {image}
      <h5 className="font-semibold text-primary">{title}</h5>
      <p className="[&>span]:font-medium text-primary/80 [&>span]:text-primary">
        {details}
      </p>
    </div>
  );
};
export default ProcessCard;
