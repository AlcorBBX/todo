import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface IAuthProps {
  children: React.ReactNode;
}

export const Auth = ({ children }: IAuthProps) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const authUser = getAuth();

  useEffect(() => {
    AuthCheck();
  }, [authUser]);

  const AuthCheck = onAuthStateChanged(authUser, user => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      // navigate("/");
    }
  });

  if(loading) return <p>Loading ...</p>

  return <>{children}</>;
};
