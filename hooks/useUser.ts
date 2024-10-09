import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import User from "../entities/User";

const fetchUser = async (userId: number | null) => {
	if (!userId) return null;
	const users = await axios
		.get<User>("/api/get-users/" + userId.toString())
		.then((res) => res.data);
	return users;
};

const useUser = (userId: number | null) =>
	useQuery({
		queryKey: ["users", userId],
		queryFn: () => fetchUser(userId),
		enabled: false,
	});

export default useUser;
