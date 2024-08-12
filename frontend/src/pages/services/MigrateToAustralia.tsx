import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function MigrateToAustralia(){
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
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Migrate to Australia</Typography>
                    <Typography pb={4}>Discover a seamless pathway to living and working in Australia with Lumina Vista. From expert migration and permanent residency guidance to tailored job search support and cultural orientation, we provide essential assistance for your success and integration in Australia.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Perth.webp" sx={{width:'50%', borderRadius:'16px'}}/>
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
                    <CardContent sx={{px:2, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Migration Services</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Guidance on visa options and immigration processes for individuals looking to move to Australia.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Permanent Residency Visa Services.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Assistance with application processes, documentation, and meeting eligibility criteria.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Ongoing support & advice through the residency application process.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Flight.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Career Integration Services</Typography>
                                <Divider/>
                                <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Job Search Assistance: Support in finding and applying for jobs in Australia, including access to job listings and application tips.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Workplace Culture Orientation: Insights into Australian workplace culture and expectations to help newcomers integrate smoothly.</Typography></ListItem>
                                    <ListItem sx={{display:'list-item', p:0}}><Typography>Relocation Support: Assistance with finding accommodation, understanding local amenities, and settling into life in Australia.</Typography></ListItem>
                                </List>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview_3.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}