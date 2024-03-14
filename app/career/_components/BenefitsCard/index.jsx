import { Flex, Text } from "@radix-ui/themes";
import styles from "./benefits.module.scss";

function BenefitsCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.card}>
      <Flex direction="column" gap="8">
        <Flex direction="column" gap="5">
          <Icon size="100" />
          <Text weight="medium" size="8">
            {title}
          </Text>
        </Flex>
        <Text size="6" style={{ letterSpacing: "1px" }}>
          {description}
        </Text>
      </Flex>
    </div>
  );
}

export default BenefitsCard;
