import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from "./Pagination.module.css";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={(event: { selected: number }) =>
        onPageChange(event.selected + 1)
      }
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.link}
      activeClassName={css.active}
      previousClassName={css.prev}
      nextClassName={css.next}
    />
  );
};

export default Pagination;

