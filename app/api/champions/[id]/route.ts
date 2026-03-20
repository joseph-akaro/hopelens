import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const champion = await prisma.champion.findUnique({
    where: { id: params.id },
    include: { country: true },
  })

  return NextResponse.json(champion)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()

  const updated = await prisma.champion.update({
    where: { id: params.id },
    data: body,
  })

  return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.champion.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}