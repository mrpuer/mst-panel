import * as React from "react";
import { observer, inject } from "mobx-react";
import { Drawer, List, Divider } from 'material-ui';

const Menu = () => 
    <Drawer
    variant="permanent"

    >
    <div className="main-menu" />
    <List>Item</List>
    <Divider />
    <List>Item</List>
    </Drawer>

export default Menu;