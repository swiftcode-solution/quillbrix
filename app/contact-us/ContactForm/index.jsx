"use client";

import { Root, Submit } from "@radix-ui/react-form";
import { Flex, Grid } from "@radix-ui/themes";
import ButtonCommon from "@/components/ButtonCommon";
import useFormSubmit from "./useFormSubmit";
import FormField from "./FormField";
import styles from "./contactForm.module.scss";

function ContactForm() {
  const [handleChange, handleSubmit, formData] = useFormSubmit();

  return (
    <Root className={styles.form} onSubmit={handleSubmit}>
      <Flex direction="column" gap="9">
        <Grid
          columns={{
            initial: "1",
            sm: "2",
          }}
          gap="9"
        >
          <FormField
            required
            name="name"
            label="Name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          />
          <FormField
            required
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
          <FormField
            required
            name="number"
            label="Phone"
            type="tel"
            onChange={handleChange}
            value={formData.number}
          />
          <FormField
            required
            name="code"
            label="Country Code"
            type="number"
            onChange={handleChange}
            value={formData.number}
          />
        </Grid>
        <FormField
          required
          name="message"
          label="Message Content"
          as="textarea"
          rows="6"
          onChange={handleChange}
          value={formData.message}
        />
        <div>
          <Submit asChild>
            <ButtonCommon>Submit</ButtonCommon>
          </Submit>
        </div>
      </Flex>
    </Root>
  );
}

export default ContactForm;
