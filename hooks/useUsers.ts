import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import User from "../entities/User";

const fetchUsers = async () => {
	const users = await axios.get<User[]>("/api/users").then((res) => res.data);
	return users;
};

const useUsers = () =>
	useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

export default useUsers;
