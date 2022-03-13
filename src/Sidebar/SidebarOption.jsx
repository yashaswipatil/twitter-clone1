
import { IconButton } from '@mui/material';
import React from 'react';
import "./SidebarOption.css";

//*MUI


function SidebarOption({text ,Icon ,  active}) {
  return (
    <div className={'sidebarOption  ${active &&  "sidebarOption--active"}'}>
    <IconButton>{Icon}</IconButton>
    <h2> {text} </h2>
    </div>
  );
}

export default SidebarOption;
