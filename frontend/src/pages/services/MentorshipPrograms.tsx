import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function MentorshipPrograms(){
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
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Mentorship Programs</Typography>
                    <Typography pb={4}>Lumina Vista’s mentorship program supports holistic personal and professional growth through tailored guidance and practical insights from experienced mentors. It caters to students and graduates or anyone seeking to enhance their skills and navigate career challenges effectively.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Business_Consultation2.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function GraphSection(){
    return (
        <Box component='img' src="/Graph5.png" width={'95%'} sx={{objectFit:'cover', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}/>
    );
}

function MiddleSection({scrollToContactSection}:any){

    
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:3, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Key Components</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Traditional Mentorship: Industry-specific advice and skill development.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Personal Mentorship: Life coaching and personal growth guidance.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Peer Mentoring: Collaborative learning and networking opportunities.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Leadership Development: Skills enhancement in decision-making and team management.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                                
                        </Box>
                    </CardContent>
                    <CardMedia image="/Students2.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Structure & Benefits</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Personalized Guidance: One-on-one & group sessions for goal setting & feedback.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Workshops: Regular events to foster learning & engagement.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Skill Enhancement: Gain practical skills through expert-led activities.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Continuous Support: Ongoing support within a supportive community.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                                
                        </Box>
                    </CardContent>
                    <CardMedia image="/Student_Portrait.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}