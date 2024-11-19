"use client";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactElement } from "react";

const Faq = ({
  data,
}: {
  data: {
    title: ReactElement;
    faqs: { id: number; question: ReactElement; answer: ReactElement }[];
  };
}) => {
  const { title, faqs } = data;
  return (
    <section className="section container">
      <h2 className="h2 text-primary text-center">{title}</h2>
      <div className=" pt-[50px] max-w-[800px] mx-auto">
        <Accordion type="single" collapsible>
          <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
            {faqs.map(
              (item: {
                id: number;
                question: ReactElement;
                answer: ReactElement;
              }) => {
                const { id, question, answer } = item;
                return (
                  <AccordionItem key={id} value={`item-${id}`}>
                    <AccordionTrigger>{question}</AccordionTrigger>
                    <AccordionContent>{answer}</AccordionContent>
                  </AccordionItem>
                );
              }
            )}
          </ANIM__FadeInOutOnScroll>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
