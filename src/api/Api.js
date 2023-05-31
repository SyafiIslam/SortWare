import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Firebase";


export const LoginHandler = (username, password, setMsg) => {
  if (username === '' || password === '') {
    return setMsg('Fill all the forms!!!')
  } else {
    signInWithEmailAndPassword(Auth, username, password)
      .then((res) => {
        setMsg('Login Successfull')
        window.localStorage.setItem('token', res.user.accessToken)
      }).catch((err) => {
        setMsg('Username or Password invalid')
      });
  }
};
