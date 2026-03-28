import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json(
        [
            { active: 2, response: 2},
            { slow: 5},
            { ideal: 2},
        ]
    )
}