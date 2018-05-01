import * as React from "react";
import { observer, inject } from "mobx-react";
import { List, ListItem, ListItemText, Divider, withStyles } from 'material-ui';

const styles = (theme: any) => ({
    admin_menu: {marginTop: 70}
})
const Menu = (props: any) => 
    <div className={props.classes.admin_menu}>
        <List component="nav">
        <ListItem button>
        <ListItemText primary="Users" />
        </ListItem>
        <Divider />
        <ListItem button divider>
        <ListItemText secondary="Add Users" />
        </ListItem>
        <ListItem button>
        <ListItemText secondary="Stats" />
        </ListItem>
        <Divider light />
        <ListItem button>
        <ListItemText secondary="Logout" />
        </ListItem>
        </List>
    </div>

export default withStyles(styles)(Menu);