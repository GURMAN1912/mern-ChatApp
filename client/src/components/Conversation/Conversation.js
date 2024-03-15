import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Fab,
  Tooltip,
} from "@mui/material";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  Camera,
  CaretDown,
  File,
  Image,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  Sticker,
  User,
  VideoCamera,
} from "phosphor-react";
import Message from "./Message";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingButtom: "12px",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput=({setOpenPicker})=>{
  const [openAction,setOpenAction]=React.useState(false)
  return(
    <StyledInput
            fullWidth
            placeholder="Write a message..."
            varient="filled"
            InputProps={{
              startAdornment: (
                <Stack sx={{width:'max-content'}}>
                  <Stack sx={{position :"relative" ,display:openAction?"inline-block":"none"}}>
                    {Actions.map((el)=>(
                      <Tooltip title={el.title} placement="right">
                      <Fab sx={{position:"absolute",top:-el.y,backgroundColor:el.color}} color="primary " aria-label="add">
                        {el.icon}
                      </Fab>
                      </Tooltip>
                    ))}
                  </Stack>
                <InputAdornment position="start">
                  <IconButton onClick={()=>setOpenAction((pre)=>!pre)}>
                    <LinkSimple  />
                  </IconButton>
                </InputAdornment>
                </Stack>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={()=>setOpenPicker((prev)=>!prev)}>
                    <Smiley  />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
  )

}
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinte ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const Conversation = () => {
  const theme = useTheme();
  const [openPicker,setOpenPicker]=React.useState(false)
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Box
        p={2}
        sx={{
          height: 100,
          width: "100%",
          backgroundColor:theme.palette.mode ==="light"? "#F8FAFF":theme.palette.background.default ,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtile2">
                {" "}
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* Msg */}
      <Box width={"100%"} sx={{ flexGrow: 1,height:"100%",overflowY:"scroll" }}>
                <Message />
      </Box>
      {/* Chat Footer */}
      <Box
        p={2}
        sx={{ width: "100%", backgroundColor:theme.palette.mode ==="light"? "#F8FAFF":theme.palette.background.default }}
      >
        <Stack direction="row" alignItems={"center"} spacing={3}>
          {/* Chat Input */}
          <Stack sx={{width:"100%"}}>
            <Box sx={{display:openPicker?"inline":'none',zIndex:10,position:"fixed" ,bottom:81,right:100}}>
            <Picker data={data} onEmojiSelect={console.log} theme={theme.palette.mode} />
            </Box>
            <ChatInput setOpenPicker={setOpenPicker}/>
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};
export default Conversation;
