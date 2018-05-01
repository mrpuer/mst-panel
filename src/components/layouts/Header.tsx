import * as React from "react";
import { observer, inject } from "mobx-react";
import { AppBar, Toolbar, Typography} from 'material-ui';

const Header = () => 
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Welcome to Admin Area
          </Typography>
        </Toolbar>
      </AppBar>

export default Header;