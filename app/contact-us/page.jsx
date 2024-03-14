import { Heading, Separator, Text } from "@radix-ui/themes";
import Round from "@/public/assets/icons/Round";
import SectionCommon from "@/components/SectionCommon";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <main>
      <SectionCommon>
        <Heading
          size={{ initial: "7", sm: "9" }}
          weight="medium"
          align={{ initial: "center", sm: "left" }}
        >
          TALK TO US, WE&apos;RE LISTENING
          <Round size="20" style={{ marginLeft: "12px" }} />
        </Heading>
        <Text as="p" mt="7" size="5" align={{ initial: "center", sm: "left" }}>
          Have a specific inquiry? Fill out the form below, and we&apos;ll get
          back to you as soon as possible.
        </Text>
        <Separator size="4" mt="8" style={{ height: "2px" }} />
        <ContactForm />
      </SectionCommon>
    </main>
  );
}

export default ContactUs;
