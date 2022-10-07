import React from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {MenuIcon} from "../UI/MenuButton";
import {ArrowButton} from "../UI/ArrowButton";
import {ArrowDown} from "../UI/ArrowDown";
import MyDivider from "../UI/MyDivider";

const TableHead = () => {
    return (
        // <AppBar position="static" sx={{ borderBottom: "1px solid #A1A1AA"}}>
            <Toolbar
                variant="dense"
                sx={{
                    background: '#27272A'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: '220px',
                        width: '100%',
                        paddingY: '6px',
                        borderRight: '1px solid #414144'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            flexGrow: 1,
                            color: '#A1A1AA'
                        }}
                    >
                        <Typography>Название проекта</Typography>
                        <Typography
                            sx={{
                                fontSize: '10px',
                                lineHeight: '12px'
                            }}
                        >Аббревиатура</Typography>
                    </Box>
                    <IconButton
                        sx={{
                            padding: '0 7px 0 0'
                        }}
                    >
                        <ArrowDown />
                    </IconButton>
                </Box>
                <Typography
                    sx={{
                        color: "#fff",
                        padding: "12px 15px",
                        borderRight: '1px solid #414144'
                    }}
                >Строительно-монтажные работы</Typography>
                <MyDivider />
            </Toolbar>
        // </AppBar>
    );
}

export default TableHead;
