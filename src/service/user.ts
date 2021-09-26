import { UserCredential } from "@firebase/auth";
import { UserParam } from "../param/user";
import firebaseRepo from "../repository/firebase";

const signUp = (request: UserParam): Promise<UserCredential> => {
  return firebaseRepo.signUp(request.email, request.password);
};

const grantRole = async (request: UserParam): Promise<void> => {
  const user = await firebaseRepo.getUserByEmail(request.email);
  return firebaseRepo.grantRole(user.uid, request.role);
};

export default { signUp, grantRole };
