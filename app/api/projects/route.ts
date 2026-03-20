import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const projects = await prisma.project.findMany({
    include: { updates: true },
    orderBy: { createdDate: "desc" },
  })

  return NextResponse.json(projects)
}

export async function POST(req: Request) {
  const body = await req.json()

  const project = await prisma.project.create({
    data: {
      title: body.title,
      description: body.description,
      shortDescription: body.shortDescription,
      imageUrl: body.imageUrl,
      status: body.status,
      author: body.author,
      countries: body.countries || [],
    },
  })

  return NextResponse.json(project)
}