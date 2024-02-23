import { useState } from "react";
import { toast } from "react-hot-toast";

const email = "testing@gmail.com";
const formSubmitUrl = "efsdegsw";

function useFormSubmit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    code: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let loadingToastId;
    try {
      loadingToastId = toast.loading("Processing your message...");
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(
          "Thank you for reaching us out. We appreciate your communication and will respond promptly.",
          { id: loadingToastId }
        );

        setFormData({
          name: "",
          email: "",
          number: "",
          code: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        `Oops! It seems there was an error in transmitting your message. Please try again or write us directly at ${email}.`,
        { id: loadingToastId }
      );
    }
  };

  return [handleChange, handleSubmit, formData];
}

export default useFormSubmit;
