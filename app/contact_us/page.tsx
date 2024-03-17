"use client";
import CustomInput from "@/components/CustomInput";
import React from "react";

type FormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: string, field: keyof FormProps) => {
    setData({ ...data, [field]: e });
  };
  return (
    <>
      <div className="bg-gradient" />
      <section className="min-h-[calc(100vh-98px)] max-container padding-container flex flex-col items-center xl:gap-14 gap-10">
        <div className="headingContent space-y-3 flex flex-col items-center mt-5">
          <h1 className="bold-28 lg:bold-52 capitalize text-center text-green-90 max-w-[995px]">
            <strong>
              Reach out and let's pitch your perfect{" "}
              <span className="text-transparent bg-gradient-to-t from-green-50 to-green-300  bg-clip-text">
                camping adventure
              </span>{" "}
              together!
            </strong>
          </h1>
          <p className="max-w-[600px] regular-16 text-center text-gray-50">
            Embark on an unforgettable journey into the great outdoors with our
            camping adventures. Immerse yourself in nature, discover hidden
            trails, and create lasting memories under the open sky.
          </p>
        </div>

        <form className="max-w-[500px] w-full flex flex-col items-center gap-5">
          <CustomInput
            id="name"
            label="Name"
            type="name"
            inputFieldType="text-field"
            variant="filled"
            onUpdate={(newValue) => handleChange(newValue, "name")}
            value={data.name}
            required
          />
          <CustomInput
            id="email"
            label="Email"
            type="email"
            inputFieldType="text-field"
            variant="filled"
            onUpdate={(newValue) => handleChange(newValue, "email")}
            value={data.email}
            required
          />
          <CustomInput
            id="message"
            label="Message"
            type="message"
            inputFieldType="text-area"
            variant="filled"
            onUpdate={(newValue) => handleChange(newValue, "message")}
            value={data.message}
            rows={5}
            multiline
            required
          />
          <button
            type="submit"
            className="bg-green-90 text-white py-3 px-8 rounded-md regular-16 w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
