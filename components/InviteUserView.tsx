"use client";
import { useState } from "react";
import useUsers from "../hooks/useUsers";
import UserComboBox from "@/components/UserComboBox";
import User from "../entities/User";
// import PermissionSelector, { PermissionType } from "./PermissionSelector";
// import InviteUserButton from "./InviteUserButton";

export type PermissionCategory = "posts" | "messages" | "profile";

// const permissionCategories: {
// 	category: PermissionCategory;
// 	label: string;
// }[] = [
// 	{ category: "posts", label: "Posts" },
// 	{ category: "messages", label: "Messages" },
// 	{ category: "profile", label: "Profile" },
// ];

// type Permissions = {
// 	[K in PermissionCategory]: PermissionType;
// };

// const DEFAULT_PERMISSIONS: Permissions = {
// 	posts: "none",
// 	messages: "none",
// 	profile: "none",
// };

const InviteUserView = () => {
	const [user, setUser] = useState<User | null>(null);
	const { data: users, isLoading, error } = useUsers();
	// const [permissions, setPermissions] =
	// 	useState<Permissions>(DEFAULT_PERMISSIONS);

	// const handlePermissionChange = (
	// 	category: PermissionCategory,
	// 	value: PermissionType
	// ) => {
	// 	setPermissions((prevPermissions) => ({
	// 		...prevPermissions,
	// 		[category]: value,
	// 	}));
	// };

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	if (users)
		return (
			<div className="flex flex-row items-center gap-4">
				<UserComboBox
					users={users}
					selectedUser={user}
					onSelected={setUser}
				/>
				{/* <div className="flex flex-col">
					{permissionCategories.map(({ category, label }) => (
						<PermissionSelector
							key={category}
							label={label}
							selectedPermission={permissions[category]}
							onSelect={(value) =>
								handlePermissionChange(category, value)
							}
						/>
					))}
				</div>
				<InviteUserButton
					onInvite={() => setUser(null)}
					user={user}
					posts={permissions.posts}
					messages={permissions.messages}
					profile={permissions.profile}
				/> */}
			</div>
		);

	return null;
};

export default InviteUserView;
