import { Flex, Separator } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { socialLinks } from "../../Footer/links.info";
import { links } from "../links.info";
import styles from "./mobileLinklist.module.scss";

function MobileLinkList() {
  const pathname = usePathname();
  return (
    <Flex
      width="100%"
      height="100%"
      mt="9"
      justify="between"
      direction="column"
      align="center"
      gap="6"
    >
      <Flex gap="6" direction="column" align="center">
        {links.map(({ label, path }, index) => (
          <Link
            key={index}
            href={path}
            className={classNames(
              styles.link,
              pathname === path && styles.activeLink
            )}
          >
            {label}
          </Link>
        ))}
      </Flex>
      <Flex direction="column" width="100%">
        <Separator size="4" />
        <Flex gap="5" justify="center" mt="5">
          {socialLinks.map(({ title: Icon, href }, index) => (
            <Link key={index} href={href}>
              <Icon size={40} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MobileLinkList;
