"use client"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { UserDetail } from '@/lib/types/user'
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { PenSquareIcon, Trash2 } from "lucide-react";


export const columns: ColumnDef<UserDetail>[] = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) =>
          row.toggleSelected(!!value)
        }
      />
    ),
  },
  {
    id: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original;

      const initials =
        user.name
          ?.split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase() || "U";

      const now = Date.now();
      const last = user.lastActivity
        ? new Date(user.lastActivity).getTime()
        : 0;

      let status: "active" | "idle" | "offline" = "offline";

      if (last > now - 1000 * 60 * 5) {
        status = "active";
      } else if (last > now - 1000 * 60 * 60) {
        status = "idle";
      }
      

      const statusStyles = {
        active: "bg-green-500 soft-pulse",
        idle: "bg-yellow-400",
        offline: "bg-gray-400",
      };

      const statusLabel = {
        active: "Active now",
        idle: "Idle",
        offline: user.lastActivity
          ? `Last seen ${new Date(user.lastActivity).toLocaleString()}`
          : "Offline",
      };

      return (
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="relative cursor-pointer">
                  <Avatar>
                    <AvatarImage src={user.image ?? ""} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>

                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${statusStyles[status]}`}
                  />
                </div>
              </TooltipTrigger>

              <TooltipContent side="top">
                <p className="text-xs">{statusLabel[status]}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {user.name}
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "approved",
    header: "Approved",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <Select
          defaultValue={user.approved ? "Yes" : "No"}
          onValueChange={async (value) => {
              const isApproved = value === "Yes";


              //Pending Server action mount

            }}
         >
          <SelectTrigger
            className={`w-[100px] h-8 text-xs ${
              user.approved ? "border-green-500 bg-green-50 text-green-500" : "border-red-500 bg-red-50 text-red-500"
            }`}
          >
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer w-6 h-6"
            onClick={() => {
              console.log("Edit user:", user);
            }}
          >
            <PenSquareIcon size={10}/>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer w-6 h-6"
            onClick={() => {
              console.log("Delete user:", user);
            }}
          >
            <Trash2 size={10}  className="text-red-500"/>
          </Button>
        </div>
      );
    },
  },
];

// DataTable Props
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function ChampionTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
 
  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-semibold text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-left text-sm font-medium text-muted-foreground">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No Users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
