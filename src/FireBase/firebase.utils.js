import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import {SignInWi}

const config = {
	apiKey: "AIzaSyBJCrqFcXdmI4kwlDhwFTp7pHHZ5kYPIKM",
	authDomain: "react-practice-project-cd871.firebaseapp.com",
	projectId: "react-practice-project-cd871",
	storageBucket: "react-practice-project-cd871.appspot.com",
	messagingSenderId: "853099005582",
	appId: "1:853099005582:web:8f250613eac8f11899ebdf",
	measurementId: "G-XDKSSYS6KB",
};

export const creatUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("error while creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
