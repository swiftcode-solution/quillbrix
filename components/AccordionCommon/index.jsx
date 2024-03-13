import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Flex, Separator, Text } from "@radix-ui/themes";
import ArrowIcon from "@/public/assets/icons/ArrowIcon";
import styles from "./accordionCommon.module.scss";

function AccordionCommon({ title, content }) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className={styles.accordionTrigger} asChild>
        <Flex width="100%" justify="between" align="center">
          <Text weight="medium">{title}</Text>
          <ArrowIcon size="25" />
        </Flex>
      </AccordionTrigger>
      <AccordionContent className={styles.accordionContent}>
        <Text as="p" size={{ initial: "5", sm: "7" }}>
          {content}
        </Text>
      </AccordionContent>
      <Separator size="4" style={{ marginTop: "10px" }} />
    </AccordionItem>
  );
}

export default AccordionCommon;
