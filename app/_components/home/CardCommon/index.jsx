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
        p="5"
      >
        <Flex justify="between" gap="9">
          <Text size="8" mb="9" className={styles.title}>
            {title}
          </Text>
          <ArrowRight />
        </Flex>
        <Text size={{ initial: "5", sm: "6" }} className="grayText">
          {content}
        </Text>
      </Flex>
    </div>
  );
}

export default CardCommon;
