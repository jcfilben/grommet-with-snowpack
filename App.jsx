import React from "react";
import { Box, Grommet, Heading, Paragraph } from "grommet";
import { Add } from "grommet-icons";

export default function App() {
  return (
    <Grommet>
      <Box>
        <Heading>Grommet with Snowpack!</Heading>
        <Paragraph>This is an icon from grommet-icons: </Paragraph>
        <Add />
      </Box>
    </Grommet>
  );
}
