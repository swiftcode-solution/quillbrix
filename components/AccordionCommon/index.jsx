import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Flex, Separator, Text } from "@radix-ui/themes";
import styles from "./accordionCommon.module.scss";

function AccordionCommon({ title, content }) {
  const [values, setValues] = useState("+");

  const handleToggle = () => {
    setValues(prevValue => (prevValue === "+" ? "-" : "+"));
  };

  return (
    <AccordionItem value={title}>
      <AccordionTrigger
        className={styles.accordionTrigger}
        asChild
        onClick={handleToggle}
      >
        <Flex width="100%" justify="between" align="center">
          <Text size="7">{title}</Text>
          <Text size="7">{values}</Text>
        </Flex>
      </AccordionTrigger>
      <AccordionContent className={styles.accordionContent}>
        <Text as="p" size="5">
          {content}
        </Text>
      </AccordionContent>
      <Separator size="4" style={{ marginTop: "10px" }} />
    </AccordionItem>
  );
}

export default AccordionCommon;
