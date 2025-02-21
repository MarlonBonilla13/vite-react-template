import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from "@mui/material";

export default function Blueecard() {

    return(
        
        <Card
        
        sx={{
            transition: "0.2s",
            "&:hover":{
                transform: "scale(1.05)",
            },
        }}
        >
            <CardActionArea>
            <CardMedia component="img" 
            image="https://images.unsplash.com/photo-1601236414929-677713b2d078?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="200"
            alt="una descripcion"/>

            <CardContent>
                <Typography variant="h5">Card Title</Typography>
                <Typography component="p" variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae consectetur dicta nobis molestias cupiditate deleniti officiis odio ex molestiae nemo ut provident, minima tempora doloremque labore error magni, atque blanditiis.
                </Typography>
            </CardContent>

            <CardActions>
                <Button variant="contained">Add</Button>
                <Button color="error">Remove</Button>
            </CardActions>
            </CardActionArea>
        </Card>
        
    )

}