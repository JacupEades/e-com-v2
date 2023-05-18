// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBVRrfaadUZBuee5_1JqaCOVkAIUMiD5Xw",
	authDomain: "eades-ecom-v2.firebaseapp.com",
	projectId: "eades-ecom-v2",
	storageBucket: "eades-ecom-v2.appspot.com",
	messagingSenderId: "811341410435",
	appId: "1:811341410435:web:276702b7e501030cf5abb6",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();
