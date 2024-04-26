import React from 'react'
import { Box } from '@mui/material'
import NavBar from './nav-bar'
import { Outlet } from 'react-router-dom'

export default function NavBarPage() {
    return (
        <Box display="flex" height="100dvh" width="100dvw">
            <Box flex={{ xs: 2 }}>
                <NavBar />
            </Box>
            <Box flex={{ xs: 10 }}>
                <Outlet />
            </Box>
        </Box>
    )
}
