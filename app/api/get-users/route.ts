import db from "@/lib/postgres-kysely/db";
import { NextResponse } from "next/server";

export async function GET() {
	const users = await db.selectFrom("users").selectAll().execute();
	return NextResponse.json(users, { status: 200 });
}
