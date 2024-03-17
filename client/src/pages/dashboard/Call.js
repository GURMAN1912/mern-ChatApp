import { Avatar, Badge, Box, Divider, IconButton, InputBase, Stack, Typography } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Plus } from "phosphor-react";
import { faker } from "@faker-js/faker";
import CreateGroup from "../../sections/main/CreateGroup";
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingLeft: `calc(1em+${theme.spacing(4)})`,
    width: "100%",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(3),
  marginLeft: 0,
  width: "100%",
}));

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
const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
  
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}
  
            <Stack spacing={0.3}>
              <Typography sx={{ paddingTop: "1px" }} variant="subtitle2">
                {name}
              </Typography>
              <Typography varient="caption">{msg} </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography fontSize={12} sx={{ fontWeight: 600 }} variant="subtile">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
const Call = () => {
    const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const handleOpenDialog = () => {
    setOpenDialog(true);
  }
  const theme = useTheme();
  return (
    <>
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          width: 320,

          boxShadow: "0px ,0px,2px,rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack>
            <Typography variant="h4"> Call logs  </Typography>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <StyledInputBase placeholder="Search" />
            </Search>
          </Stack>
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            <Typography variant="subtitle2" sx={{}} component={Link}>
              Start Conversation
            </Typography>
            <IconButton onClick={handleOpenDialog}>
              <Plus style={{ color: theme.palette.primary.main }} />
            </IconButton>
          </Stack>
          <Divider />
          <Stack sx={{ flexGrow: 1, overflowX:"hidden", overflowY: "scroll", height: "100%" }}>
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  Pinned
                </Typography>
                {/* Chat List */}
                
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};
export default Call;
