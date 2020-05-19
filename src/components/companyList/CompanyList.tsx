import React from "react";
import { useCompanyValue } from "../../state/GlobalContext";
import { useHistory } from "react-router-dom";
import { IndividualCompany } from "../IndividualCompany";

const CompanyList = () => {
  const companies = useCompanyValue();
  const history = useHistory();

  return (
    <>
      {companies &&
        companies.map((company: any, index) => (
          <div key={index}>
            <IndividualCompany
              company={company}
              clickHandler={() => {
                history.push(`/${company._id}`);
              }}
            />
          </div>
        ))}
    </>
  );
};

export default CompanyList;
