import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// GET all countries
export async function GET() {
  const countries = await prisma.country.findMany({
    include: { champion: true },
    orderBy: { createdDate: "desc" },
  })
  return NextResponse.json(countries)
}

// CREATE country
export async function POST(req: Request) {
  const body = await req.json()

  const country = await prisma.country.create({
    data: {
      name: body.name,
      region: body.region,
      contactEmail: body.contactEmail,
      contactPhone: body.contactPhone,
      championId: body.championId,
      createdBy: body.createdBy,
    },
  })

  return NextResponse.json(country)
}