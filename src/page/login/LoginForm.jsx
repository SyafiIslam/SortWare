import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Buttons";
import { LoginHandler } from "../../api/Api";
import Mail from '../../assets/email.svg'
import Lock from '../../assets/lock.svg'
import Open from '../../assets/eye_open.svg'
import Close from '../../assets/eye_close.svg'

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState('password');

  const TypeHandler= () => {
    type === 'password' ? setType('text') : setType('password')
  }

  return (
    <div className="rounded-3xl shadow-xl bg-white w-full py-8 px-32 flex flex-col">
      <p className="text-[43px] font-bold text-center mt-32">Login</p>

      <div className="flex flex-col gap-10 mb-32">
        <div className="mt-20">
          <p className="font-semibold text-[18px] mb-3">Username</p>
          <Input type="email" onChange={(e) => setUsername(e.target.value)} img={Mail} img2  />
        </div>

        <div className="mb-10">
          <p className="font-semibold text-[18px] mb-3">Password</p>
          <Input
            type={type}
            onChange={(e) => setPassword(e.target.value)}
            img={Lock}
            img2={type === 'password' ? Open : Close}
            onClick={() => TypeHandler()}
          />
          <p className={`${msg === "Login Successfull" ? "text-success500" : "text-err500" } text-[18px] font-bold`}>
            {msg}
          </p>
        </div>

        <Button onClick={() => LoginHandler(username, password, setMsg)}>
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
