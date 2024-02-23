import { Flex } from "@radix-ui/themes";
import { RemoveScroll } from "react-remove-scroll";
import MobileLinkList from "../MobileLinkList";
import styles from "../header.module.scss";

function NavDrawer() {
  return (
    <RemoveScroll removeScrollBar={false}>
      <Flex direction="column" gap="7" className={styles.mobileDrawer} p="5">
        <MobileLinkList />
      </Flex>
    </RemoveScroll>
  );
}

export default NavDrawer;
