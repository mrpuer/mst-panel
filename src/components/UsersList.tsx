import * as React from "react";
import { observer, inject } from "mobx-react";
import { ListItem, ListItemSecondaryAction, ListItemText, Paper, List, Avatar, Switch, Button } from 'material-ui';

const UsersList = observer(({store}) => {
  return (
    <Paper>
        <h1>Users List</h1>
        <List>
        {store.usersList.users.map((user: any, key: string) => {
          const {name, nat, picture} = user;
          return (
            <ListItem key={key} dense button className="user-list">
            <Avatar alt={`${name.first} ${name.last}`} src={picture.thumbnail} />
            <ListItemText primary={`${name.first} ${name.last}`} />
            <ListItemText primary={user.nat} />
            <ListItemSecondaryAction>
              <Switch
                onChange={user.markActive}
                checked={user.is_active}
              />
            </ListItemSecondaryAction>
            </ListItem>
          )}
        )}
        </List>
        <Button 
          variant="raised" 
          color="primary" 
          size="large" 
          className="fetch-users-button"
          onClick={store.loginSuccess}
        >Want more users?</Button>
    </Paper>
  )}
)

export default inject("store")(UsersList);