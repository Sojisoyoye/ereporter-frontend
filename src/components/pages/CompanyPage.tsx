import React from 'react';
import useDataFromApi from '../../state/hooks/useDataFromApi';
import { Header } from '../layouts/Header/Header';
import ReportTable from '../ReportTable';
import { IndividualCompany } from '../IndividualCompany';

const CompanyPage = (props: any) => {
    const companyId = props.match.params.companyId;
    const { data } = useDataFromApi(`companies/${companyId}`);

    return (
        <section>
            <Header />
            <main className="main">
                {data && data.map((company: any, index) => (
                    <div key={index}>
                        <div className="card-container" key={company._id}>
                            <IndividualCompany company={company} />
                        </div>
                        <h4 className="ml-4 pt-4">{company.name} reports for 2020</h4>
                        <ReportTable reports={company.reports}/>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default CompanyPage;
