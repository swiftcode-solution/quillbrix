import { Heading, Text } from "@radix-ui/themes";
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
        </Heading>
        <Text as="p" mt="7" size="5" align={{ initial: "center", sm: "left" }}>
          Have a specific inquiry? Fill out the form below, and we&apos;ll get
          back to you as soon as possible.
        </Text>
        <ContactForm />
      </SectionCommon>
    </main>
  );
}

export default ContactUs;