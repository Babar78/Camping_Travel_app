"use client";
import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="lg:grid grid-cols-2 w-screen h-screen relative max-[1024px]:bg-login-bg bg-cover bg-center flex justify-center items-center md:p-0 p-10">
        <div className="space-y-5 bg-white rounded-2xl p-10 flex flex-col justify-center items-center">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={50}
            height={40}
            className="w-auto h-auto min-w-[150px]"
          />
          <h1 className="regular-24 text-green-90">Login</h1>
          <form className="space-y-5 max-w-[500px]">
            <CustomInput
              id="user-email"
              label="Email"
              type="email"
              inputFieldType="text-field"
              variant="filled"
              onChange={handleEmailChange}
              value={email}
              backgroundColor="white"
              color="black"
              required
            />
            <CustomInput
              id="user-password"
              label="Password"
              inputFieldType="password"
              variant="filled"
              onChange={handlePasswordChange}
              value={password}
              backgroundColor="white"
              color="black"
              required
            />

            <button
              className={`flexCenter gap-3 rounded-md border w-full bg-green-50 text-white py-2 px-3`}
              type="submit"
            >
              <label className="regular-16 whitespace-nowrap cursor-pointer">
                Login
              </label>
            </button>
          </form>
          <p className="regular-14 text-gray-40 text-center">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="underline font-bold text-green-50"
            >
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
