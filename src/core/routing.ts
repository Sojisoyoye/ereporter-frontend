import HomePage from '../components/pages/HomePage';
import CompanyPage from '../components/pages/CompanyPage';

const routes = {
    default: [
        {
            exact: true,
            path: '/',
            component: HomePage
        },
        {
            exact: true,
            path: '/:companyId',
            component: CompanyPage
        },
    ]
}

export default routes;