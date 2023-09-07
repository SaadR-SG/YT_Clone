import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "../Search/SearchBar";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      sx={{
        position: "sticky",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
      }}>
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt='logo' height={45}/><Typography variant='h5' fontWeight='bold' style={{ color: "#F31503" }}>YouTube</Typography>
        </Link>
        <SearchBar />
    </Stack>
  );
};

export default NavBar;
