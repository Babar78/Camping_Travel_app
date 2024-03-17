"use client";
import CustomInput from "@/components/CustomInput";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FormProps = {
  username: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: string, field: keyof FormProps) => {
    setData({ ...data, [field]: e });
  };

  return (
    <>
      <p className="text-black">Country: {data.country}</p>
      <div className="lg:grid grid-cols-2 w-screen h-screen relative max-[1024px]:bg-login-bg bg-cover bg-center flex justify-center items-center md:p-0 p-10">
        <div className="space-y-5 bg-white rounded-2xl p-10 flex flex-col justify-center items-center">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={50}
            height={40}
            className="w-auto h-auto min-w-[150px]"
          />
          <h1 className="regular-24 text-green-90">Signup</h1>
          <form className="space-y-5 max-w-[500px]">
            <CustomInput
              id="username"
              label="Username"
              type="text"
              inputFieldType="text-field"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "username")}
              value={data.username}
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
              id="phone"
              label="Phone Number"
              type="tel"
              inputFieldType="text-field"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "phone")}
              value={data.phone}
              required
            />

            <CustomInput
              id="country"
              label="Select Country"
              inputFieldType="countries-select"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "country")}
              value={data.country}
              required
            />

            <CustomInput
              id="password"
              label="Password"
              inputFieldType="password"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "password")}
              value={data.password}
              required
            />

            <CustomInput
              id="confirmPassword"
              label="Confirm Password"
              inputFieldType="password"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "confirmPassword")}
              value={data.confirmPassword}
              required
            />
            <button
              className={`flexCenter gap-3 rounded-md border w-full bg-green-50 text-white py-2 px-3`}
              type="submit"
            >
              <label className="regular-16 whitespace-nowrap cursor-pointer">
                Create Account
              </label>
            </button>
          </form>
          <p className="regular-14 text-gray-30 text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline font-bold text-green-50">
              Login
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex lg:bg-login-bg bg-cover bg-center w-full h-full justify-center items-center">
          <div className="text-white flex flex-col items-center">
            <Image
              src="/logo/hilink-logo-white.svg"
              alt="logo"
              width={50}
              height={40}
              className="w-auto h-auto min-w-[150px]"
            />
            <p className="regular-16 mt-6 text-green-50 xl:max-w-[520px] text-center">
              Unleash Your Wanderlust: Where Adventure Begins
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
