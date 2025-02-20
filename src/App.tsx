//import { Button } from "@mui/material";
import { Box, Button, Container } from "@mui/material";

export default function App() {
return(
  <Container>
    <h1>App</h1>
    <Box sx={{border: 2, padding: 5, borderColor: "peru", bgcolor: "#111",  color:"white" }} component="span">
      Pero que hermoso es MUI
    </Box>
  </Container>
);
}