import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function JobReadyPrograms(){
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
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Job Ready Programs</Typography>
                    <Typography pb={4}>Our Job Ready Program focused, short-term program designed to equip recent graduates and professionals with practical skills to secure their first job or advance their careers within their respective fields.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/OperaHouse.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function GraphSection(){
    return (
        <Box component='img' src="/Graph4.png" width={'95%'} sx={{objectFit:'cover', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}/>
    );
}

function MiddleSection({scrollToContactSection}:any){

    
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:3, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Skills Assessment & Development</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Comprehensive skills assessments to identify strengths and areas for improvement.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Role-specific training tailored to increase employability.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Cover essential concepts, tools, and technologies applicable across various roles.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Technical skills training on industry-specific tools and technologies.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Soft skills workshops focused on enhancing interpersonal and communication skills.</Typography></ListItem>
                                </List>
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
                                <Typography fontSize={25}>Internships & Work Placements</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Assistance in securing relevant internships and work placements aligned with career goals.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Exclusive partnerships with leading companies for hands-on experience and networking opportunities.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Organised events, seminars, and platforms to connect with industry professionals and potential employers.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Effective networking strategies for building and maintaining a strong professional network.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview_4.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Career Coaching</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Personalized career strategies and job search plans through one-on-one coaching sessions.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Resume enhancement, cover letter crafting, and interview preparation workshops.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Effective techniques for utilising job boards, leveraging social media, and networking to find job opportunities.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview_4.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}