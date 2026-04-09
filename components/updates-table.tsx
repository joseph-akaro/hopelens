 "use client"

 import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Button } from "./ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PenSquareIcon, RssIcon, Trash2 } from "lucide-react"
import { update } from "@/lib/types/update";

export const columns: ColumnDef<update>[] = [
{
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "project",
    header: "Project",
  },
    {
    accessorKey: "country",
    header: "Country",
    },
    {
    accessorKey: "deadline",
    header: "Deadline",
    },
    {
      accessorKey: "status",
      header: "Status"
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const country = row.original;
    
          return (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer w-6 h-6"
                onClick={() => {
                  console.log("Edit user:", country);
                }}
              >
                <PenSquareIcon size={10}/>
              </Button>
    
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer w-6 h-6"
                onClick={() => {
                  console.log("Delete user:", country);
                }}
              >
                <Trash2 size={10}  className="text-red-500"/>
              </Button>
            </div>
          );
        },
},
]

// DataTable Props
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function UpdateTable<TData, TValue>({
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
              <TableCell colSpan={columns.length} className="flex flex-col gap-2 h-24 w-full text-center items-center align-middle justify-center">
                <div className="flex flex-col items-center w-full">
                    <RssIcon className="text-muted-foreground" />
                    <span className="text-muted-foreground">No Updates</span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
