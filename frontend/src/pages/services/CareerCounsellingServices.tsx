import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import ContactUsSection from "../../components/ContactUsSection";
import { useRef } from "react";

export default function CareerCounsellingServices(){
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
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Career Counselling</Typography>
                    <Typography pb={4}>Our Career Counselling Services are tailored to support individuals at all stages of their careers, from students and recent graduates to seasoned professionals. Our goal is to provide personalized guidance, strategic career planning, and the tools needed to succeed in today's competitive job market.</Typography>
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
        <Box component='img' src="/Graph3.png" width={'95%'} sx={{objectFit:'cover', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}/>
    );
}

function MiddleSection({scrollToContactSection}:any){

    
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Personalized Career Guidance</Typography>
                                <Divider/>
                                <Typography>Individualized support that takes into account your unique strengths, career aspirations & personal goals. This ensures your career path is tailored specifically to your needs & ambitions, helping you make informed decisions at every stage.</Typography>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                                
                        </Box>
                    </CardContent>
                    <CardMedia image="/Outdoors_Meeting.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'auto', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Strategic Career Planning</Typography>
                                <Divider/>
                                <Typography>Work closely with our experts to develop a strategic roadmap for your career. Define clear short-term and long-term goals, identify opportunities for growth within your industry, and create actionable plans to achieve your career objectives effectively.</Typography>
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
                                <Typography fontSize={25}>Skills Assessment & Development</Typography>
                                <Divider/>
                                <Typography>Receive detailed assessments to evaluate your current skills and areas for improvement. These assessments are designed to provide clarity on your professional strengths and weaknesses, allowing us to develop plans for continuous learning and skill development tailored to your career goals.</Typography>
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
                                <Typography fontSize={25}>Career Readiness</Typography>
                                <Divider/>
                                <Typography>Gain practical skills and knowledge through intensive training sessions that equip you with essential capabilities needed to excel in your chosen field. Additionally, master effective job search strategies, receive guidance on building professional networks, and benefit from ongoing mentorship.</Typography>
                                <Button variant="outlined" sx={{borderRadius:'16px', width:'20%', textTransform:'none', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}} onClick={scrollToContactSection}>Apply now</Button>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Business_Consultation.webp" sx={{height:'45vh'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}