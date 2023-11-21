
import { ReactElement } from 'react';
import Dollar from "../assets/dollar";

const ProcessCard = ({

    title = "Quality & Experience",

    details = <>Our skill <span>qualities</span> and experience are a strong match for the job requirements.Which means we are <span>ready made</span> for this job.</>,
    image = <Dollar />

}: {
    title: string;
    details: ReactElement;
    image: ReactElement;
}) => {
    return (

        <div className="flex flex-col items-center justify-center mx-auto small-gap bg-white w-full  md:max-w-[376px] text-center h-auto p-[25px] rounded-[8px] cursor-pointer border border-secondarymuted hover:border-secondary hover:shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-600  "  >
            {image}
            <h5 className="font-extrabold text-primary">{title}</h5>
            <p className="[&>span]:font-bold">{details}</p>
        </div>


    )
}
export default ProcessCard;

