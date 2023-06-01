import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import { getRestorants } from "../../Redux/actions";

export default function PaginationRounded({ filters}) {
  const amountPages = useSelector((state) => state.AmountPage)
  const dispatch = useDispatch()

const handleChange = (e,page) => {
  // TODO cambiar country x location o al reves
  dispatch(getRestorants({
    page, 
    city: filters.city, 
    order: filters.order, 
    rating: filters.rating,
    tag: filters.tag
  }))
}

  return (
      <Pagination 
        count={Number(amountPages)} 
        variant="outlined" 
        onChange={handleChange} 
        shape="rounded" 
      />
  );
}