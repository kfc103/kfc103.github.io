import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function () {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">eCompare</Typography>
      </Toolbar>
    </AppBar>
  );
}
