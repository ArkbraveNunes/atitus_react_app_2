import Firebase from '../database/FirebaseConnect'

export default class FirebaseService {

  static getFirestore() {
    return Firebase.firestore();
  }

  static getAuth() {
    return Firebase.auth();
  }
};
