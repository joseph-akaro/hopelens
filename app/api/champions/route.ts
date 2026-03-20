import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const champions = await prisma.champion.findMany({
    include: { country: true },
  })

  return NextResponse.json(champions)
}

export async function POST(req: Request) {
  const body = await req.json()

  const champion = await prisma.champion.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      countryId: body.countryId,
      role: body.role,
    },
  })

  return NextResponse.json(champion)
}