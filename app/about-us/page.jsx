import Link from "next/link";
import { Flex, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import HeadingCommon from "@/components/HeadingCommon";
import Round from "@/public/assets/icons/Round";
import ButtonCommon from "@/components/ButtonCommon";
import styles from "./aboutUs.module.scss";

function AboutUs() {
  return (
    <main>
      <SectionCommon>
        <Flex direction="column" gap="7">
          <Flex
            gap="1"
            direction={{
              initial: "column",
              md: "row",
            }}
          >
            <HeadingCommon align="left">
              LET&apos;S FORGE
              <Round
                className={styles.roundIcon}
                style={{ marginLeft: "15px" }}
              />
              <br />
              DIGITAL EXCELLENCE
            </HeadingCommon>
            <Text
              size={{
                initial: "6",
                sm: "7",
              }}
              mt={{ initial: "6", sm: "3" }}
              align={{ initial: "left", sm: "right" }}
              style={{ maxWidth: "400px", letterSpacing: "2px" }}
            >
              We are digital architects passionate about transforming ideas into
              exceptional digital experiences.
            </Text>
          </Flex>
          <Flex justify="end" align="end">
            <Round
              fill="#F5F5F5"
              className={styles.roundIcon}
              style={{ marginLeft: "12px" }}
            />
            <img
              src="/aboutUs/about-us-1.png"
              alt="about-us"
              style={{ alignSelf: "end", maxWidth: "90vw" }}
            />
          </Flex>
        </Flex>
      </SectionCommon>
      <div className={styles.serviceSection}>
        <SectionCommon>
          <Flex direction="column" gap="9" mt="9">
            <Flex
              justify="between"
              align="center"
              gap={{ initial: "8", sm: "0" }}
              direction={{
                initial: "column",
                sm: "row",
              }}
            >
              <HeadingCommon weight="medium">
                OUR MISSION
                <Round size="20" style={{ marginLeft: "12px" }} />
              </HeadingCommon>
              <Separator size="3" style={{ height: "2px" }} />
              <Text
                size={{
                  initial: "6",
                  sm: "8",
                }}
                style={{ maxWidth: "400px" }}
                align="left"
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
              <img src="/aboutUs/about-us-2.png" alt="about-us" />
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
