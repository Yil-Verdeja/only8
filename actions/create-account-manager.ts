"use server";
import db from "@/lib/postgres-kysely/db";
import {
	AccountManagerStatus,
	PermissionLevel,
} from "@/lib/postgres-kysely/types";

export async function createAccountManager(
	accountUserId: number,
	managerUserId: number,
	status: AccountManagerStatus,
	post: PermissionLevel,
	message: PermissionLevel,
	profile: PermissionLevel
) {
	try {
		const accountManager = await db
			.insertInto("account_managers")
			.values({
				account_user_id: accountUserId,
				manager_user_id: managerUserId,
				status: status,
				post_permission: post,
				message_permission: message,
				profile_permission: profile,
			})
			.returning("id")
			.executeTakeFirst();

		return accountManager;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
