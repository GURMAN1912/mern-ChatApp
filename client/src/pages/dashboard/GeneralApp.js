import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation";
import Contact from "../../components/Conversation/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/Conversation/SharedMessage";
import StarredMessage from "../../components/Conversation/StarredMessage";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px) " : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      {sidebar.open &&
        (() => {
          console.log(sidebar.type);
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
              case "STARRED":
                return <StarredMessage/>
                break;
                case "SHARED":
                  return <SharedMessage />;
                  default:
                    break;
                  }
                })()}
          
    </Stack>
  );
};

export default GeneralApp;
