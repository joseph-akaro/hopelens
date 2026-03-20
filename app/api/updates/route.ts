import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const updates = await prisma.update.findMany({
    include: {
      project: true,
      country: true,
    },
    orderBy: { createdDate: "desc" },
  })

  return NextResponse.json(updates)
}

export async function POST(req: Request) {
  const body = await req.json()

  const update = await prisma.update.create({
    data: {
      title: body.title,
      body: body.body,
      projectId: body.projectId,
      projectTitle: body.projectTitle,
      countryId: body.countryId,
      countryName: body.countryName,
      status: body.status,
      author: body.author,
      attachments: body.attachments || [],
    },
  })

  return NextResponse.json(update)
}