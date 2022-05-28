import "./ChatCss.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function MainChat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div style={{marginTop:"70px" , marginBottom:"70px"}}>
        <center>
            <div>
            {!showChat ? (
                <div className="joinChatContainer">
                <h3>Enter Group ID to Join Chat</h3>
                <input
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                    setUsername(event.target.value);
                    }}
                /><br/>
                <input
                    type="text"
                    placeholder="Room ID..."
                    onChange={(event) => {
                    setRoom(event.target.value);
                    }}
                /><br/>
                <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room} />
            )}
            </div>
        </center>
    </div>
  );
}

export default MainChat;
