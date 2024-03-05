import { Flex } from "@radix-ui/themes";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import MobileLinkList from "../MobileLinkList";
import styles from "../header.module.scss";

function NavDrawer() {
  return (
    <RemoveScroll removeScrollBar={false}>
      <FocusLock>
        <Flex direction="column" gap="7" className={styles.mobileDrawer} p="5">
          <MobileLinkList />
        </Flex>
      </FocusLock>
    </RemoveScroll>
  );
}

export default NavDrawer;
