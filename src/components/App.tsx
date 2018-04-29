import * as React from "react";
import { observer, inject } from "mobx-react";
import { CssBaseline, Grid } from 'material-ui';

import UsersList from "./UsersList";
import AddUser from "./AddUser";
import Login from "./Login";

const styles = {

}

const App = observer(({store}) => {
  const { usersList, admin, isLogged } = store;
  return (
    <React.Fragment>
      <CssBaseline />
    
      {isLogged ? <Grid container className="main-container" spacing={16} justify="space-around">

        <Grid item xs={6}>
        <UsersList usersList={usersList}/>
        </Grid>

        <Grid item xs={5}>
        <AddUser usersList ={usersList} />
        </Grid>

      </Grid> : <Login data={isLogged} />}
    
    </React.Fragment>
  )
})

export default inject("store")(App);