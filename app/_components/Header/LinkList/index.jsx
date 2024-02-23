import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Flex } from "@radix-ui/themes";
import { links } from "../links.info";
import styles from "./linklist.module.scss";

function LinkList({ direction = "row" }) {
  const pathname = usePathname();

  return (
    <Flex
      direction={direction}
      gap={{
        initial: "6",
        md: "9",
      }}
      display={{ initial: "none", sm: "flex" }}
    >
      {links.map(({ label, path }, index) => (
        <Link
          className={classNames(
            styles.link,
            pathname === path && styles.activeLink
          )}
          key={index}
          href={path}
        >
          {label}
        </Link>
      ))}
    </Flex>
  );
}

export default LinkList;
