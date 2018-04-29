import * as React from "react";
import { observer, inject } from "mobx-react";
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';

const UsersList = observer(({usersList}) => {
  const fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=10&inc=gender,name,email,dob,phone,picture,nat")
    .then(response => response.json())
    .then(data => {
      usersList.fetch(data.results);
    }).catch(error => console.log(error));
  }
  return (
    <Paper>
        <h1>Users List</h1>
        <List>
        {usersList.users.map((user: any, key: string) => {
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
          onClick={fetchUsers}
        >Want more users?</Button>
    </Paper>
  )}
)

export default inject("usersList")(UsersList);