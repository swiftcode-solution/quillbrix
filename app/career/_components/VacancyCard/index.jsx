import Link from "next/link";
import { Card, Flex, Text } from "@radix-ui/themes";
import ButtonCommon from "@/components/ButtonCommon";
import styles from "./vacancyCard.module.scss";

function VacancyCard({ title, duration, number }) {
  return (
    <Card className={styles.card}>
      <Flex
        direction="column"
        gap="5"
        style={{ padding: "10px 30px 10px 10px" }}
      >
        <Text size="7">{title}</Text>
        <Text size="5">
          <Text weight="medium">Experience : </Text> {duration}
        </Text>
        <Text size="5">
          <Text weight="medium">No. of Vacancies : </Text> {number}
        </Text>
        <ButtonCommon>
          <Link href="/career/fa">Apply Now</Link>
        </ButtonCommon>
      </Flex>
    </Card>
  );
}

export default VacancyCard;
