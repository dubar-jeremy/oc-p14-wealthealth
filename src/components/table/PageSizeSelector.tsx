interface PageSizeSelectorProps {
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  options: number[];
}

const PageSizeSelector = ({
  pageSize,
  onPageSizeChange,
  options,
}: PageSizeSelectorProps) => {
  return (
    <div className="pagesize-selector-container">
      <span>Show </span>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <span> entries</span>
    </div>
  );
};

export default PageSizeSelector;
