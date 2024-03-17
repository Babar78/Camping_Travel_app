"use client";
import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FormProps = {
  email: string;
  password: string;
};

const Login = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: string, field: keyof FormProps) => {
    setData({ ...data, [field]: e });
  };

  return (
    <>
      <div className="lg:grid grid-cols-2 w-screen h-screen relative max-[1024px]:bg-login-bg bg-cover bg-center flex justify-center items-center md:p-0 p-10">
        <div className="space-y-5 lg:bg-transparent bg-gradient-to-t from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] lg:border-0 border-[0.5px] rounded-2xl p-10 flex flex-col justify-center items-center">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={50}
            height={40}
            className="w-auto h-auto min-w-[150px]"
          />
          <h1 className="regular-24 text-white">Login</h1>
          <form className="space-y-5 max-w-[500px]">
            <CustomInput
              id="email"
              label="Email"
              type="email"
              inputFieldType="text-field"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "email")}
              backgroundColor="white"
              value={data.email}
              required
            />
            <CustomInput
              id="user-password"
              label="Password"
              inputFieldType="password"
              variant="filled"
              onUpdate={(newValue) => handleChange(newValue, "password")}
              backgroundColor="white"
              value={data.password}
              required
            />

            <button
              className={`flexCenter gap-3 rounded-md w-full bg-green-50 text-white py-2 px-3 min-h-[56px]`}
              type="submit"
            >
              <label className="regular-16 whitespace-nowrap cursor-pointer">
                Login
              </label>
            </button>
          </form>
          <p className="regular-14 text-gray-20 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="underline text-green-50" replace>
              Register
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

export default Login;
