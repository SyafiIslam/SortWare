import React from "react";
import { Input } from "../../components/input/Input";
import { Button } from '../../components/button/Buttons'

const LoginForm = () => {
  return (
    <div className="rounded-3xl shadow-xl bg-white w-full py-8 px-32 flex flex-col">
      <p className="text-[43px] font-bold text-center mt-32">Login</p>

      <div className="flex flex-col gap-10 mb-32">
        <div className="mt-20">
          <p className="font-semibold text-[18px] mb-3">Username</p>
          <Input />
        </div>

        <div className="mb-10">
          <p className="font-semibold text-[18px] mb-3">Password</p>
          <Input type="password" />
        </div>
        
        <Button>
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
