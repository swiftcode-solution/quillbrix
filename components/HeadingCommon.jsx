import { Heading } from "@radix-ui/themes";

function HeadingCommon({ children, ...props }) {
  return (
    <Heading
      weight="light"
      size={{
        initial: "7",
        sm: "9",
      }}
      align="center"
      {...props}
    >
      {children}
    </Heading>
  );
}

export default HeadingCommon;
