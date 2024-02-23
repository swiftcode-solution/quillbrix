import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import CheckIcon from "@/public/assets/CheckIcon";
import { details } from "./details.info";
import styles from "./details.module.scss";

function VacancyDetails() {
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
            FULL STACK DEVELOPER
          </Heading>
          <Text size="6">
            <Text mr="6" weight="medium">
              Experience
            </Text>
            4+ Years
          </Text>
          <Text size="6">
            <Text mr="6" weight="medium">
              Positions
            </Text>
            1
          </Text>
        </Flex>
      </SectionCommon>
      <Separator size="4" />
      <SectionCommon>
        <ul className={styles.detailsList}>
          {details.map((text, index) => (
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
