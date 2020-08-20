import React from "react";

import { Container, Button } from "./styles";

export default function Paginator({ pagination, onPageChange, neighbors = 1 }) {
  function handleClick(page) {
    if (onPageChange) onPageChange(page);
  }

  function renderButtons() {
    if (!pagination) return <></>;

    // count, page, total_pages, total_rows

    const { page, total_pages: lastPage } = pagination;

    const pages = lastPage;
    const targetSize = neighbors * 2; // quantos botões queremos a mais pra cada lado
    const middle = Math.floor(targetSize / 2);
    const paginatorArray = [];

    if (pages > 1) {
      let inicio = page > middle ? page - middle : 1;
      inicio = inicio > pages - targetSize ? pages - targetSize : inicio;
      inicio = inicio < 1 ? 1 : inicio;
      let t = inicio + targetSize;
      t = pages < t ? pages : t;
      for (let i = inicio; i <= t; i++) paginatorArray.push(i);
    }

    return (
      <Container>
        {paginatorArray.map((i) => (
          <Button active={page === i} key={i} onClick={() => handleClick(i)}>
            {i}
          </Button>
        ))}
      </Container>
    );
  }

  return <>{renderButtons()}</>;
}
