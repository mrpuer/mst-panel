import * as React from "react";
import { observer, inject } from "mobx-react";
import { AppBar, Toolbar, Typography } from 'material-ui';

const Header = () => 
    <div className="header">
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Welcome to Admin Area
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

export default Header;