
import { createBrowserRouter } from 'react-router-dom'
import PantallaPrincial from '../pages/PantallaPrincipal'
import { Layout } from '../layout/Layout'
import Pseudocodigo from '../pages/Pseudocodigo'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:<PantallaPrincial/>
            },
            {
                path: '/pseudocodigo',
                element:<Pseudocodigo/>
            }
        ]
    }
])

export default router