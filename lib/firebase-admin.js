var admin = require("firebase-admin");
var serviceAccount = require("../../../../3-firebase/service-account-key/service-account-file.json");

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://quick-comments-70a20.firebaseio.com",
//   });
// }

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://quick-comments-70a20.firebaseio.com",
  });
  console.log("Initialized.");
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

export default admin;

// export const verifyIdToken = (token) => {
//   if (!admin.apps.length) {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: "https://quick-comments-70a20.firebaseio.com",
//     });
//   }
//   return admin
//     .auth()
//     .verifyIdToken(token)
//     .catch((error) => {
//       throw error;
//     });
// };

// export const instantiateDb = () => {
//   if (!admin.apps.length) {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: "https://quick-comments-70a20.firebaseio.com",
//     });
//   }
//   return admin.firestore();
// };
