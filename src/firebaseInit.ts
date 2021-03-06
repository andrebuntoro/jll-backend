import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  projectId: "jll-service",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
