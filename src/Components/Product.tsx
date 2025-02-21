import { Paper, Box, Typography, Button } from "@mui/material";
import  styled from "@emotion/styled";

export default function Product(){

    const Img = styled("img")({
            width: 200,
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",    
        });
 
    return( 
    <Paper 
        sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            mt: 5,
        }}
    >
    <Img
    src= "https://i.pinimg.com/736x/93/71/8e/93718ea578b54474208638603644fa3e.jpg"
    alt= "mi hermosa imgen con styled"
    />

    <Box sx={{flexGrow: 1, display: "grid", gap: 2}}>
        <Typography variant="h4">product Name</Typography>
        <Typography variant="body1">product Desfcription</Typography>
        <Button variant="contained">Add card</Button>
    </Box>
    <Box sx={{mr: 2}} component="p">
        
        $19.99
    </Box>
    </Paper>
    );
}
