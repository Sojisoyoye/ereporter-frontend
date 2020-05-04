import React, { useState, useMemo } from 'react';


const useSortableData = (items: any, config = { key: '', direction: '' }) => {
    const [sortConfig, setSortConfig] = useState(config);
  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig.key && sortConfig.direction === '') {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key: any) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };  


function ReportTable(props: any) {
    const { reports } = props;
    const { items, requestSort, sortConfig } = useSortableData(reports);

    const getClassNamesFor = (submitted: any) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === submitted ? sortConfig.direction : undefined;
      };
  

    return (
        <div className="table-responsive-sm m-4 p-4">
                            <table className="table pl-2 pr-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Period</th>
                                        <th scope="col"
                                        >
                                            <button  
                                            onClick={() => requestSort('assignee')}
                                            className={getClassNamesFor('assignee')}
                                            >
                                            Assignee
                                            </button>
                                        </th>
                                        <th scope="col">Type</th>
                                        <th scope="col"
                                        onClick={() => requestSort('year')}
                                        >Year</th>
                                        <th scope="col">
                                            <button  
                                            onClick={() => requestSort('submitted')}
                                            className={getClassNamesFor('submitted')}
                                            >
                                            Submitted
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((report: any) => (
                                        <tr key={report._id}>
                                            <th scope="row">{report.name}</th>
                                            <td>{report.period}</td>
                                            <td>{report.assignee}</td>
                                            <td>{report.type}</td>
                                            <td>{report.year}</td>
                                            {report.submitted ? 
                                            <td>True</td>: 
                                            <td>False</td>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
    );
}

export default ReportTable;