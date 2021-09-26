import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

import { auth } from "../firebaseInit";
import admin from "../firebaseAdminInit";

const signUp = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const grantRole = (userId: string, userRole: string): Promise<void> => {
  return admin.auth().setCustomUserClaims(userId, { role: userRole });
};

const getUserByEmail = (email: string): Promise<admin.auth.UserRecord> => {
  return admin.auth().getUserByEmail(email);
};

export default { signUp, grantRole, getUserByEmail };
