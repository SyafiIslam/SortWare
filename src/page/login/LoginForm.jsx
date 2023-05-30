import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from '../../components/button/Buttons'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from '../../Firebase' 

const LoginForm = () => {

  const[username, setUsername]= useState('')
  const[password, setPassword]= useState('')
  const[errmsg, setErrmsg]= useState('')

  const handleSubmit= () => {
    if (username === '' || password === '') {
      return setErrmsg('Fill all the forms!!!')
    } else {
      signInWithEmailAndPassword(Auth, username, password)
      .then((res) => {
        setErrmsg('')
        window.localStorage.setItem('token', res.user.accessToken)
      }).catch((err) => {
        setErrmsg('Username or Password invalid')
      });
    }
  }

  return (
    <div className="rounded-3xl shadow-xl bg-white w-full py-8 px-32 flex flex-col">
      <p className="text-[43px] font-bold text-center mt-32">Login</p>

      <div className="flex flex-col gap-10 mb-32">
        <div className="mt-20">
          <p className="font-semibold text-[18px] mb-3">Username</p>
          <Input onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mb-10">
          <p className="font-semibold text-[18px] mb-3">Password</p>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} />
          <p className="text-err300 text-[18px] font-bold">
          {errmsg}
          </p>
        </div>
        
        <Button onClick={() => handleSubmit()}>
          Masuk
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
