import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import Round from "@/public/assets/icons/Round";
import HeadingCommon from "@/components/HeadingCommon";
import { benefits, vacanyList } from "./career.info";
import VacancyCard from "./_components/VacancyCard";
import BenefitsCard from "./_components/BenefitsCard";
import styles from "./career.module.scss";

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
            <HeadingCommon align="left">
              JOIN OUR TEAM AT QUILLBRIX
              <Round size="20" style={{ marginLeft: "12px" }} />
            </HeadingCommon>
            <Text
              size={{
                initial: "6",
                sm: "8",
              }}
              mt="3"
              align="left"
              style={{
                lineHeight: "1.2",
                maxWidth: "500px",
                letterSpacing: "1.5px",
              }}
            >
              Explore Opportunities in Web Development, Web Design, Mobile
              Development, DevOps, and Hosting Solutions.
            </Text>
          </Flex>
          <Flex align="center" gap="5">
            <img
              alt="careers"
              src="/career/career-1.png"
              style={{ justifySelf: "start", maxWidth: "90vw" }}
            />
            <Round size="90" style={{ marginLeft: "12px" }} />
          </Flex>
        </Flex>
      </SectionCommon>
      <SectionCommon>
        <Flex direction="column" width="100%" align="center" gap="5" mb="9">
          <HeadingCommon>EXPLORE OPENINGS</HeadingCommon>
          <Text
            align="center"
            size={{
              initial: "6",
              sm: "7",
            }}
          >
            Explore Opportunities in Web Development, Web Design, Mobile
            Development, DevOps, and Hosting Solutions.
          </Text>
          {vacanyList.length === 0 ? (
            <Flex align="center" mt="9" className={styles.noVacancySection}>
              <Flex direction="column" align="center" gap="6">
                <img
                  style={{ maxWidth: "90vw" }}
                  src="/career/no-matches-found.png"
                  alt="no matches found"
                />
                <Text
                  size={{ initial: "8", sm: "9" }}
                  style={{ color: "#084678" }}
                >
                  No Job Openings
                </Text>
              </Flex>
              <Round />
            </Flex>
          ) : (
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
              {vacanyList.map(({ title, duration, number, id }, index) => (
                <VacancyCard
                  title={title}
                  duration={duration}
                  number={number}
                  key={index}
                  id={id}
                />
              ))}
            </Grid>
          )}
        </Flex>
        <Separator size="4" />
      </SectionCommon>
      <SectionCommon>
        <Flex direction="column" gap="6" align="center">
          <HeadingCommon>
            THE WAY WE DO THINGS
            <Round size="20" style={{ marginLeft: "12px" }} />
          </HeadingCommon>
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
