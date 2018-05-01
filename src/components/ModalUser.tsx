import * as React from "react";
import { observer, inject } from "mobx-react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui';
import { FormControl, Paper, TextField, Input, InputLabel, Select, MenuItem } from 'material-ui';

const Modal = observer(({user}) => {
  const handleClick = () => {
    console.log(user.titleInput.value);
    user.edit({
      gender: user.genderInput.value,
      name: {
        title: user.titleInput.value,
        first: user.firstNameInput.value,
        last: user.lastNameInput.value
      },
      email: user.emailInput.value,
      phone: user.phoneInput.value,
      nat: user.natInput.value
    })
    user.markShow();
  }
    return (
      <React.Fragment>
        <form>
        <Dialog
          open={user.show}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{`${user.name.first} ${user.name.last}`} Full Info</DialogTitle>
          <DialogContent>
            <DialogContentText>
          
          <FormControl className="edit-user-form">
        <TextField
          id="gender"
          label="User Gender"
          className="user-gender"
          margin="normal"
          defaultValue={user.gender}
          inputRef={input => (user.genderInput = input)}
        />
        <TextField
          id="title"
          name="title"
          type="text"
          label="User Tirle"
          className="user-title"
          margin="normal"
          defaultValue={user.name.title}
          inputRef={input => (user.titleInput = input)}
        />
          <TextField
          id="firstName"
          name="firstName"
          type="text"
          label="User First Name"
          className="user-first-name"
          margin="normal"
          defaultValue={user.name.first}
          inputRef={input => (user.firstNameInput = input)}
        />
          <TextField
          id="lastName"
          name="lastName"
          type="text"
          label="User Last Name"
          className="user-last-name"
          margin="normal"
          defaultValue={user.name.last}
          inputRef={input => (user.lastNameInput = input)}
        />
        <TextField
          id="email"
          name="email"
          label="User email"
          className="user-email"
          type="text"
          margin="normal"
          defaultValue={user.email}
          inputRef={input => (user.emailInput = input)}
        />
        <TextField
          id="phone"
          name="phone"
          label="User Phone"
          className="user-phone"
          type="text"
          margin="normal"
          defaultValue={user.phone}
          inputRef={input => (user.phoneInput = input)}
        />
        <TextField
          id="nat"
          name="nat"
          label="User Nationality"
          className="user-nat"
          type="text"
          margin="normal"
          defaultValue={user.nat}
          inputRef={input => (user.natInput = input)}
        />
          </FormControl>
          

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={user.markShow} color="primary" autoFocus>
              Cancel
            </Button>
            <Button onClick={handleClick} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        </form>
      </React.Fragment>
    );
})

export default inject('user')(Modal);