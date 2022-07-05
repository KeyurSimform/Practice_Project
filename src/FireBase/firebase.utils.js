import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
// import 'firebase/auth';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
const config = {
	apiKey: "AIzaSyBJCrqFcXdmI4kwlDhwFTp7pHHZ5kYPIKM",
	authDomain: "react-practice-project-cd871.firebaseapp.com",
	projectId: "react-practice-project-cd871",
	storageBucket: "react-practice-project-cd871.appspot.com",
	messagingSenderId: "853099005582",
	appId: "1:853099005582:web:8f250613eac8f11899ebdf",
	measurementId: "G-XDKSSYS6KB",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
