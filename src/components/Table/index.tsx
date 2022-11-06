import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import './index.module.scss';

interface TableProps<T> {
  data: T[];
  headers: TableHeaderProps[];
  rowProps: TableRowProps<T>;
}

export interface TableRowProps<T> {
  isSelected: (rowData: T) => boolean;
  getCells: (rowData: T) => string[];
  onRowClick: (rowData: T) => void;
}

export interface TableHeaderProps {
  text: string;
  sort?: SortOrder;
  width?: string;
  onClick?: () => void;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export function Table<T>({ headers, data, rowProps }: TableProps<T>) {
  return (
    <div>
      <table>
        <thead>
          <tr data-testid="table-header-tr">
            {headers.map((header, i) => (
              <TableHeader key={`header${i}`} {...header} />
            ))}
          </tr>
        </thead>
        <tbody data-testid="table-body">
          {data.map((d, i) => {
            const onRowClick = () => rowProps.onRowClick(d);
            const cells = rowProps.getCells(d);
            const isSelected = rowProps.isSelected(d);

            return (
              <TableRow
                key={`row${i}`}
                isSelected={isSelected}
                cells={cells}
                onRowClick={onRowClick}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
