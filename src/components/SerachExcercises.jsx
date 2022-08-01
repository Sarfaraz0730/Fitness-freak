import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const SerachExcercises = () => {
  
  return (
    <Stack alignContent="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { ld: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises You <br />
        Should know
      </Typography>

      <Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            height="76px"
            value=""
            onChange={(e) => {}}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "12px" },
              height: "56px",
              position: "absolute",
            }}
          >
            Search
          </Button>
        </Box>
      </Typography>
    </Stack>
  );
};

export default SerachExcercises;
