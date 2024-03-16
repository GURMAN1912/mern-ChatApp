import {
    Box,
    Stack,
    IconButton,
    Typography,
    useTheme,
    Tabs,
    Tab,
    Grid,
  } from "@mui/material";
  import { CaretLeft, X } from "phosphor-react";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { ToggleSidebar, UpadateSidebarType } from "../../redux/slices/app";
  import { faker } from "@faker-js/faker";
  import { Shared_docs, Shared_links } from "../../data";
  import { DocMsg, LinkMsg } from "./MsgType";
import Message from "./Message";
  
  const StarredMessage = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  
    return (
      // <IconButton onClick={()=>dispatch(UpadateSidebarType("CONTACT"))}>
      //     <CaretLeft />
      // </IconButton>
      <Box sx={{ width: 320, height: "100vh" }}>
        <Stack sx={{height:"100%"}}>
          <Box
            sx={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              width: "100%",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background,
            }}
          >
            <Stack
              direction={"row"}
              sx={{ height: "100%", p: 1 }}
              alignItems={"center "}
              // justifyContent={"space-between"}
              spacing={3}
            >
              <IconButton
                onClick={() => {
                  dispatch(UpadateSidebarType("CONTACT"));
                }}
              >
                <CaretLeft />
              </IconButton>
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
          </Box>
  
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
           <Message menu/>
        </Stack>
        </Stack>
  
      </Box>
    );
  };
  
  export default StarredMessage;
  