import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SerachExcercises from "../components/SerachExcercises";
import Excercises from "../components/Excercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerachExcercises />
      <Excercises />
    </Box>
  );
};

export default Home;
