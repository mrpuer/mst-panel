import * as React from "react";
import { observer, inject } from "mobx-react";
import { Grid, Paper, Typography, TextField, Button, FormControl } from 'material-ui';

import Modal from "./Modal";

const style = {
  Paper: { marginTop: 30 },
}

const Login = observer(({data}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    (data.loginInput.value === process.env.ADMIN_LOGIN && data.passwordInput.value === process.env.ADMIN_PASSWORD) 
    ? data.loginSuccess() : data.showError();
  }

  return (
    <Grid container className="login-container">
    {data.isError && <Modal data={data} />}
      <Grid item sm={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item sm={6}>
            <Paper className="test" elevation={4} style={style.Paper}>
              <Typography variant="headline" component="h3" align="center">
                Please, login first...
              </Typography>
              <form className="login-form" onSubmit={handleSubmit}>
                <FormControl className="new-user-form">
                  <TextField
                    required
                    id="login"
                    label="Login"
                    margin="normal"
                    inputRef={input => data.loginInput = input}
                  />
                  <TextField
                    required
                    id="password"
                    label="Password"
                    margin="normal"
                    type="password"
                    inputRef={input => data.passwordInput = input}
                  />
                  <Button variant="raised" color="secondary" className="login-button" type="submit">
                    Let's Go!
                  </Button>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
});

export default inject('data')(Login);