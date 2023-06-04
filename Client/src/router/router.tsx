
import { createBrowserRouter } from 'react-router-dom'
import PantallaPrincial from '../principal/PantallaPrincipal'
import { Layout } from '../layout/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<PantallaPrincial/>
            }
        ]
    }
])

export default router