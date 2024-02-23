import { Card, Flex, Text } from "@radix-ui/themes";
import styles from "./benefits.module.scss";

function BenefitsCard({ icon: Icon, title, description }) {
  return (
    <Card className={styles.card}>
      <Flex direction="column" gap="5">
        <Icon size="50" />
        <Text weight="medium" size="6">
          {title}
        </Text>
        <Text size="5">{description}</Text>
      </Flex>
    </Card>
  );
}

export default BenefitsCard;
