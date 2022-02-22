var admin = require("firebase-admin");
var serviceAccount = require("../../../../3-firebase/service-account-key/quick-comments-70a20-firebase-adminsdk-jhml3-0f65de7968.json");

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
