interface PaginationControlsProps {
  pageIndex: number;
  pageSize: number;
  rowCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  setPageIndex: (index: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const PaginationControls = ({
  pageIndex,
  pageSize,
  rowCount,
  canPreviousPage,
  canNextPage,
  setPageIndex,
  previousPage,
  nextPage,
}: PaginationControlsProps) => {
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, rowCount);

  return (
    <>
      <div>
        <span>{`Showing ${startRow} to ${endRow} of ${rowCount.toLocaleString()} entries`}</span>
      </div>
      <div className="pagination-controls">
        <button
          className="border rounded p-1"
          onClick={() => setPageIndex(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => setPageIndex(Math.ceil(rowCount / pageSize) - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default PaginationControls;
