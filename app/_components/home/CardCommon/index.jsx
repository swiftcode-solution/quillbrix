import { Flex, Text } from "@radix-ui/themes";
import ArrowRight from "@/public/assets/icons/ArrowRight";
import styles from "./cardCommon.module.scss";

function CardCommon({ title, content }) {
  return (
    <div className={styles.card}>
      <Flex
        gap={{
          initial: "3",
          sm: "9",
        }}
        direction="column"
        p="4"
      >
        <Flex justify="between">
          <Text size="8" mb="9">
            {title}
          </Text>
          <ArrowRight />
        </Flex>
        <Text size="5">{content}</Text>
      </Flex>
    </div>
  );
}

export default CardCommon;
