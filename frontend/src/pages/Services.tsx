import { ExpandMoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import ContactUsSection from "../components/ContactUsSection";

export default function Services(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <OurServices/>
            <Divider sx={{mt:8, mb:2, width:'90vw', alignSelf:'center'}}/>
            <MiddleSection/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <SeamlessClientExperience/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>
        </Box>
    );
}

function OurServices(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Our Services</Typography>
                    <Typography pb={4}>At Lumina Vista, we provide comprehensive support for students and graduates in pursuing their career dreams. Our services include Study in Australia, Migrate to Australia, Job-Ready Programs, Career Counselling, Mentorship Programs, and Internship. We are dedicated to helping you achieve academic success and professional growth through tailored guidance and practical insights.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/Business_representative.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function MiddleSection(){
    return (
        <Grid container sx={{width:'100%', px:4}}>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'90vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Study in Australia</Typography>
                                <Divider/>
                                <Typography>Australia offers top-tier education and cultural diversity. Lumina Vista supports you with personalized counselling, application help, visa assistance, pre-departure tips, and ongoing support, including housing and job assistance.</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Australian_Flag.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'90vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Migrate to Australia</Typography>
                                <Divider/>
                                <Typography>Australia offers a high quality of life, a vibrant multicultural society, and a strong economy. Lumina Vista provides comprehensive support for visas, job searches, workplace culture, and relocation to ensure your successful integration into Australian life.</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Perth.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'90vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Career Counselling Services</Typography>
                                <Divider/>
                                <Typography>We offer personalized career guidance and strategic planning for individuals at all career stages. Our expert counsellors provide the tools and insights needed to succeed in the competitive job market. Book your session now to get personalized guidance.</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Key_Speaker.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'90vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Job ready programs</Typography>
                                <Divider/>
                                <Typography>Our Job Ready Programs equip graduates & professionals with the practical skills & career coaching needed to secure jobs & advance their careers. We offer technical training, internships, & personalized support to ensure your success in the job market.</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Job_Interview.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'95vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Mentorship Programs</Typography>
                                <Divider/>
                                <Typography>Our mentorship programs offer tailored guidance & practical insights to support your personal & professional growth. Whether you're a student, recent graduate, or seasoned professional, our mentors provide invaluable support to help you navigate career challenges & achieve your goals effectively.</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/Coworking_Space.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
            <Grid item sm={6} sx={{px:2, mt:4}}>
                 <Card sx={{height:'95vh', borderRadius:'16px', boxShadow:5}}>
                    <CardContent sx={{px:4, height:'40%'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                                <Typography fontSize={25}>Internship</Typography>
                                <Divider/>
                                <Typography>Ready to kickstart your career with hands-on experience? Explore our exciting internship opportunities designed to help you gain practical skills, build your network, and set the foundation for a successful career. Dive in and discover how you can make the most of your internship journey with us!</Typography>
                                <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </CardContent>
                    <CardMedia image="/In_a_Meeting.webp" sx={{height:'60%'}}/>
                 </Card>
            </Grid>
        </Grid>
    );
}

function SeamlessClientExperience(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:7}}>
            <Typography variant="h3" color={'#265D6B'} ml={0} pb={4}>Seamless Client Experience</Typography>
            <Typography>Lumina Vista is your trusted partner for achieving academic and career success in Australia. We provide personalized guidance, practical skills, and ongoing mentorship to empower your journey.</Typography>
            <Box sx={{display:'flex', flexDirection:'row', my:4, gap:0, alignItems:'center'}}>
                <Box component={'img'} src="/Woman_Receiving_Delivery.webp" sx={{width:'50%', objectFit:'cover', borderRadius:'16px'}}/>
                <Box sx={{display:'flex', flexDirection:'column', width:'50%', px:14}}>
                    <Typography>Comprehensive Support</Typography>
                    <Divider/>
                    <Typography>Lumina Vista offers personalized guidance, practical skills development, and ongoing mentorship to ensure academic and career success in Australia.</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', my:4, gap:0, alignItems:'center'}}>
                <Box sx={{display:'flex', flexDirection:'column', width:'50%', px:14}}>
                    <Typography>Expertise and Experience</Typography>
                    <Divider/>
                    <Typography>Led by CEO Shivendra Singh, an international student turned IT industry leader, our team brings real-world insights and professional knowledge to guide you effectively through your career journey.</Typography>
                </Box>
                <Box component={'img'} src="/Phone.webp" sx={{width:'50%', objectFit:'cover', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}