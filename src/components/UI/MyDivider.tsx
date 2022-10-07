import React, {FC} from "react";

import {Divider, DividerProps, styled} from "@mui/material";

interface MyDividerProps {
    type?: 'horizontal' | 'vertical'
}

const MyDivider: FC<MyDividerProps> = ({ type = "horizontal" }) => {
    const UpdatedDivider = styled(Divider)<DividerProps>(() => ({
        borderColor: '#414144'
    }));

    return (<UpdatedDivider orientation={type} />);
}

export default MyDivider;
