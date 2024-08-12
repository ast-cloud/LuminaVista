import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function StudyInAustralia(){
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
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Study In Australia</Typography>
                    <Typography pb={4}>Comprehensive guidance for students to maximize their academic and professional potential, ensuring a well-rounded experience that focuses on both educational and career success in Australia.</Typography>
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
        <Box component='img' src="/Graph1_full.png" width={'95%'} sx={{objectFit:'cover', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}/>
    );
}

function MiddleSection({scrollToContactSection}:any){
    
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Counselling Services</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>We provide personalized educational counselling tailored for individual goals and interests.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Analysis of universities & programs to find the best fit for student.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Outdoors_Meeting.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:2, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>University Applications</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Assistance with applications, including essay writing, document preparation & submission tracking.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Guidance on finding and applying for scholarships and financial aid.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview_2.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Visa Assistance & Orientation</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Step-by-step guidance on obtaining student visas, including document requirements and application processes.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Sessions on what to expect, cultural adjustment, and practical tips for living in Australia.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Passport_Covers.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>On Shore Mentorship Program</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Benefit from ongoing support and guidance as you progress along your career</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>In-depth information on living in Australia as a student, covering accommodation, lifestyle, and community integration.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Business_Consultation.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}