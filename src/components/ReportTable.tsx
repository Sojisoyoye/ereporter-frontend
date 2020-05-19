import React from "react";
import useSortableData from "../state/hooks/useSortableData";

function ReportTable(props: any) {
  const { reports } = props;

  const { items, requestSort, sortConfig } = useSortableData(reports);

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="table-responsive-sm m-4 p-4">
      <table className="table pl-2 pr-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Period</th>
            <th scope="col">
              <button
                onClick={() => requestSort('assignee')}
                className={getClassNamesFor('assignee')}
              >
                Assignee
              </button>
            </th>
            <th scope="col">Type</th>
            <th scope="col">
              <button onClick={() => requestSort('year')}
                     className={getClassNamesFor('year')}

              >
                  Year
              </button>
            </th>
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
              {report.submitted ? <td>True</td> : <td>False</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;
