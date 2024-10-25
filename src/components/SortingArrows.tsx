interface SortingArrowsInterface {
  direction?: "asc" | "desc";
}

const SortingArrows = ({ direction = undefined }: SortingArrowsInterface) => (
  <>
    {direction && direction === "asc" && (
      <svg
        aria-hidden="true"
        data-testid="asc-arrow"
        height="8"
        viewBox="0 0 19 12"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.2656 11.2002L9.26562 0.200195L0.265625 11.2002L18.2656 11.2002Z" />
      </svg>
    )}
    {direction && direction === "desc" && (
      <svg
        aria-hidden="true"
        data-testid="desc-arrow"
        height="8"
        viewBox="0 0 19 12"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.265626 0.200193L9.26562 11.2002L18.2656 0.200195L0.265626 0.200193Z" />
      </svg>
    )}
    {!direction && (
      <svg
        aria-hidden="true"
        data-testid="sorting-arrows"
        className="opacity-20"
        height="8"
        viewBox="0 0 19 27"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.265626 15.2002L9.26562 26.2002L18.2656 15.2002L0.265626 15.2002Z" />
        <path d="M18.2656 11.2002L9.26562 0.200195L0.265625 11.2002L18.2656 11.2002Z" />
      </svg>
    )}
  </>
);

export default SortingArrows;
