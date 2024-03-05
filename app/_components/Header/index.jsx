"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Container, Flex } from "@radix-ui/themes";
import { useClickAway } from "react-use";
import ButtonCommon from "@/components/ButtonCommon";
import Hamburger from "@/public/assets/icons/Hamburger";
import SectionCommon from "@/components/SectionCommon";
import CloseIcon from "@/public/assets/icons/CloseIcon";
import LinkList from "./LinkList";
import NavDrawer from "./NavDrawer";
import styles from "./header.module.scss";

const logoHeight = "45px";
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navDrawerRef = useRef();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPath = pathname + searchParams.toString();

  const setFalse = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  useClickAway(navDrawerRef, setFalse);

  useEffect(() => {
    const resizeHandler = () => {
      setIsDrawerOpen(false);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [currentPath]);

  return (
    <header className={styles.header}>
      <SectionCommon className={styles.section}>
        <Flex justify="between" align="center" width="100%">
          <Link href="/" style={{ height: logoHeight }}>
            <img src="/logo.png" alt="logo" height={logoHeight} />
          </Link>
          <LinkList />
          <Flex display={{ initial: "none", sm: "flex" }}>
            <ButtonCommon asChild>
              <Link href="/contact-us">LET&apos;S TALK</Link>
            </ButtonCommon>
          </Flex>
        </Flex>
        <Container
          display={{
            initial: "flex",
            sm: "none",
          }}
          grow="0"
          ref={navDrawerRef}
        >
          <Button
            variant="ghost"
            style={{ cursor: "pointer" }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {!isDrawerOpen ? <Hamburger size={25} /> : <CloseIcon size={25} />}
          </Button>

          {isDrawerOpen && (
            <div>
              <NavDrawer />
            </div>
          )}
        </Container>
      </SectionCommon>
    </header>
  );
}

export default Header;
