import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import CheckIcon from "@/public/assets/CheckIcon";
import { vacanyList } from "../career.info";
import { vacancyDetails } from "./details.info";
import styles from "./details.module.scss";

function VacancyDetails({ params }) {
  const { details } = params;

  const vacancyData = vacanyList.find(({ id }) => id === details);

  return (
    <main>
      <SectionCommon>
        <Flex direction="column" gap="8">
          <Heading
            weight="medium"
            size={{
              initial: "8",
              sm: "9",
            }}
          >
            {vacancyData.title}
          </Heading>
          <Text size="6">
            <Text mr="6" weight="medium">
              Experience
            </Text>
            {vacancyData.duration}
          </Text>
          <Text size="6">
            <Text mr="6" weight="medium">
              Positions
            </Text>
            {vacancyData.number}
          </Text>
        </Flex>
      </SectionCommon>
      <Separator size="4" />
      <SectionCommon>
        <ul className={styles.detailsList}>
          {vacancyDetails.map((text, index) => (
            <li key={index}>
              <CheckIcon />
              <Text
                size={{
                  initial: "6",
                  sm: "7",
                }}
              >
                {" "}
                {text}
              </Text>
            </li>
          ))}
        </ul>
      </SectionCommon>
    </main>
  );
}

export default VacancyDetails;
