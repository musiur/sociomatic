"use client"
import SectionHead from "@/components/molecule/section-head";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Faq = ({data}: {data: any}) => {
    return (
        <section className="section container">
            <SectionHead
                highlighter={data.highlighter}
                H2={data.H2}
                paragraphs={data.paragraphs}
            />
            <div className=" pt-[50px] max-w-[800px] mx-auto">


                <Accordion type="single" collapsible className="flex flex-col small-gap" >

                    {
                        data.qnaList.map((item: {
                            id: number;
                            title: string;
                            details: string;
                        }) => {
                            const { id, title, details } = item;
                            return (

                                <AccordionItem key={id} value={`item-${id}`}>
                                    <AccordionTrigger>{title}</AccordionTrigger>
                                    <AccordionContent>
                                        {details}
                                    </AccordionContent>
                                </AccordionItem>

                            )
                        })
                    }
                </Accordion>

            </div>
        </section>
    )
}

export default Faq;
