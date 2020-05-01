import React from 'react';
import useDataFromApi from '../../state/hooks/useDataFromApi';
import { Header } from '../layouts/Header/Header';
import { IndividualCompany } from '../IndividualCompany';

const CompanyPage = (props: any) => {
    const companyId = props.match.params.companyId
    const { data } = useDataFromApi(`companies/${companyId}`)

    return (
        <section>
            <Header />
            <main className="main">
                {data && data.map((company: any, index) => (
                    <div key={index}>
                        <div className="card-container" key={company._id}>
                            {/* <IndividualCompany company={company} /> */}
                            <div className="city">
                                <div className="city-head">
                                    <h3>{company.name}</h3>
                                </div>
                                <div className="contact pl-4">
                                    <span>{company.email}</span>
                                    <div>{company.address}</div>
                                </div>
                                <div className="description pl-4">
                                    <p>{company.description} </p>
                                </div>
                                <div className="pl-4 pb-2">
                                    <span>Reports: {company.reports.length}</span>
                                </div>
                            </div>
                        </div>

                        <h4 className="ml-4 pt-4">{company.name} reports for 2020</h4>

                        <div className="table-responsive-sm m-4 p-4">
                            <table className="table pl-2 pr-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Period</th>
                                        <th scope="col">Assignee</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Submitted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {company.reports.map((report: any) => (
                                        <tr key={report._id}>
                                            <th scope="row">{report.name}</th>
                                            <td>{report.period}</td>
                                            <td>{report.assignee}</td>
                                            <td>{report.type}</td>
                                            <td>{report.year}</td>
                                            <td>{report.submitted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default CompanyPage;
