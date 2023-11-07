import { Button } from "@/components/ui/button";

const ProjectIdea = () => {
    return (
        <section className="container section">
            <div className="bg-[url('/images/backgrounds/ProjectIdeaBanner.svg')] bg-center bg-cover py-[50px]  flex items-center justify-center rounded-br-[20px] lg:rounded-br-[40px] rounded-tl-[20px] lg:rounded-tl-[40px]">
                <div className="flex flex-col items-center justify-center small-gap max-w-[595px] mx-auto px-[10px]">
                    <h2 className="text-white">
                        Have Any Project Idea?
                    </h2>
                    <p className="text-white text-center">Lets discuss about your offshore project. We can Help you by our skillful  Global team. You can take a free counciling by taking a schedule</p>
                    <Button variant="outline" className="w-[135px] h-[49px]rounded-[8px]">Get A Quote</Button>
                </div>
            </div>
        </section>
    )

}
export default ProjectIdea;