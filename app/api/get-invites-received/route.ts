import db from "@/lib/postgres-kysely/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	let userId: string | number | null = searchParams.get("userId");

	try {
		if (!userId) throw new Error("User Id is required");
		userId = parseInt(userId);
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	const accountManagers = await db
		.selectFrom("account_managers")
		.selectAll()
		.where("manager_user_id", "=", userId)
		.execute();

	return NextResponse.json({ accountManagers }, { status: 200 });
}
