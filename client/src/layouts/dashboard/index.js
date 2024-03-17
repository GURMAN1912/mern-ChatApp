import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  useTheme,
} from "@mui/material";
import useSettings from "../../hooks/useSettings.js";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data/index.js";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
const DashboardLayout = () => {
  const navigate=useNavigate();
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack direction={"row"}>
      <Box display={"flex"} alignItems={"center"}>
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            width: 100,
            height: "100vh",
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ height: "100%" }}
            spacing={3}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box onClick={()=>navigate("/app")}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}
              >
                <img src={Logo} alt="logo.." />
              </Box>
              <Stack sx={{ width: "max-content" }} spacing={3}>
                {Nav_Buttons.map((ele) =>
                  ele.index === selected ? (
                    <Box
                      key={ele.index}
                      p={1}
                      sx={{ backgroundColor: theme.palette.primary.main }}
                      borderRadius={1.5}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#fff" }}
                        key={ele.index}
                      >
                        {ele.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => setSelected(ele.index)}
                      sx={{
                        width: "max-content",
                        color: theme.palette.mode === "light" ? "#000" : "#fff",
                      }}
                      key={ele.index}
                    >
                      {ele.icon}
                    </IconButton>
                  )
                )}
                <Divider sx={{ width: "48px" }} />
                {selected === 3 ? (
                  <Box
                    p={1}
                    sx={{ backgroundColor: theme.palette.primary.main }}
                    borderRadius={1.5}
                  >
                    <IconButton onClick={()=>navigate("/setting")}
                      sx={{
                        width: "max-content",
                        color: theme.palette.mode === "light" ? "#000" : "#fff",
                      }}
                    >
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(3);
                    }}
                  >
                    <Gear />
                  </IconButton>
                )}
              </Stack>
            </Stack>
            <Stack spacing={4} alignItems={"center"}>
              <Switch onClick={() => onToggleMode()} defaultChecked />
              <Avatar
                id="basic_button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                src={faker.image.avatar()}
              />
              <Menu
                id="basic_menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-label": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack spacing={1} px={1}>
                  {Profile_Menu.map((el) => (
                    <MenuItem onClick={handleClick}>
                      <Stack
                        sx={{
                          width: 100,
                          direction: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{el.title}</span>
                        {el.icon}
                      </Stack>
                    </MenuItem>
                  ))}
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default DashboardLayout;
