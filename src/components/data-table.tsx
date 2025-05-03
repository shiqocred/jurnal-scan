"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { id: string | number }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const router = useRouter();

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-slate-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
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
                onClick={() => {
                  table.resetRowSelection(); // Unselect semua
                  row.toggleSelected(true); // Select row yang diklik
                }}
                onDoubleClick={() => {
                  const id = row.original.id; // <-- asumsi kamu punya field 'id' di datanya
                  router.push(`/book/${id}`);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// interface DataTableHeaderProps<TData, TValue> {
//   headerGroups: HeaderGroup<TData>[];
// }

// export function DataTableHeader<TData, TValue>({
//   headerGroups,
// }: DataTableHeaderProps<TData, TValue>) {
//   return (
//     <TableHeader className="sticky top-0 z-10 bg-slate-100">
//       {headerGroups.map((headerGroup) => (
//         <TableRow key={headerGroup.id}>
//           {headerGroup.headers.map((header) => (
//             <TableHead key={header.id}>
//               {header.isPlaceholder
//                 ? null
//                 : flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//             </TableHead>
//           ))}
//         </TableRow>
//       ))}
//     </TableHeader>
//   );
// }

// interface DataTableBodyProps<TData> {
//   rows: Row<TData>[];
//   columnLength: number;
// }

// export function DataTableBody<TData extends { id: string | number }>({
//   rows,
//   columnLength,
// }: DataTableBodyProps<TData>) {
//   const router = useRouter();

//   return (
//     <TableBody>
//       {rows.length ? (
//         rows.map((row) => (
//           <TableRow
//             key={row.id}
//             data-state={row.getIsSelected() && "selected"}
//             onClick={() => {
//               row.toggleSelected(true);
//             }}
//             onDoubleClick={() => {
//               router.push(`/book/${row.original.id}`);
//             }}
//           >
//             {row.getVisibleCells().map((cell) => (
//               <TableCell key={cell.id}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </TableCell>
//             ))}
//           </TableRow>
//         ))
//       ) : (
//         <TableRow>
//           <TableCell colSpan={columnLength} className="h-24 text-center">
//             No results.
//           </TableCell>
//         </TableRow>
//       )}
//     </TableBody>
//   );
// }
