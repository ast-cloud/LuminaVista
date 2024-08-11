import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import ContactUsSection from "../components/ContactUsSection";

export default function ContactUs(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <GetInTouch/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <Australia/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <India/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>
        </Box>
    );
}

function GetInTouch(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Get in Touch</Typography>
                    <Typography pb={4}>Have questions or need more information? We're here to help! Whether you prefer to call, email, or chat, we're ready to assist you on your journey with Lumina Vista. Let's connect and start your path to success together!</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Hotline_Consultant.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function Australia(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h2" color={'#265D6B'} pb={4} ml={8}>Australia</Typography>
            <Card sx={{display:'flex', flexDirection:'column', width:'90%', alignSelf:'center'}}>
                <Divider sx={{width:'95%', mt:4, mb:0, backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', my:4}}>
                    <Typography>Sydney</Typography>
                    <Typography>20-24 Sorrell Street Parramatta NSW</Typography>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>1300941827</Typography>
                        <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                    </Box>
                </Box>
                <Divider sx={{my:0, width:'95%', backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', mb:4, justifyContent:'space-evenly', my:4}}>
                    <Typography>Adelaide</Typography>
                    <Typography>9 Light Square Adelaide SA 5000</Typography>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>1300941827</Typography>
                        <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}

function India(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant="h2" color={'#265D6B'} pb={4} ml={8}>India</Typography>
            <Card sx={{display:'flex', flexDirection:'column', width:'90%', alignSelf:'center'}}>
                <Divider sx={{width:'95%', mt:4, mb:0, backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', my:4, px:10}}>
                    <Typography>Lucknow</Typography>
                    <Typography>Shri Viswanath Banquet Hall, Vigyan Khand, Amity Road, Chota Bharwara, Lucknow - 226010</Typography>
                    <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                </Box>
                <Divider sx={{my:0, width:'95%', backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', mb:4, justifyContent:'space-between', my:4, px:10}}>
                    <Typography>Bhopal</Typography>
                    <Typography>A-19 Shahpura Bhopal MP</Typography>
                    <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                </Box>
                <Divider sx={{my:0, width:'95%', backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', mb:4, justifyContent:'space-between', my:4, px:10}}>
                    <Typography>Nagpur</Typography>
                    <Typography>201/1B, Pension Nagar, Nagpur, Maharashtra - 440013</Typography>
                    <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                </Box>
                <Divider sx={{my:0, width:'95%', backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', mb:4, justifyContent:'space-between', my:4, px:10}}>
                    <Typography>Raebareli</Typography>
                    <Typography>M-2 Main Road RDA Colney, Indra Nagar, Raebareli, UP</Typography>
                    <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                </Box>
                <Divider sx={{my:0, width:'95%', backgroundColor:'black', alignSelf:'center'}}/>
                <Box sx={{display:'flex', flexDirection:'row', mb:4, justifyContent:'space-between', my:4, px:10}}>
                    <Typography>Hazaribagh</Typography>
                    <Typography>Rana Ji Heights Lakhe Flat no 402 Near Lakhe Mazhar Lakhe Hazaribagh, Jharkhand</Typography>
                    <Typography sx={{textDecoration:'underline'}}>Contact Now</Typography>
                </Box>
            </Card>
        </Box>
    );
}