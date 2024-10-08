import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const users = await sql`SELECT * FROM Users;`;
	return NextResponse.json({ users }, { status: 200 });
}
