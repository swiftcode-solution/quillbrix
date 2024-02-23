import { Card, Flex, Text } from "@radix-ui/themes";
import styles from "./cardCommon.module.scss";

function CardCommon({ title, content }) {
  return (
    <Card className={styles.card}>
      <Flex gap="9" direction="column" p="4">
        <Text size="8">{title}</Text>
        <Text size="5">{content}</Text>
      </Flex>
    </Card>
  );
}

export default CardCommon;
