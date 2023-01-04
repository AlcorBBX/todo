import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signWithGoogle = () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(responsive => {
        console.log(responsive.user.uid);
      })
      .catch(error => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <>
      <button onClick={() => signWithGoogle()}>sign with google</button>
    </>
  );
};

export const LogOut = () => {
  const auth = getAuth();

  return (
    <>
    <button onClick={() => signOut(auth)}>logout</button>
    </>
  )
}
