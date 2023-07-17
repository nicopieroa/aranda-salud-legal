import { Route } from 'wouter'

import App from '../App'
import { AboutUsPage } from '../pages/aboutUsPage'
import { ServicesPage } from '../pages/servicesPage.jsx'

export function Router() {
    return (
        <div>
            <Route path='/' component={App} />
            <Route path='/quienes-somos' component={AboutUsPage} />
            <Route path='/nuestros-servicios' component={ServicesPage} />
        </div>
    )
}