enum AccountManagerStatus {
	ACCEPTED = "accepted",
	REJECTED = "rejected",
	PENDING = "pending",
}

type PermissionType = "none" | "read" | "write";

export default interface AccountManager {
	id: number;
	account_user_id: number;
	manager_user_id: number;
	status: AccountManagerStatus;
	post_permission: PermissionType;
	message_permission: PermissionType;
	profile_permission: PermissionType;
	expiry_at?: Date;
	created_at: Date;
	updated_at: Date;
}
