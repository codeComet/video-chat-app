import React, { useContext } from "react";
import { Button } from "@mui/material";
import { SocketContext } from "../SocketContext";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling...</h1>
          <Button variant="contained" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notification;
