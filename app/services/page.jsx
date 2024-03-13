import Link from "next/link";
import { Button, Flex, Separator, Text } from "@radix-ui/themes";
import classNames from "classnames";
import SectionCommon from "@/components/SectionCommon";
import ButtonCommon from "@/components/ButtonCommon";
import HeadingCommon from "@/components/HeadingCommon";
import Round from "@/public/assets/icons/Round";
import { servicesInfo } from "../_components/home/homepage.info";
import styles from "./services.module.scss";

function Services() {
  return (
    <main>
      <SectionCommon>
        <Flex
          mt="7"
          width="100%"
          justify="center"
          direction="column"
          align="center"
          gap="8"
        >
          <HeadingCommon
            style={{ maxWidth: "1100px" }}
            className={styles.heading}
          >
            LET&apos;S FORGE DIGITAL EXCELLENCE TOGETHER
            <Round size="12" style={{ marginLeft: "12px" }} />
          </HeadingCommon>
          <Text
            style={{ maxWidth: "1000px" }}
            size={{
              initial: "6",
              xs: "8",
            }}
            align="center"
          >
            We are your one-stop destination for transformative IT solutions.
            Explore our expertise in Web Development, Mobile Development,
            DevOps, and Hosting Solutions.
          </Text>
          <Flex gap="5" wrap="wrap" justify="center">
            <ButtonCommon asChild className={styles.clientButton}>
              <Link href="/contact-us">Become a Client</Link>
            </ButtonCommon>
            <Button
              radius="full"
              asChild
              variant="outline"
              size="4"
              className={styles.joinButton}
            >
              <Link href="/career">Join Our Team</Link>
            </Button>
          </Flex>
          <Separator size="4" mt="7" />
          <Flex
            gap="9"
            justify="center"
            direction={{
              initial: "column",
              sm: "row",
            }}
          >
            <img
              alt="services"
              src="/services/service-logo-1.png"
              height={70}
              width={200}
            />
            <img
              alt="services"
              src="/services/service-logo-2.png"
              height={70}
              width={200}
            />
            <img
              alt="services"
              src="/services/service-logo-1.png"
              height={70}
              width={200}
            />
          </Flex>
        </Flex>
      </SectionCommon>
      <SectionCommon>
        <Flex justify="between" direction={{ initial: "column", md: "row" }}>
          <img
            src="/services/service-image.png"
            alt="services"
            style={{ maxWidth: "90vw", alignSelf: "start" }}
          />
          <Flex
            direction="column"
            gap="7"
            pl={{
              initial: "0",
              sm: "9",
            }}
          >
            {servicesInfo.map(({ title, content }) => (
              <>
                <Flex direction="column" gap="5">
                  <Text
                    size={{
                      initial: "8",
                      sm: "9",
                    }}
                    weight="medium"
                  >
                    {title.toUpperCase()}
                  </Text>
                  <Text
                    size={{
                      initial: "6",
                      sm: "7",
                    }}
                    className="grayText"
                    style={{ letterSpacing: "1px" }}
                  >
                    {content}
                  </Text>
                </Flex>
                <Separator size="4" />
              </>
            ))}
          </Flex>
        </Flex>
      </SectionCommon>
      <div className={styles.serviceSection}>
        <SectionCommon>
          <Flex direction="column" gap="5" align="center" mt="9">
            <HeadingCommon align="left">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </HeadingCommon>
            <Separator size="4" />
            <Flex
              gap="9"
              align={{ initial: "start", sm: "end" }}
              justify="between"
              width="100%"
              direction={{
                initial: "column",
                sm: "row",
              }}
            >
              <Text
                as="p"
                size={{
                  initial: "6",
                  xs: "8",
                }}
                mt={{
                  initial: "8",
                  sm: "0",
                }}
                align="center"
                className={classNames(styles.paragraph, "grayText")}
              >
                QuillBrix is your partner in digital innovation. Whether
                you&apos;re looking to revamp your website, create a stunning
                mobile app, or optimize your development processes, we have the
                expertise to bring your vision to life.
              </Text>
              <ButtonCommon asChild>
                <Link href="/career">Join Our Team</Link>
              </ButtonCommon>
            </Flex>
          </Flex>
        </SectionCommon>
      </div>
    </main>
  );
}

export default Services;
