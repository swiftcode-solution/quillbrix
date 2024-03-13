import Link from "next/link";
import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import Round from "@/public/assets/icons/Round";
import ButtonCommon from "@/components/ButtonCommon";
import HeadingCommon from "@/components/HeadingCommon";
import ServiceAccordion from "./_components/home/ServiceAccordion";
import { cardInfo } from "./_components/home/homepage.info";
import CardCommon from "./_components/home/CardCommon";
import styles from "../app/_components/home/home.module.scss";

function Home() {
  return (
    <main>
      <SectionCommon className={styles.smallSection}>
        <Flex
          direction="column"
          width="100%"
          align="center"
          mt={{ initial: "9", sm: "0" }}
        >
          <HeadingCommon className={styles.homepageTitle}>
            VERSATILE EXPERTISE
            <br />
            TO MEET YOUR <br />
            UNIQUE BUSINESS NEEDS
            <Round size="20" style={{ marginLeft: "12px" }} />
          </HeadingCommon>
        </Flex>
        <Separator size="4" mt="9" mb="9" />
        <Flex
          align={{
            initial: "center",
            sm: "end",
          }}
          justify="start"
          gap="9"
          direction={{ initial: "column", sm: "row" }}
        >
          <Text
            as="p"
            size={{
              initial: "6",
              sm: "7",
            }}
            className={styles.homeParagraph}
          >
            We offer a comprehensive suite of IT services designed to elevate
            your digital presence and drive success in the online landscape.
          </Text>
          <ButtonCommon className={styles.clientButton} asChild>
            <Link href="/contact-us">Become a Client</Link>
          </ButtonCommon>
        </Flex>
      </SectionCommon>
      <div className={styles.serviceSection}>
        <SectionCommon>
          <Flex
            justify="between"
            direction={{ initial: "column", md: "row" }}
            align={{ initial: "center", md: "start" }}
          >
            <Flex direction="column" gap={{ initial: "7", sm: "9" }} mt="5">
              <HeadingCommon align="left">
                OUR SERVICE
                <Round size="20" style={{ marginLeft: "12px" }} />
              </HeadingCommon>
              <ButtonCommon
                asChild
                mt={{ initial: "0", sm: "6" }}
                className={styles.exploreButton}
              >
                <Link href="/services">Explore More</Link>
              </ButtonCommon>
              <img
                src="/home/home-page-1.png"
                alt="home-page"
                style={{ maxWidth: "90vw" }}
              />
            </Flex>
            <Flex
              direction="column"
              className={styles.accordionSection}
              gap="9"
            >
              <Text
                as="p"
                size={{ initial: "6", sm: "8" }}
                mt={{
                  initial: "7",
                }}
                className={styles.homeParagraph}
              >
                Unleash the power of technology with QuillBrix, where innovation
                meets excellence. We are your one-stop destination for
                transformative IT solutions.
              </Text>
              <ServiceAccordion />
            </Flex>
          </Flex>
        </SectionCommon>
      </div>
      <SectionCommon>
        <Flex direction="column" align="center" gap="9" mt="7">
          <HeadingCommon>
            OUR EXPERTISE
            <Round size="20" style={{ marginLeft: "8px" }} />
          </HeadingCommon>
          <Text size="8" align="center" className={styles.serviceParagraph}>
            Our commitment to excellence is reflected in our diverse range of
            expertise.
          </Text>
          <Grid
            columns={{
              initial: "1",
              sm: "2",
            }}
            gap={{
              initial: "4",
              sm: "9",
            }}
          >
            {cardInfo.map(({ title, content }, index) => (
              <CardCommon title={title} content={content} key={index} />
            ))}
          </Grid>
        </Flex>
      </SectionCommon>
    </main>
  );
}

export default Home;
