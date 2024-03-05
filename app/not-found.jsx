import Link from "next/link";
import { Flex, Heading, Text } from "@radix-ui/themes";
import ButtonCommon from "@/components/ButtonCommon";
import styles from "./404.module.scss";

function Error() {
  return (
    <main className={styles.main}>
      <Flex width="100%" gap="9" direction="column" align="center" mt="9">
        <Text size="7">OOPS..</Text>
        <Heading className={styles.heading} size="9">
          404
        </Heading>
        <Text align="center" size="6">
          WE CAN&apos;T SEEM TO FIND THE PAGE YOU ARE LOOKING FOR
        </Text>
        <ButtonCommon asChild>
          <Link href="/">Back Home</Link>
        </ButtonCommon>
      </Flex>
    </main>
  );
}

export default Error;
