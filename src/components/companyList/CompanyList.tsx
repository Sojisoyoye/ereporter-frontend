import React from 'react';
import { useCompanyValue } from '../../state/GlobalContext';
import { useHistory } from 'react-router-dom';

const CompanyList = () => {
    const companies = useCompanyValue();
    const history = useHistory();

    return (
        <>
            {companies && companies.map((company: any, index) => (
                // <div>
                //     <IndividualCompany company={company} /> 
                // </div>
                <div
                    className="city"
                    key={index}
                    onClick={() => {
                        history.push(`/${company._id}`)
                    }}
                >
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
                        <span>Reports:</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CompanyList;

