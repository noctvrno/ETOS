import React from 'react'
import { Box } from '@mui/material'
import NavBar from './nav-bar'

export default function NavBarPage(props) {
    return (
        <Box display="flex" height="100dvh" width="100dvw">
            <Box flex={{ xs: 2 }}>
                <NavBar />
            </Box>
            <Box flex={{ xs: 10 }}>
                {props.content} // TODO: Use ReactRouter.Outlet instead.
            </Box>
        </Box>
    )
}
