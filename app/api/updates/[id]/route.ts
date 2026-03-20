import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const update = await prisma.update.findUnique({
    where: { id: params.id },
    include: { project: true, country: true },
  })

  return NextResponse.json(update)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()

  const updated = await prisma.update.update({
    where: { id: params.id },
    data: body,
  })

  return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.update.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}