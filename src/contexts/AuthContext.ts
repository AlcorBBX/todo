import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthProps {
  children: any;
}
// export const AuthContext = createContext();
export const AuthProvider = ({ children }: IAuthProps) => {
  // const [currentUser, setCurrentUser] = useState({});
  // const [loading, setLoading] = useState(true);
  // let navigate = useNavigate();
  // const authUser = getAuth();

  // const signWithGoogle = () => {
  //   setAuthing(true);

  //   signInWithPopup(auth, new GoogleAuthProvider())
  //     .then(responsive => {
  //       console.log(responsive.user.uid);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setAuthing(false);
  //     });
  // };

  // const authValue = {
  //   currentUser,
  //   // signupWithEmail,
  //   // signinWithEmail,
  //   signWithGoogle,
  //   // signout,
  // };
  // return (
  //   <AuthContext.Provider value={authValue}>
  //     {!loading && children}
  //   </AuthContext.Provider>
  // );
};
