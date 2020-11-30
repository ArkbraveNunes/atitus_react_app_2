import FirebaseService from "./firebase-service";

export default class TaskService {
  static async getTask(id = null) {
    let result = null;
    if (id) {
      result = await (
        await FirebaseService.getFirestore().collection("tasks").doc(id)
      ).get();
    } else {
      result = await FirebaseService.getFirestore().collection("tasks").get();
    }
    return result;
  }

  static postTask(task) {
    return FirebaseService.getFirestore().collection("tasks").doc().set(task);
  }

  static deleteTask({ id }) {
    return FirebaseService.getFirestore().collection("tasks").doc(id).delete();
  }

  static updateTask({ task, id }) {
    return FirebaseService.getFirestore().collection("tasks").doc(id).set(task);
  }
}
