import * as React from "react";
import { observer, inject } from "mobx-react";
import { Grid, Paper, Typography, TextField, Button, FormControl } from 'material-ui';

const style = {
  Paper: { marginTop: 30 },
}

const Login = observer(({data}) => {
  console.log(data);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    (data.loginInput.value === process.env.ADMIN_LOGIN && data.passwordInput.value === process.env.ADMIN_PASSWORD) 
    ? data.isLogged = true : alert('Error');
  }
  return (
    <Grid container className="login-container">
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
                    inputRef={input => (data.loginInput = input)}
                  />
                  <TextField
                    required
                    id="password"
                    label="Password"
                    margin="normal"
                    type="password"
                    inputRef={input => (data.passwordInput = input)}
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