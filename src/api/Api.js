import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth, db } from "../Firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";

export const LoginHandler = (username, password, setMsg) => {
  if (username === '' || password === '') {
    return setMsg('Fill all the forms!!!')
  } else {
    signInWithEmailAndPassword(Auth, username, password)
      .then((res) => {
        setMsg('Login Successfull')
        window.localStorage.setItem('token', res.user.accessToken)
        window.location.reload()
      })
      .catch((err) => {
        setMsg('Username or Password invalid')
      })
  }
};

export const removeToken = () => {
  window.localStorage.removeItem('token')
  window.location.reload()
};

export const addData = async () => {
  await addDoc(collection(db, "cities"), {
    name: "Tokyo",
    country: "Japan",
    state: 'timur'
  })
};
