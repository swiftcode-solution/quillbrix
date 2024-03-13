import { Heading } from "@radix-ui/themes";
import classNames from "classnames";
import styles from "./headingCommon.module.scss";

function HeadingCommon({ children, className, ...props }) {
  return (
    <Heading
      className={classNames(styles.heading, className)}
      weight="medium"
      align="center"
      {...props}
    >
      {children}
    </Heading>
  );
}

export default HeadingCommon;
