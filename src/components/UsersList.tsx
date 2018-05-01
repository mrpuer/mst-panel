import * as React from "react";
import { observer, inject } from "mobx-react";
import { 
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  Avatar,
  TableBody,
  Button,
  Checkbox,
  Typography
} from 'material-ui';
import ModalUser from "./ModalUser";

const style = {
  marginTop: 30
}

const UsersList = observer(({store}) => {
  return (
    <div style={style}>
    <Typography variant="display1" gutterBottom align="center">
      Users List
    </Typography>
    <Paper>
      <Table className="users_table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell numeric>Age</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {store.usersList.users.map((user: any, key: string) => {
          const {name, nat, picture, email, dob } = user;
          return (
            <React.Fragment key={key}>
              {user.show && <ModalUser user={user}/>}
            <TableRow hover onClick={user.markShow}>
              <TableCell><Avatar alt={`${name.first} ${name.last}`} src={picture.thumbnail} /></TableCell>
              <TableCell>{`${name.first} ${name.last}`}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{dob}</TableCell>
              <TableCell numeric>{nat}</TableCell>
              <TableCell >
                <Checkbox
                  onChange={user.markActive}
                  checked={user.is_active}
                  value="checkedB"
                  color="primary"
                />
              </TableCell>
            </TableRow>
            </React.Fragment>
          )}
        )}
        
        <Button 
          variant="raised" 
          color="primary" 
          size="large" 
          className="fetch-users-button"
          onClick={store.loginSuccess}
        >Want more users?</Button>
        </TableBody>
      </Table>
    </Paper>
    </div>
  )}
)

export default inject("store")(UsersList);