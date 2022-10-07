import React from "react";
import { Box, IconButton, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ArrowDown } from "../UI/ArrowDown";
import MyDivider from "../UI/MyDivider";
import { MyListIcon } from "../UI/MyListIcon";

const projects = [
    'По проекту', 'Объекты', 'Объекты', 'МТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения',
    'Бюджет', 'Финансирование', 'Панорамы', 'Камеры', 'Поручения', 'Контрагенты'
];

const Sidebar = () => {
    return (
    <Box
        sx={{
            maxWidth: '246px',
            background: '#27272A',
            width: '100%',
            height: 'calc(100vh - 48px)',
            color: 'white'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                padding: '6px 6px 6px 20px'
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
        <MyDivider />
        <List sx={{
            padding: 0
        }}>
            {
                projects.map((project) => (
                    <ListItem
                        dense={true}
                        classes={project === 'СМР' && 'Mui-selected'}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <MyListIcon />
                            </ListItemIcon>
                            <ListItemText primary={project} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
    </Box>
    );
}

export default Sidebar;
