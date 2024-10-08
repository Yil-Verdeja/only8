enum AccountManagerStatus {
	ACCEPTED = "accepted",
	REJECTED = "rejected",
	PENDING = "pending",
}

type PermissionType = "read" | "write" | null;

export default interface AccountManager {
	id: string;
	account_user_id: string;
	manager_user_id: string;
	status: AccountManagerStatus;
	post_permission: PermissionType;
	message_permission: PermissionType;
	profile_permission: PermissionType;
	expiry_at?: Date;
	created_at: Date;
	updated_at: Date;
}
