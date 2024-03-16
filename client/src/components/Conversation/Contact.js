import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Divide,
  EyeClosed,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import { ToggleSidebar, UpadateSidebarType } from "../../redux/slices/app.js";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import AntSwitch from '../AntSwitch.js'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteDialog=({open,handleClose})=>{
  
  return(
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete this Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this Contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>
  )
}
const BlockDialog=({open,handleClose})=>{
  
  return(
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Block this Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to block this Contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
      </Dialog>
  )
}
const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock,setOpenBlock]=useState(false)
  const [openDelete,setOpenDelete]=useState(false)
  const handleCloseBlock=()=>{
    setOpenBlock(false)
  }
  const handleCloseDelete=()=>{
    setOpenDelete(false);
  }
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
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
            sx={{ height: "100%", p: 2 }}
            alignItems={"center "}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            OverflowY: "scroll",
          }}
          p={2}
          spacing={2}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={1}>
              <Typography variant="subtitle2kk" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={600}>
                {faker.phone.number()}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2"> hi , how u doing</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media,Link & Docs</Typography>
            <Button onClick={()=>dispatch(UpadateSidebarType("SHARED"))} endIcon={<CaretRight />}>401</Button>
          </Stack>
          <Stack spacing={2} alignItems={"center"} direction={"row"}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.image()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divide />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Message</Typography>
            </Stack>
            <IconButton onClick={()=>dispatch(UpadateSidebarType("STARRED"))}>
            <CaretRight  />
            </IconButton>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notification</Typography>
            </Stack>
            <AntSwitch/>
          </Stack>
          <Divider/>
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()}/>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                consfnhds
              </Typography>
              <Typography variant="caption">
                hfdsuamfduasf.,fdafufbdf
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems={"center"} spacing={2} direction={"row"}>
            <Button onClick={()=>{setOpenBlock(true)}} fullWidth variant="outlined" startIcon={<Prohibit/>}>
              Block
            </Button>
            <Button onClick={()=>setOpenDelete(true)} fullWidth variant="outlined" startIcon={<Trash/>}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {
        openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}/>
      }
      {
        openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete}/>
      }
    </Box>
  );
};

export default Contact;
