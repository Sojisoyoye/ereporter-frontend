import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import api from '../api/api';

export const CompanyContext = React.createContext([]);

const GlobalContext = (props: any) => {
    const [companies, getCompanies] = useState([]);

    useEffect(
        () => {
            api
                .get('/companies')
                .then(response => {
                    getCompanies(response.data.data)
                })
                .catch(err => console.log(err))
        },
        [companies.length]
    )

    return (
        <CompanyContext.Provider value={companies}>
            {props.children}
        </CompanyContext.Provider>
    )
}

GlobalContext.propTypes = {
    children: PropTypes.node.isRequired
}

export const useCompanyValue = () => useContext(CompanyContext);

export default GlobalContext;
