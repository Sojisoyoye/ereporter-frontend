import React from 'react';

export const IndividualCompany = (company: any) => {
    return (
        <div className="city" key={company._id}>
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
    )
}