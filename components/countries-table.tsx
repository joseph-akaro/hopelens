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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PenSquareIcon, Trash2, CheckCircle, Clock, PauseCircle  } from "lucide-react"
import { countryType } from "@/lib/types/country"

export const columns: ColumnDef<countryType>[] = [
{
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => {
    const status = row.getValue("status") as string;

    const statusMap = {
      Active: {
        icon: CheckCircle,
        className: "text-green-500",
        label: "Active",
      },
      Slow: {
        icon: Clock,
        className: "text-yellow-500",
        label: "Slow",
      },
      Ideal: {
        icon: PauseCircle,
        className: "text-gray-400",
        label: "Ideal",
      },
    };

    const current = statusMap[status as keyof typeof statusMap];

    if (!current) return null;

    const Icon = current.icon;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Icon className={`h-4 w-4 ml-2 ${current.className}`} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{current.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
},
{
    accessorKey: "name",
    header: "Country",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
    {
    accessorKey: "email",
    header: "Email",
    },
    {
    accessorKey: "phone",
    header: "Phone",
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

export function CountryTable<TData, TValue>({
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
