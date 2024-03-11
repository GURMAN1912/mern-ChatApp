import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
  useTheme,
} from "@mui/material";
import useSettings from "../../hooks/useSettings.js"
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index.js";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const {onToggleMode}=useSettings();

  return (
    <>
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
          <Box
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
                    sx={{ width: "max-content", color:theme.palette.mode ==="light"?"#000":"#fff" }}
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
                  <IconButton sx={{ width: "max-content", color:theme.palette.mode ==="light"?"#000":"#fff" }}>
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
            <Switch onClick={()=>onToggleMode()} defaultChecked/>
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
