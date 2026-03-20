import { prisma } from "@/lib/prisma"

export async function syncChampion(user: {
  id: string
  email: string
  name?: string
}) {
  const existing = await prisma.champion.findUnique({
    where: { authUserId: user.id },
  })

  if (existing) return existing

  // 🔥 Create new champion
  const champion = await prisma.champion.create({
    data: {
      authUserId: user.id,
      email: user.email,
      name: user.name || "New Champion",
    },
  })

  return champion
}