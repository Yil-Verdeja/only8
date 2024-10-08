import { useQuery } from "@tanstack/react-query";
import User from "../entities/User";

const DEFAULT_USERS: User[] = [
	{ id: "1", name: "Bob Is", isVerified: true },
	{ id: "2", name: "Alana Not", isVerified: true },
	{ id: "3", name: "John Kreeve", isVerified: true },
	{ id: "4", name: "Mexi", isVerified: true },
	{ id: "5", name: "Cola Coca", isVerified: true },
];

const fetchUsers = async () => {
	const users = await new Promise<User[]>((resolve) => {
		setTimeout(() => {
			resolve(DEFAULT_USERS);
		}, 1000);
	});
	return users;
};

const useUsers = () =>
	useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});

export default useUsers;
