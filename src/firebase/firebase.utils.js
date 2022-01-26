import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDbySF8qsQm65GqqtshQXARZtixWdRpQJ8",
	authDomain: "crwn-db-484ff.firebaseapp.com",
	projectId: "crwn-db-484ff",
	storageBucket: "crwn-db-484ff.appspot.com",
	messagingSenderId: "884237188339",
	appId: "1:884237188339:web:800954ff5367431a19cb86",
	measurementId: "G-XP27MB4W8B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;