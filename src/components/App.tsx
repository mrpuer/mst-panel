import * as React from "react";
import { observer, inject } from "mobx-react";
import { CssBaseline, Grid } from 'material-ui';

import UsersList from "./UsersList";
import AddUser from "./AddUser";
import Login from "./Login";
import Header from "./layouts/Header";
import Menu from "./layouts/Menu";

const App = observer(({store}) => {
  const { usersList, isLogged } = store;
  return (
    <React.Fragment>
      <CssBaseline />
    
      {isLogged ? 
      <div className="admin-area">
      <Header />
        <Grid container className="main-container" spacing={40} justify="flex-start">
          <Grid item md={2} >
            <Menu />
          </Grid>
          <Grid item md={9}>
            <UsersList store={store} />
          </Grid>
          {/* <Grid item xs={5}>
            <AddUser usersList ={usersList} />
          </Grid> */}
        </Grid>
      </div> : <Login data={store} />}
    
    </React.Fragment>
  )
})

export default inject("store")(App);