"use client"
import SectionHead from "@/components/molecule/section-head";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Faq = () => {
    return (
        <section className="section container">
            <SectionHead
                highlighter=""
                H2={<>Frequently Asked Questions</>}
                paragraphs={[
                    <>
                        We are more than a generic agency. Explore our Services and our <span>solutions</span> for your business.
                    </>,
                ]}
            />
            <div className=" pt-[50px] max-w-[800px] mx-auto">


                <Accordion type="single" collapsible className="flex flex-col small-gap" >

                    {
                        FaqData.map((item: {
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

const FaqData = [
    {
        id: 1,
        title: "Why should I consider your software development company as a partner?",
        details: "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
    },
    {
        id: 2,
        title: " How does The Sociomatic stand out in the digital marketing industry?",
        details: "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
    },
    {
        id: 3,
        title: "What is your approach to client success?",
        details: "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
    },
    {
        id: 4,
        title: "What values drive The Sociomatic's operations?",
        details: "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
    },
    {
        id: 5,
        title: " How can I contact The Sociomatic for inquiries or collaboration?",
        details: "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
    },

]


