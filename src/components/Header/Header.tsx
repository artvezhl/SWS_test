import React from "react";
import {AppBar, Toolbar, IconButton, Link, LinkProps, Avatar, Box, Typography} from "@mui/material";
import { MenuIcon } from "../UI/MenuButton";
import { ArrowButton } from "../UI/ArrowButton";
import styled from "@emotion/styled";
import {ArrowDown} from "../UI/ArrowDown";
import profilePhoto from "../../images/profile.png";

const HeaderLink = styled(Link)<LinkProps>(() => ({
    marginLeft: 28,
    color: "#A1A1AA",
    cursor: "pointer",
    textDecoration: "none",
    border: "2px transparent solid",
    lineHeight: "44px",
    '&:hover': {
        color: "#FFF",
        borderBottom: "2px #fff solid"
    },
    '&.Mui-active': {
        color: "#FFF",
        borderBottom: "2px #fff solid"
    }
}));

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex'
                    }}
                >
                    <IconButton
                        sx={{
                            paddingLeft: 0
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowButton />
                    </IconButton>
                    <HeaderLink className="Mui-active">Просмотр</HeaderLink>
                    <HeaderLink>Управление</HeaderLink>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Avatar alt="Антон петров" src={profilePhoto} sx={{ width: 28, height: 28, marginRight: "8px" }} />
                    <Typography>Антон петров</Typography>
                    <IconButton>
                        <ArrowDown />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
