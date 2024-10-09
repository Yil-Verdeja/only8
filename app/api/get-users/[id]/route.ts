import db from "@/lib/postgres-kysely/db";
import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const user = await db
			.selectFrom("users")
			.selectAll()
			.where("id", "=", parseInt(params.id))
			.execute();
		if (user.length === 0) throw new Error("User does not exist");
		return NextResponse.json(user[0], { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(error, { status: 500 });
	}
}
