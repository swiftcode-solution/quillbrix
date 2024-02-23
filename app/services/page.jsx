import Link from "next/link";
import { Flex, Separator, Text } from "@radix-ui/themes";
import SectionCommon from "@/components/SectionCommon";
import ButtonCommon from "@/components/ButtonCommon";
import HeadingCommon from "@/components/HeadingCommon";
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
            style={{ maxWidth: "900px" }}
            className={styles.heading}
          >
            LET&apos;S FORGE DIGITAL EXCELLENCE TOGETHER
          </HeadingCommon>
          <Text
            style={{ maxWidth: "900px" }}
            size={{
              initial: "6",
              xs: "7",
            }}
            align="center"
          >
            We are your one-stop destination for transformative IT solutions.
            Explore our expertise in Web Development, Mobile Development,
            DevOps, and Hosting Solutions.
          </Text>
          <Flex gap="5" wrap="wrap" justify="center">
            <ButtonCommon>
              <Link href="/contact-us">Become a Client</Link>
            </ButtonCommon>
            <ButtonCommon variant="outline" className={styles.joinButton}>
              <Link href="/career">Join Our Team</Link>
            </ButtonCommon>
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
              height={50}
              width={150}
            />
            <img
              alt="services"
              src="/services/service-logo-2.png"
              height={50}
              width={150}
            />
            <img
              alt="services"
              src="/services/service-logo-1.png"
              height={50}
              width={150}
            />
          </Flex>
        </Flex>
      </SectionCommon>
      <SectionCommon>
        <Flex
          gap="9"
          justify="between"
          direction={{ initial: "column", md: "row" }}
        >
          <img
            src="/services/service-image.png"
            alt="services"
            height={400}
            style={{ maxWidth: "500px", alignSelf: "center" }}
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
                    weight="light"
                  >
                    {title.toUpperCase()}
                  </Text>
                  <Text
                    size={{
                      initial: "6",
                      sm: "7",
                    }}
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
            <HeadingCommon>
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </HeadingCommon>
            <Separator size="4" />
            <Flex
              gap="9"
              align="end"
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
                  xs: "7",
                }}
                mt={{
                  initial: "8",
                  sm: "0",
                }}
                align="center"
                className={styles.paragraph}
              >
                QuillBrix is your partner in digital innovation. Whether
                you&apos;re looking to revamp your website, create a stunning
                mobile app, or optimize your development processes, we have the
                expertise to bring your vision to life.
              </Text>
              <ButtonCommon>
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
