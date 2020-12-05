import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetails } from "./components";

class App extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
            </Grid>
            <Grid item xs={8}>
              {/* VIDEO */}
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
