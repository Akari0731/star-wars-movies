import React from 'react';
import { SortOrder, TableHeaderProps } from '..';
import classes from './index.module.scss';
import Arrow from '../../../assets/images/arrow.svg';

export const TableHeader: React.FC<TableHeaderProps> = ({ text, sort, width, onClick }) => {
  return (
    <th
      style={{ width: width ? width : '' }}
      className={onClick ? classes.sortHeader : ''}
      onClick={() => (onClick ? onClick() : {})}>
      {text}
      {sort ? (
        <img
          src={Arrow}
          alt="Arrow"
          className={`${classes.arrow} ${sort === SortOrder.ASC ? classes.rotate : ''}`}
        />
      ) : null}
    </th>
  );
};
