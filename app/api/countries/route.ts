import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([
    { name: "active", responses: 12 },
    { status: "slow", responses: 5 },
    { status: "ideal", responses: 3 },
  ])
}