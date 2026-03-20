import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const country = await prisma.country.findUnique({
    where: { id: params.id },
    include: { champion: true, updates: true },
  })

  if (!country) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json(country)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()

  const updated = await prisma.country.update({
    where: { id: params.id },
    data: body,
  })

  return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.country.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}