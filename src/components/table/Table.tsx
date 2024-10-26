import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import SortingArrows from "../SortingArrows.tsx";
import * as React from "react";
import { useState } from "react";
import PageSizeSelector from "./PageSizeSelector.tsx";
import PaginationControls from "./PaginationControls.tsx";
import Searchbar from "./SearchBar.tsx";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, string>[];
  paginate?: boolean;
  defaultSortingState?: SortingState;
}

const Table = <T,>({
  data,
  columns,
  paginate,
  defaultSortingState = [],
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>(
    defaultSortingState ?? [],
  );

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination: paginate ? pagination : undefined,
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: paginate ? getPaginationRowModel() : undefined,
    onPaginationChange: paginate ? setPagination : undefined,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
  });

  return (
    <div className="table-container">
      <div className="table-header">
        {paginate && (
          <PageSizeSelector
            pageSize={table.getState().pagination.pageSize}
            onPageSizeChange={table.setPageSize}
            options={[10, 20]}
          />
        )}
        <Searchbar
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="Search.."
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : header.column.getCanSort() ? (
                    <div onClick={header.column.getToggleSortingHandler()}>
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </span>
                      <span>
                        {!header.column.getIsSorted() && <SortingArrows />}
                        {{
                          asc: <SortingArrows direction="asc" />,
                          desc: <SortingArrows direction="desc" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </span>
                    </div>
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {paginate && (
        <div className="table-pagination">
          <PaginationControls
            pageIndex={table.getState().pagination.pageIndex}
            pageSize={table.getState().pagination.pageSize}
            rowCount={table.getRowCount()}
            canPreviousPage={table.getCanPreviousPage()}
            canNextPage={table.getCanNextPage()}
            setPageIndex={table.setPageIndex}
            previousPage={table.previousPage}
            nextPage={table.nextPage}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
