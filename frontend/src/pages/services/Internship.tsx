import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function Internship(){
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const scrollToContactSection = () => {
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <IntroSection scrollToContactSection={scrollToContactSection}/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <GraphSection/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <MiddleSection scrollToContactSection={scrollToContactSection}/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection reference={contactSectionRef}/>
        </Box>
    );
}

function IntroSection({scrollToContactSection}:any){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Internship</Typography>
                    <Typography pb={4}>Ready to kickstart your career with hands-on experience? Explore our exciting internship opportunities designed to help you gain practical skills, build your network, and set the foundation for a successful career. Dive in and discover how you can make the most of your internship journey with us!</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Classroom.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function GraphSection(){
    return (
        <Box component='img' src="/Graph6.png" width={'95%'} sx={{objectFit:'cover', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}/>
    );
}

function MiddleSection({scrollToContactSection}:any){

    
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:3, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Students seeking Internship</Typography>
                                <Divider/>
                                <Typography>Kickstart your career with valuable hands-on experience through our internship programs. We connect you with top organizations in your field, offering you the opportunity to apply your academic knowledge, develop new skills, and build a professional network. Get ready to gain practical insights and stand out in the competitive job market.</Typography>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Startup_Development_Team.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Organizations Seeking Interns</Typography>
                                <Divider/>
                                <Typography>Discover talented and motivated interns to support your projects and bring fresh perspectives to your team. Our internship program matches you with skilled students eager to contribute and learn. Benefit from their enthusiasm and up-to-date academic knowledge while fostering the next generation of professionals in your industry.</Typography>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview_4.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}