"use client";
import InviteUserView from "@/components/InviteUserView";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const { currentUser, setCurrentUser } = useAuth();
	const router = useRouter();

	useEffect(() => {
		console.log(currentUser);
		if (!currentUser) {
			router.replace("/login");
		}
	}, [currentUser, router]);

	const handleSignOut = () => {
		signOut();
		setCurrentUser(null);
		router.push("/login");
	};

	if (!currentUser) return <p>Authenticating...</p>;

	return (
		<div>
			<div className="flex flex-row gap-4 items-center">
				<h2>Current User: {currentUser.name}</h2>
				<Button variant="outline" onClick={handleSignOut}>
					Sign Out
				</Button>
			</div>
			<InviteUserView />
		</div>
	);
}
