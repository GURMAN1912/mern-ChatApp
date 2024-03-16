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

const SharedMessage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <IconButton onClick={()=>dispatch(UpadateSidebarType("CONTACT"))}>
    //     <CaretLeft />
    // </IconButton>
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{height:"100%"}}>
        <Box
          p={2}
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
            <Typography variant="subtitle2">Shared Message</Typography>
          </Stack>
        </Box>

        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

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
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el, i) => {
                      return (
                        <Grid key={i} item  xs={4} >
                          <img
                            src={faker.image.image()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
                break;
              case 1:
                return Shared_links.map((el)=><LinkMsg el={el}/>)
                break;
              case 2:
                return Shared_docs.map((el)=><DocMsg el={el}/>)
                break;
            }
          })()}
      </Stack>
      </Stack>

    </Box>
  );
};

export default SharedMessage;
