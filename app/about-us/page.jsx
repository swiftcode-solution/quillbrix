import Link from "next/link";
import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import HeadingCommon from "@/components/HeadingCommon";
import ButtonCommon from "@/components/ButtonCommon";
import styles from "./aboutUs.module.scss";

function AboutUs() {
  return (
    <main>
      <SectionCommon>
        <Flex direction="column" gap="7">
          <Flex
            justify="between"
            gap="9"
            direction={{
              initial: "column",
              sm: "row",
            }}
          >
            <HeadingCommon>LET&apos;S FORGE DIGITAL EXCELLENCE</HeadingCommon>
            <Text
              size={{
                initial: "6",
                sm: "7",
              }}
              align="center"
              style={{ maxWidth: "500px" }}
            >
              We are digital architects passionate about transforming ideas into
              exceptional digital experiences.
            </Text>
          </Flex>
          <img
            src="/aboutUs/about-us-1.png"
            alt="about-us"
            width="500"
            style={{ alignSelf: "end" }}
          />
        </Flex>
      </SectionCommon>
      <div className={styles.serviceSection}>
        <SectionCommon>
          <Flex direction="column" gap="9" mt="9">
            <Flex
              justify="between"
              align="center"
              gap={{
                initial: "7",
                sm: "9",
              }}
              direction={{
                initial: "column",
                sm: "row",
              }}
            >
              <Heading
                size={{
                  initial: "8",
                  sm: "9",
                }}
              >
                OUR MISSION
              </Heading>
              <Separator size="4" />
              <Text
                size={{
                  initial: "6",
                  sm: "7",
                }}
                style={{ maxWidth: "500px" }}
                align="center"
              >
                Our mission at QuillBrix is clear – to empower businesses with
                the digital tools they need to succeed.
              </Text>
            </Flex>
            <Flex
              justify="between"
              direction={{
                initial: "column",
                sm: "row",
              }}
              gap="8"
            >
              <img src="/aboutUs/about-us-2.png" height="400" alt="about-us" />
              <ButtonCommon asChild style={{ alignSelf: "end" }}>
                <Link href="/career">Become a Client</Link>
              </ButtonCommon>
            </Flex>
          </Flex>
        </SectionCommon>
      </div>
    </main>
  );
}

export default AboutUs;
