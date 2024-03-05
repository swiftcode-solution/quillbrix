"use client";

import * as Accordion from "@radix-ui/react-accordion";
import AccordionCommon from "@/components/AccordionCommon";
import { servicesInfo } from "../homepage.info";

function ServiceAccordion() {
  return (
    <Accordion.Root collapsible>
      {servicesInfo.map(({ title, content }, index) => (
        <AccordionCommon title={title} content={content} key={index} />
      ))}
    </Accordion.Root>
  );
}

export default ServiceAccordion;
