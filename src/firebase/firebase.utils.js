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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;

	console.log(snapShot);

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;