import React from 'react';
import { Header } from '../layouts/Header/Header';
import CompanyList from '../companyList/CompanyList';

const HomePage = () => {

    return (
        <section>
            <Header />
            <main className="main">
                <div className="card-container">
                    <CompanyList />
                </div>
            </main>
        </section>
    );
}

export default HomePage;
