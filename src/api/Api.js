import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth, db, storage } from "../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { uid } from "uid";


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

export const addData = async (data, file) => {
  await addDoc(collection(db, "barang"), {
    id: uid(),
    nama: data.nama,
    kategori: data.kategori,
    tanggal_masuk: data.tanggal_masuk,
    foto: file
  })
};

export const uploadFoto = (barang, foto) => {
  const storageRef = ref(storage, foto.name);

  const uploadTask = uploadBytesResumable(storageRef, foto);


  uploadTask.on('state_changed',
    (snapshot) => {

      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        addData(barang, downloadURL)
      });
    }
  );
};

export const getBarang = async () => {
  let barang = []

  try {
    const querySnapshot = await getDocs(collection(db, "barang"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      barang.push(doc.data())
    })
  } catch (error) {
    console.log(error)
  }
  return barang
};
