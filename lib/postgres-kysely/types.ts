import {
	Generated,
	ColumnType,
	Selectable,
	Insertable,
	Updateable,
} from "kysely";

export interface UsersTable {
	id: Generated<number>;
	name: string;
	is_verified: boolean;
}

export type User = Selectable<UsersTable>;
export type NewUser = Insertable<UsersTable>;
export type UserUpdate = Updateable<UsersTable>;

type AccountManagerStatus = "pending" | "accepted" | "rejected";

type PermissionLevel = "none" | "read" | "write";

export interface AccountManagersTable {
	id: Generated<number>;
	account_user_id: number;
	manager_user_id: number;
	status: AccountManagerStatus;
	post_permission: PermissionLevel;
	message_permission: PermissionLevel;
	profile_permission: PermissionLevel;
	created_at: ColumnType<Date, never, never>;
	updated_at: ColumnType<Date, never, never>;
	expiry_at: ColumnType<Date, string | undefined, string | undefined>;
}

export type AccountManager = Selectable<AccountManagersTable>;
export type NewAccountManager = Insertable<AccountManagersTable>;
export type AccountManagerUpdate = Updateable<AccountManagersTable>;

export interface Database {
	users: UsersTable;
	account_managers: AccountManagersTable;
}
