import Link from "next/link";
import { Flex, Text } from "@radix-ui/themes";
import ButtonCommon from "@/components/ButtonCommon";
import styles from "./vacancyCard.module.scss";

function VacancyCard({ title, duration, number, id }) {
  return (
    <div className={styles.card}>
      <Flex direction="column" gap="8" p={{ initial: "0", sm: "5" }}>
        <Text size={{ initial: "6", xs: "8" }}>{title}</Text>
        <Flex direction="column" gap="3">
          <Text size={{ initial: "5", xs: "6" }} className={styles.title}>
            <Text weight="medium">Experience :&nbsp;</Text>
            {duration}
          </Text>
          <Text size={{ initial: "5", xs: "6" }} className={styles.title}>
            <Text weight="medium">No. of Vacancies :&nbsp;</Text>
            {number}
          </Text>
        </Flex>
        <ButtonCommon asChild>
          <Link href={`/career/${id}`}>Apply Now</Link>
        </ButtonCommon>
      </Flex>
    </div>
  );
}

export default VacancyCard;
