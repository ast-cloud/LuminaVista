import { Box, Button, Card, Divider, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Event(){

    const {id} = useParams();

    const [urlCopiedSnackbarOpen, setUrlCopiedSnackbarOpen] = useState(false);

    const fetchEventDetails = ()=>{
        
    }

    const handleShare = ()=>{
        navigator.clipboard.writeText(location.href);
        console.log('here');
        setUrlCopiedSnackbarOpen(true);
    }

    const handleSnackbarClose = ()=>{
        setUrlCopiedSnackbarOpen(false);
    }

    return (
        <Box sx={{display:'flex', flexDirection:'column', width:'98vw', alignItems:'center'}}>
            <Card sx={{display:'flex', flexDirection:'column', width:'90%', my:5, pt:5, backgroundColor:'#efefef', alignItems:'center'}}>
                <Typography>Sun, 11 Aug | Webinar</Typography>            
                <Typography variant="h4" my={2}>Study In Australia @ Lumina Vista</Typography>
                <Typography width={"40%"} textAlign={'center'}>Discover world-class education and vibrant culture in Australia at our seminar! Don't miss out on this opportunity.</Typography>
                <Button variant='outlined' sx={{borderRadius:'16px', color:'black', borderColor:'black', textTransform:'none', width:'10vw', my:5}}>Register</Button>
                <Box component={'img'} src="/Australian_University.webp" width={'50vw'}/>
                <Box sx={{display:'flex', flexDirection:'column', width:'50%', mt:5, border:'0px solid black'}}>
                    <Typography fontSize={'28px'} sx={{}}>Time & Location</Typography>
                    <Typography my={1}>111 more dates</Typography>
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Typography my={1}>11 Aug 2024, 5:00 pm – 6:00 pm GMT+9:30</Typography>
                        <Button variant="outlined" size="small" sx={{borderRadius:'16px', textTransform:'none', color:'black', borderColor:'black', height:'35px'}}>Select Different Date</Button>
                    </Box>
                    <Divider sx={{my:5, width:'95%'}}/>
                    <Typography fontSize={'25px'}>About the event</Typography>
                    <Typography>Join us for an insightful seminar on studying in Australia! Learn about world-class universities, diverse courses, visa processes, and scholarship opportunities. Hear from experts and alumni about their experiences and get all your questions answered. This event is your gateway to a bright future Down Under. Don't miss it!</Typography>
                    <Button variant="outlined" size="medium" sx={{width:'20%', textTransform:'none', borderRadius:'16px', my:5, color:'black', borderColor:'black'}}>Register</Button>
                    <Button onClick={handleShare} variant="outlined" sx={{width:'25%', textTransform:'none', borderRadius:'16px', mb:5, color:'black', borderColor:'black'}}>Share this event</Button>
                </Box>
            </Card>
            <Snackbar open={urlCopiedSnackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose} message="URL copied for sharing"/>
        </Box>
    );
}