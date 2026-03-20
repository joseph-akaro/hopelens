import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({
    where: { id: params.id },
    include: { updates: true },
  })

  return NextResponse.json(project)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()

  const updated = await prisma.project.update({
    where: { id: params.id },
    data: body,
  })

  return NextResponse.json(updated)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.project.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}