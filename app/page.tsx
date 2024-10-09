"use client";
import InviteUserView from "@/components/InviteUserView";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const { currentUser } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!currentUser) {
			router.replace("/login");
		}
	}, [currentUser, router]);

	return <div>{currentUser && <InviteUserView />}</div>;
}
