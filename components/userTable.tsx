
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontalIcon } from "lucide-react"



/* ---------------- SKELETON ---------------- */

export function UsersSkeleton() {
  return (
    <div className="p-6 space-y-4">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {["Name", "Email", "Role", "Last Activity"].map((h) => (
                <TableHead key={h}>
                  <Skeleton className="h-4 w-[100px]" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className="h-4 w-[140px]" /></TableCell>
                <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
                <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/* ---------------- TABLE ---------------- */

type UserType = {
    id: string;
    name: string | null;
    email: string;
    phone: number | null;
    role: "partner" | "champion" | "admin" | null;
    approved: boolean | null;
    lastActivity: Date | null;
    countryId: number | null;
    createdAt: Date;
    lastActivityFormatted: string;
}

function UsersTable({ users }: { users: UserType[] }) {
  return (
    <div className="p-6">
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <Table className="p-1">
          <TableHeader className="text-muted-foreground">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Last Activity</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-muted-foreground">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="capitalize">{user.role}</TableCell>
                  <TableCell>{user.lastActivityFormatted}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost" size="default" className="size-8">
                            <MoreHorizontalIcon />
                            <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/* ---------------- CONTENT ---------------- */

// demoUsers.ts

export const demoUsers: UserType[] = [
  {
    id: "1",
    name: "Joseph Akaro",
    email: "joseph@example.com",
    phone: 256701234567,
    role: "champion",
    approved: true,
    lastActivity: new Date("2026-03-20T10:00:00Z"),
    countryId: 1,
    createdAt: new Date("2025-12-01T08:30:00Z"),
    lastActivityFormatted: "7 days ago",
  },
  {
    id: "2",
    name: "Alice Mwangi",
    email: "alice@example.com",
    phone: null,
    role: "partner",
    approved: false,
    lastActivity: new Date("2026-03-25T14:15:00Z"),
    countryId: 2,
    createdAt: new Date("2025-11-15T12:00:00Z"),
    lastActivityFormatted: "2 days ago",
  },
  {
    id: "3",
    name: null,
    email: "unknown@example.com",
    phone: null,
    role: null,
    approved: null,
    lastActivity: null,
    countryId: null,
    createdAt: new Date("2026-01-10T09:00:00Z"),
    lastActivityFormatted: "Never",
  },
];
/* ---------------- PAGE ---------------- */

export default function Users() {

  return (
    <div className="space-y-2">
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <p className="text-sm text-muted-foreground">
          Manage research champions and administrators
        </p>
      </div>

      <UsersTable users={demoUsers} />
    </div>
  )
}