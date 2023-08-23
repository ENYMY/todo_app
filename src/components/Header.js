import React from "react";
// import classes from "./Header.module.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import RocketTwoToneIcon from "@mui/icons-material/RocketTwoTone";

const pages = ["New Todo", "Favorites"];
const Header = (props) => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <RocketTwoToneIcon
            sx={{
              //   display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              //   display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            My TODO's
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            {pages.map((page) => {
              return (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
