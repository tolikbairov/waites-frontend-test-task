import React from "react";
import styles from "./Pagination.module.css";
export default function Pagination({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination__container}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              href="#0"
              className="page-link"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
