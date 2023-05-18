"use client";
import styles from "../../styles/Main.module.scss";
import ButtonOne from "@/app/components/buttons/ButtonOne";
import ButtonTwo from "@/app/components/buttons/ButtonTwo";
// import { provider } from "../../firebase/firebaseApp";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

type Props = {};

export default function page({}: Props) {
	// const auth = getAuth();

	const handleLogin = async () => {
		// signInWithPopup(auth, provider)
		// 	.then((result) => {
		// 		const credential: any = GoogleAuthProvider.credentialFromResult(result);
		// 		const token = credential.accessToken;
		// 		// The signed-in user info.
		// 		const user = result.user;
		// 		const currentUserName: any = auth.currentUser?.displayName;
		// 		console.log("token:", token);
		// 		console.log("user:", user);
		// 		console.log("currentUserName:", currentUserName);
		// 	})
		// 	.catch((error) => {
		// 		const errorCode = error.code;
		// 		const errorMessage = error.message;
		// 		console.log(errorCode);
		// 		console.log(errorMessage);
		// 		return;
		// 	});
		console.log("login pressed");
	};
	const handleLogout = () => {
		console.log("logout pressed");
	};

	return (
		<main className={styles.mainWithNav}>
			<div>Login Page</div>
			<ButtonOne label={"Log in"} onClick={handleLogin} />
			<ButtonTwo label={"Log out"} onClick={handleLogout} />
		</main>
	);
}
