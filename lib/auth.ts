import User from "@/entities/User";
import axios from "axios";

export const signIn = (userId: number) => {
	localStorage.setItem("userId", userId.toString());
};

export const signOut = () => {
	localStorage.removeItem("userId");
};

export const getSignedInAuthenticatedUser = async () => {
	try {
		const userIdString = localStorage.getItem("userId");
		if (!userIdString) return null;

		const userId = parseInt(userIdString, 10);
		if (isNaN(userId)) return null;

		const user = await axios
			.get<User>("/api/get-users/" + userId)
			.then((res) => res.data);

		return user;
	} catch (error) {
		console.error(error);
		return null;
	}
};
