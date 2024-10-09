"use client";
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { getSignedInAuthenticatedUser } from "@/lib/auth";
import User from "@/entities/User";

export interface AuthContextType {
	currentUser: User | null;
	isLoading: boolean;
	setCurrentUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		console.log("calling");
		setLoading(true);
		const checkAuthentication = async () => {
			const authenticated = await getSignedInAuthenticatedUser();
			setCurrentUser(authenticated);
			setLoading(false);
		};
		checkAuthentication();
	}, []);

	return (
		<AuthContext.Provider
			value={{ currentUser, setCurrentUser, isLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
