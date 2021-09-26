import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL:
    "https://jll-service-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default admin;
