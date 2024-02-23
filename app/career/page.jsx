import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import HeadingCommon from "@/components/HeadingCommon";
import { benefits, vacanyList } from "./career.info";
import VacancyCard from "./_components/VacancyCard";
import BenefitsCard from "./_components/BenefitsCard";

function Career() {
  return (
    <main>
      <SectionCommon>
        <Flex direction="column" gap="9">
          <Flex
            justify="between"
            gap="9"
            direction={{ initial: "column", sm: "row" }}
          >
            <HeadingCommon>JOIN OUR TEAM AT QUILLBRIX</HeadingCommon>
            <Text size="7" align="center">
              Explore Opportunities in Web Development, Web Design, Mobile
              Development, DevOps, and Hosting Solutions.
            </Text>
          </Flex>
          <img
            alt="careers"
            src="/career/career-1.png"
            style={{ justifySelf: "start", maxWidth: "500px" }}
          />
        </Flex>
      </SectionCommon>
      <SectionCommon>
        <Flex direction="column" width="100%" align="center" gap="5" mb="9">
          <HeadingCommon>EXPLORE OPENINGS</HeadingCommon>
          <Text size="6" align="center">
            Explore Opportunities in Web Development, Web Design, Mobile
            Development, DevOps, and Hosting Solutions.
          </Text>
          <Grid
            columns={{
              initial: "1",
              sm: "2",
            }}
            width="100%"
            gap="9"
            mt="9"
            justify="center"
            align="center"
          >
            {vacanyList.map(({ title, duration, number }, index) => (
              <VacancyCard
                title={title}
                duration={duration}
                number={number}
                key={index}
              />
            ))}
          </Grid>
        </Flex>
        <Separator size="4" />
      </SectionCommon>
      <SectionCommon>
        <Flex direction="column" gap="6" align="center">
          <HeadingCommon>THE WAY WE DO THINGS</HeadingCommon>
          <Grid
            columns={{
              initial: "1",
              sm: "2",
            }}
            width="100%"
            gap="9"
            mt="9"
            justify="center"
            align="center"
          >
            {benefits.map(({ icon, title, description }, index) => (
              <BenefitsCard
                icon={icon}
                description={description}
                title={title}
                key={index}
              />
            ))}
          </Grid>
        </Flex>
      </SectionCommon>
    </main>
  );
}

export default Career;
