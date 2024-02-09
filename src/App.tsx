import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '@layouts/main.tsx'
import Login from '@pages/login.tsx'
import { ThemeProvider } from '@mui/material'
import theme from '@styles/theme.ts'
import '@styles/App.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
        path: 'signup',
        element: <Login />,
    },
])

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
