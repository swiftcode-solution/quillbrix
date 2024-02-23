import classNames from "classnames";
import { Button } from "@radix-ui/themes";
import styles from "./buttonCommon.module.scss";

function ButtonCommon({ children, className, ...props }) {
  return (
    <Button
      radius="full"
      size="4"
      className={classNames(styles.button, className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonCommon;
