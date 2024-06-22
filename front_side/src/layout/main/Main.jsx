import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";

export default function Main({ children }) {

  return (
    <Box
      sx={{
        minHeight: "85vh",
        position: `relative`,
        overflow: 'hidden'
      }}
    >
      <img
        src="/assets/images/WorlsTrip.jpg"
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1 
        }}
      />
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: node,
};