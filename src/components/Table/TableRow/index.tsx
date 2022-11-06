import React from 'react';
import classes from './index.module.scss';

interface TableRowProps {
  onRowClick: () => void;
  cells: string[];
  isSelected: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({ onRowClick, cells, isSelected }) => {
  return (
    <tr className={`${classes.row} ${isSelected ? classes.isSelected : ''}`} onClick={onRowClick}>
      {cells.map((cell, i) => (
        <td key={i}>{cell}</td>
      ))}
    </tr>
  );
};
