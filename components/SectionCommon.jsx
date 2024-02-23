import { Section } from "@radix-ui/themes";

function SectionCommon({ children, style = {}, ...props }) {
  return (
    <Section
      width="100%"
      p={{ initial: "5", sm: "9" }}
      style={{ maxWidth: "1400px", margin: "0px auto", ...style }}
      {...props}
    >
      {children}
    </Section>
  );
}

export default SectionCommon;
