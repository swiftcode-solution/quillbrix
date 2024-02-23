import { useState } from "react";
import { Control, Field, Label, Message } from "@radix-ui/react-form";
import styles from "./formField.module.scss";

function FormField({
  as: Component = "input",
  name,
  label,
  type = "text",
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Field name={name}>
      <div>
        <Label
          className={
            isFocused
              ? `${styles.formLabel} ${styles.focused}`
              : styles.formLabel
          }
        >
          {label}
        </Label>
      </div>
      <Control asChild>
        <Component
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </Control>
      <Message className={styles.formMessage} match="valueMissing">
        Please enter your {label}
      </Message>
      <Message className={styles.formMessage} match="typeMismatch">
        Please provide a valid {label.toLowerCase()}
      </Message>
    </Field>
  );
}

export default FormField;
