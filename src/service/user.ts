import { UserParam } from "../param/user";
import firebaseRepo from "../repository/firebase";

const signUp = async (request: UserParam): Promise<UserParam> => {
  let user: UserParam = { email: "", role: "" };

  const userCredentials = await firebaseRepo.createAccount(
    request.email,
    request.password
  );
  user.email = userCredentials.user.email;

  return user;
};

const signIn = async (request: UserParam): Promise<UserParam> => {
  let user: UserParam = { email: "", role: "" };

  const userCredentials = await firebaseRepo.signIn(
    request.email,
    request.password
  );
  user.email = userCredentials.user.email;

  return user;
};

const signOut = async (): Promise<void> => {
  await firebaseRepo.signOut();
};

export default { signUp, signIn, signOut };
