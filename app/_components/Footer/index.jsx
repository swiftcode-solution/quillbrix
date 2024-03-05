import Link from "next/link";
import { Flex, Separator, Text } from "@radix-ui/themes";
import HeadingCommon from "@/components/HeadingCommon";
import ButtonCommon from "@/components/ButtonCommon";
import SectionCommon from "@/components/SectionCommon";
import { configs } from "@/public/configs";
import { pageLinks, socialLinks } from "./links.info";
import styles from "./footer.module.scss";

const { email } = configs;

function Footer() {
  return (
    <footer className={styles.footer}>
      <SectionCommon>
        <Flex direction="column" gap="9">
          <Flex
            justify="between"
            width="100%"
            gap="9"
            wrap="wrap"
            direction={{ initial: "column", sm: "row" }}
          >
            <Flex direction="column" gap="9">
              <HeadingCommon className={styles.contactHeading} align="start">
                CONTACT
                <br />
                TODAY.
              </HeadingCommon>
              <ButtonCommon asChild>
                <Link href={`mailto:${email}`}>{email}</Link>
              </ButtonCommon>
            </Flex>
            <Flex direction="column" gap="5">
              <Text>Quick Links</Text>
              <Flex gap="3" className={styles.buttonContainer} wrap="wrap">
                {pageLinks.map(({ title, href }, index) => (
                  <ButtonCommon
                    variant="outline"
                    asChild
                    key={index}
                    className={styles.pageLinks}
                  >
                    <Link href={href}>{title}</Link>
                  </ButtonCommon>
                ))}
              </Flex>
              <Separator className={styles.separator} size="4" />
              <Text>Connect With Us</Text>
              <Flex gap="5" className={styles.socialIcons}>
                {socialLinks.map(({ title: Icon, href }, index) => (
                  <Link key={index} href={href}>
                    <Icon size={40} />
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Separator size="4" className={styles.separator} />
          <Flex
            justify="between"
            direction={{ sm: "row", initial: "column" }}
            gap="5"
          >
            <Text>2024 QuillBrix. All right reserved.</Text>
            <Flex gap="5" className={styles.privacyLinks} wrap="wrap">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </Flex>
          </Flex>
        </Flex>
      </SectionCommon>
    </footer>
  );
}

export default Footer;
