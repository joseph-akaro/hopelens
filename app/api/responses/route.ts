import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([
    { status: "active", responses: 12 },
    { status: "slow", responses: 5 },
    { status: "Inactive", responses: 3 },
  ])
}