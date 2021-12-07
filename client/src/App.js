import "./App.css";
import { AppBar, Typography, Toolbar } from "@mui/material";
import { Notification, Option, VideoPlayer } from "./components";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="error">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Video chat app
          </Typography>
        </Toolbar>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </div>
  );
}

export default App;
