import * as React from "react";
import { observer, inject } from "mobx-react";
import { FormControl, Paper, TextField, Button, Input, InputLabel, Select, MenuItem } from 'material-ui';

const AddUser = observer(({usersList}) => 
  <Paper>
        <h1>Add a New User</h1>
        <form onSubmit={e => {
            e.preventDefault();
            usersList.add({
              gender: usersList.users.genderInput.value,
              name: {
                title: usersList.users.titleInput.value,
                first: usersList.users.firstNameInput.value,
                last: usersList.users.lastNameInput.value
              },
              email: usersList.users.emailInput.value,
              phone: usersList.users.phoneInput.value,
              dob: usersList.users.dobInput.value,
              nat: usersList.users.natInput.value
            })
            usersList.users.genderInput.focus();
          }}>
          
          <FormControl className="new-user-form">
        <TextField
          id="gender"
          name="gender"
          type="text"
          label="User Gender"
          className="user-gender"
          margin="normal"
          inputRef={input => (usersList.users.genderInput = input)}
        />
        <TextField
          id="title"
          name="title"
          type="text"
          label="User Tirle"
          className="user-title"
          margin="normal"
          inputRef={input => (usersList.users.titleInput = input)}
        />
          <TextField
          id="firstName"
          name="firstName"
          type="text"
          label="User First Name"
          className="user-first-name"
          margin="normal"
          inputRef={input => (usersList.users.firstNameInput = input)}
        />
          <TextField
          id="lastName"
          name="lastName"
          type="text"
          label="User Last Name"
          className="user-last-name"
          margin="normal"
          inputRef={input => (usersList.users.lastNameInput = input)}
        />
        <TextField
          id="email"
          name="email"
          label="User email"
          className="user-email"
          type="text"
          margin="normal"
          inputRef={input => (usersList.users.emailInput = input)}
        />
        <TextField
          id="phone"
          name="phone"
          label="User Phone"
          className="user-phone"
          type="text"
          margin="normal"
          inputRef={input => (usersList.users.phoneInput = input)}
        />
        <TextField
          id="nat"
          name="nat"
          label="User Nationality"
          className="user-nat"
          type="text"
          margin="normal"
          inputRef={input => (usersList.users.natInput = input)}
        />
        <TextField
                id="dob"
                label="Birthday"
                type="date"
                defaultValue="2000-01-01"
                className="user-dob"
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={input => (usersList.users.dobInput = input)}
              />
        <Button type="submit" variant="raised" color="primary" size="large" className="new-user-button">
          ADD
        </Button>
          </FormControl>
          </form>
        </Paper>
)

export default inject("usersList")(AddUser);