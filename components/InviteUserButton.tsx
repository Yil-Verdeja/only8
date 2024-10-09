import { useState } from "react";
import User from "../entities/User";
import { permissionDescriptions, PermissionType } from "./PermissionSelector";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/Dialog";
import { Button } from "./ui/Button";
import { createAccountManager } from "@/actions/create-account-manager";

interface Invitation {
	user: User | null;
	posts: PermissionType;
	messages: PermissionType;
	profile: PermissionType;
}

interface Props extends Invitation {
	onInvite: () => void;
}

const InviteUserButton = ({
	user,
	posts,
	messages,
	profile,
	onInvite,
}: Props) => {
	const [invitation, setInvitation] = useState<Invitation | null>(null);

	const handleInvite = async () => {
		console.log("Send invite");
		const accountManager = await createAccountManager(
			1,
			2,
			"pending",
			"none",
			"none",
			"none"
		);
		console.log(accountManager);
		onInvite();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					onClick={() => {
						if (invitation) setInvitation(null);
						if (user)
							setInvitation({
								user,
								posts,
								messages,
								profile,
							});
					}}
					disabled={user === null}
				>
					Invite
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Confirm Invitation</DialogTitle>
					<DialogDescription>
						Are you sure this is the user you want to manage your
						accounts? Please review the user and their permissions
					</DialogDescription>
				</DialogHeader>
				<div>
					<div>
						<h3>User:</h3>
						<p>{invitation?.user?.name}</p>
					</div>
					<div>
						<h3>Permissions:</h3>
						<p>
							<span className="font-bold">Posts: </span>
							{invitation &&
								permissionDescriptions[invitation?.posts]}
						</p>
						<p>
							<span className="font-bold">Messages: </span>
							{invitation &&
								permissionDescriptions[invitation?.messages]}
						</p>
						<p>
							<span className="font-bold">Profile: </span>
							{invitation &&
								permissionDescriptions[invitation?.profile]}
						</p>
					</div>
				</div>
				<DialogFooter className="sm:justify-start">
					<div className="flex flex-row gap-4">
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Close
							</Button>
						</DialogClose>
						<DialogClose asChild>
							<Button
								type="button"
								variant="default"
								onClick={() => handleInvite()}
							>
								Confirm
							</Button>
						</DialogClose>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default InviteUserButton;
