"use client";
import { Button } from "@/components/ui/Button";
import UserComboBox from "@/components/UserComboBox";
import { useAuth } from "@/context/AuthContext";
import User from "@/entities/User";
import { signIn, signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthenticateUserPage = () => {
	const { currentUser, isLoading, setCurrentUser } = useAuth();
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const router = useRouter();

	const handleSignIn = () => {
		if (!selectedUser) return;
		// router.push("/");
		signIn(selectedUser.id);
		setCurrentUser(selectedUser);
	};

	const handleSignOut = () => {
		signOut();
		setCurrentUser(null);
	};

	if (isLoading) {
		return <p>Checking user...</p>;
	}

	return (
		<div>
			{!currentUser ? (
				<div className="flex flex-row gap-4 items-center">
					<UserComboBox
						selectedUser={selectedUser}
						onSelected={setSelectedUser}
					/>
					<Button onClick={handleSignIn}>Sign In</Button>
				</div>
			) : (
				<div className="flex flex-row gap-4 items-center">
					<h2>Current User: {currentUser.name}</h2>
					<Button variant="outline" onClick={handleSignOut}>
						Sign Out
					</Button>
					<Button onClick={() => router.push("/")}>Dashboard</Button>
				</div>
			)}
		</div>
	);
};

export default AuthenticateUserPage;
