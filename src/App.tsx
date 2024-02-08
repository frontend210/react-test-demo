import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './layouts/root.tsx'
import { Login } from './pages/login.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // loader: rootLoader,
        children: [
            {
                path: 'login',
                element: <Login />,
                // loader: teamLoader,
            },
        ],
    },
    {
        path: 'login',
        element: <Login />,
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
