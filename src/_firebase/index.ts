import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const initConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const firebaseConfig = initializeApp(initConfig);
export const auth = getAuth(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(firebaseConfig);

export const batchWriteIcebreakerTasks = async (userId: number) => {
  const icebreakerProjectId = "welcome";
  try {
    const icebreakerProject = {
      name: "Welcome",
      projectId: icebreakerProjectId,
      projectColour: {
        name: "Charcoal",
        hex: "#808080",
      },
      projectIsList: true,
    };
    const projectsDocRef = doc(collection(db, "user", `${userId}/projects`));
    setDoc(projectsDocRef, icebreakerProject).then(() => {
      let batch = writeBatch(db);
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUserProfileDocument = async (userAuth: any) => {
  if (!userAuth) return;

  const userRef = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    setDoc(userRef, { displayName, createdAt, email })
      .finally(() => batchWriteIcebreakerTasks(userAuth.uid))
      .catch(err => console.log(err));
  }
  return userRef;
};
