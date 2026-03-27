"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { approveUser } from "@/lib/actions/userActions";

type User = {
  id: string;
  name: string | null;
  email: string;
  phone: number | null;
  approved: boolean;
  lastActivity: string | null;
  country?: {
    name: string;
  } | null;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name ?? "—",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => row.original.phone ?? "—",
  },
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => row.original.country?.name ?? "—",
  },
  {
    accessorKey: "lastActivity",
    header: "Last Activity",
    cell: ({ row }) =>
      row.original.lastActivity
        ? new Date(row.original.lastActivity).toLocaleDateString()
        : "—",
  },
  {
    accessorKey: "approved",
    header: "Status",
    cell: ({ row }) =>
      row.original.approved ? (
        <span className="text-green-500">Approved</span>
      ) : (
        <span className="text-orange-400">Pending</span>
      ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex gap-2">
          {!user.approved && (
            <Button
              size="sm"
              onClick={() => approveUser(user.id)}
            >
              Approve
            </Button>
          )}

          <Button size="sm" variant="outline">
            Edit
          </Button>

          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </div>
      );
    },
  },
];

export function UsersTable({ data }: { data: User[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-2xl border p-4 bg-slate-950">
      <table className="w-full text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-left p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}