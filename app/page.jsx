import Link from "next/link";
import { Flex, Grid, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import ButtonCommon from "@/components/ButtonCommon";
import HeadingCommon from "@/components/HeadingCommon";
import ServiceAccordion from "./_components/home/ServiceAccordion";
import { cardInfo } from "./_components/home/homepage.info";
import CardCommon from "./_components/home/CardCommon";
import styles from "../app/_components/home/home.module.scss";

function Home() {
  return (
    <main>
      <SectionCommon>
        <Flex mt="9" direction="column" width="100%" align="center">
          <HeadingCommon className={styles.homepageTitle}>
            VERSATILE EXPERTISE TO MEET YOUR UNIQUE BUSINESS NEEDS
          </HeadingCommon>
        </Flex>
        <Separator size="4" mt="9" mb="9" />
        <Flex
          align={{
            initial: "center",
            sm: "end",
          }}
          justify="between"
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
          <Flex justify="between" direction={{ initial: "column", sm: "row" }}>
            <Flex direction="column" gap="9">
              <HeadingCommon>OUR SERVICE</HeadingCommon>
              <ButtonCommon asChild>
                <Link href="/services">Explore More</Link>
              </ButtonCommon>
              <img src="/home/home-page-1.png" height={300} alt="home-page" />
            </Flex>
            <Flex
              direction="column"
              className={styles.accordionSection}
              gap="9"
            >
              <Text
                as="p"
                size="5"
                mt={{
                  initial: "8",
                  sm: "0",
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
        <Flex direction="column" align="center" gap="7" mt="7">
          <HeadingCommon>OUR EXPERTISE</HeadingCommon>
          <Text size="5" align="center">
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
