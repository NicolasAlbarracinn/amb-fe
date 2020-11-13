import React from 'react';
import { useTable } from 'react-table';
import classnames from 'classnames';

interface IColumns {
  Header: string;
  accessor: string;
}

interface ITable {
  columns: IColumns[];
  data: any;
}

const Table = ({ columns, data }: ITable) => {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="ReactTable -striped -highlight">
      <table {...getTableProps()} className="ReactTable -striped -highlight">
        <thead className="rt-thead -header">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
              {headerGroup.headers.map((column, key) => (
                <th
                  className={classnames('rt-th rt-resizable-header', {
                    '-cursor-pointer': headerGroup.headers.length - 1 !== key,
                    '-sort-asc': column.isSorted && !column.isSortedDesc,
                    '-sort-desc': column.isSorted && column.isSortedDesc,
                  })}
                >
                  <div className="rt-resizable-header-content">{column.render('Header')}</div>
                  {/* Render the columns filter UI */}
                  <div>
                    {headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render('Filter') : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="rt-tbody">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={classnames('rt-tr', { ' -odd': i % 2 === 0 }, { ' -even': i % 2 === 1 })}
              >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="rt-td">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
