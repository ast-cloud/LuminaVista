import {Button, Card, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MenuBookOutlined, AirplanemodeActiveOutlined, AnalyticsOutlined, SettingsSuggestOutlined, CastForEducationOutlined, SchoolOutlined, SouthEast} from "@mui/icons-material";
import {motion} from 'framer-motion';
import ContactUsSection from "../components/ContactUsSection";

export default function Home(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <Slides/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <OurServices/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <OurLocations/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <WhyLuminaVista/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <MessageFromCEO/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <FAQs/>
            <Divider sx={{my:10, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>
        </Box>
    );
}

function Slides(){

    const imageStyle = {
      height: useMediaQuery('(max-width: 700px)')? '35vw':'36vw',
      width: '100vw',
      borderRadius:'0px',
      objectFit:'cover'
    } as React.CSSProperties;
  
    const carouselStyle = {
      marginTop:'0vh',
      overflow:'hidden'
    } as React.CSSProperties;
  
    return <div style={carouselStyle}>
      <Carousel className='carousel-container' showThumbs={false} swipeable={true} infiniteLoop showArrows={true} autoPlay={true} emulateTouch={true} showStatus={false} >
        <div className='carousel-item'>
            <img src="/Students.webp" style={imageStyle} alt=''/>
        </div>
        <div className='carousel-item'>
            <img src="/Graduate.webp" style={imageStyle} alt=''/>
        </div>
        <div className='carousel-item'>
            <img src="/At_Work.webp" style={imageStyle} alt=''/>
        </div>
        <div className='carousel-item'>
            <img src="/Home_Tution.webp" style={imageStyle} alt=''/>
        </div>
      </Carousel>
    </div>
  }
  
function OurServices(){
    let greaterThan1332 = useMediaQuery('(min-width:1332px)');
    return (
        <Box sx={{display:'flex', flexDirection:'column', mx:'5vw', border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={'50px'} lineHeight={1}>Our Services</Typography>
            {/* <Box sx={{display:'flex', flexDirection:'row'}}> */}
                {/* <Divider orientation="vertical" sx={{height:'100%', alignSelf:'stretch', mr:'10vw'}}/> */}
            <Grid container rowGap={{xs:4, sm:5}} columnGap={2} sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'0px solid black'}}>
                <Grid item lg={3}>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <MenuBookOutlined fontSize="large"/>
                            <Typography variant="h6">Study in Australia</Typography>
                            <Typography>Guidance for international students to achieve academic and career success in Australia.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <AirplanemodeActiveOutlined fontSize="large"/>
                            <Typography variant="h6">Migrate to Australia</Typography>
                            <Typography>Support for smooth migration, job search, & integration into Australian life & work.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={3}>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <AnalyticsOutlined fontSize="large"/>
                            <Typography variant="h6">Job ready program</Typography>
                            <Typography>Training to equip graduates and professionals with practical skills for career advancement.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <SettingsSuggestOutlined fontSize="large"/>
                            <Typography variant="h6">Career Counselling Services</Typography>
                            <Typography>Training to equip graduates and professionals with practical skills for career advancement.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <CastForEducationOutlined fontSize="large"/>
                            <Typography variant="h6">Mentorship Programs</Typography>
                            <Typography>Training to equip graduates and professionals with practical skills for career advancement.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <SchoolOutlined fontSize="large"/>
                            <Typography variant="h6">Internship</Typography>
                            <Typography>Training to equip graduates and professionals with practical skills for career advancement.</Typography>
                            <Typography sx={{textDecoration:'underline'}}>Learn more</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            {/* </Box> */}
        </Box>
    );
}

function OurLocations(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', mx:'5vw', border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={{xs:'60px', sm:'70px', md:'90px'}} lineHeight={1}>Our Locations</Typography>
            <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row'}, gap:{xs:7,md:4}}}>
                <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent
                        :'center', alignItems:'center', py:'15px', px:{xs:'25px', sm:'45px',md:'55px'}}}>
                        <Typography variant="h6" my={2}>Australia</Typography>
                        <Typography>Welcome to our Australia hub! We're here to support you in Adelaide, Sydney, Melbourne, Brisbane, and beyond, ensuring you thrive academically and professionally. Discover how we can help you make the most of your time in Australia!</Typography>
                        <Typography my={2} sx={{textDecoration:'underline', cursor:'pointer'}}>Reach Us</Typography>
                    </Box>
                </Card>
                <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent
                        :'center', alignItems:'center', py:'15px', px:{xs:'25px', sm:'45px',md:'55px'}}}>
                        <Typography variant="h6" my={2} >India</Typography>
                        <Typography>Welcome to our India hub! We're dedicated to supporting your journey from India to Australia, providing expert guidance and resources to help you achieve your academic and professional goals. Explore how we can assist you in making your dreams a reality!</Typography>
                        <Typography  my={2} sx={{textDecoration:'underline', cursor:'pointer'}}>Reach Us</Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

function WhyLuminaVista(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', mx:'5vw', border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={'50px'} lineHeight={1}>Why Lumina Vista?</Typography>
            {/* <Box sx={{display:'flex', flexDirection:'row'}}> */}
                {/* <Divider orientation="vertical" sx={{height:'100%', alignSelf:'stretch', mr:'10vw'}}/> */}
            <Grid container rowGap={{xs:4, sm:5}} columnGap={2} sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', border:'0px solid black'}}>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <MenuBookOutlined/>
                            <Typography variant="h6">Real-Life Expertise</Typography>
                            <Typography>Our team includes students & professionals who came to Australia as students or migrants & achieved success.</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <AirplanemodeActiveOutlined/>
                            <Typography variant="h6">Support During Studies</Typography>
                            <Typography>We offer academic, personal & professional support, ensuring you thrive throughout your educational journey & beyond.</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <AnalyticsOutlined/>
                            <Typography variant="h6">Job Ready Programs</Typography>
                            <Typography>Our programs equip you with skills and practical experience through internships, enhancing your readiness for employment.</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <SettingsSuggestOutlined/>
                            <Typography variant="h6">Career Success Roadmap</Typography>
                            <Typography>We help craft personalized roadmaps to success, providing guidance & resources to achieve your professional goals.</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <CastForEducationOutlined/>
                            <Typography variant="h6">Networking Opportunities</Typography>
                            <Typography>Our services facilitate valuable connections that lead to employment and further professional development.</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{boxShadow:5, borderRadius:'16px'}} component={motion.div} whileHover={{scale:1.05}}>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'258px', height:'auto', px:'15px', py:'17px', gap:2}}>
                            <SchoolOutlined/>
                            <Typography variant="h6">Trusted Migration Advice</Typography>
                            <Typography>Tailored migration advice ensures a smooth transition to life and work in Australia, based on your unique circumstances.</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            {/* </Box> */}
        </Box>
    );
}

function MessageFromCEO(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', mx:10, border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={'4vw'} lineHeight={1}>Message from CEO</Typography>
        </Box>
    );
}

function FAQs(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', mx:'5vw', border:'0px solid red'}}>
            <Typography fontSize={'50px'} color={'#265D6B'} mb={'50px'} lineHeight={1}>FAQs</Typography>
            <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-evenly', alignItems:'center', gap:2}}>
                <Card sx={{boxShadow:5, borderRadius:'16px', width:'290px'}} component={motion.div} whileHover={{scale:1.02}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', py:'18px', px:'25px'}}>
                        <SouthEast fontSize="large"/>
                        <Typography variant="h4" my={1}>Read</Typography>
                        <Button variant="outlined" sx={{textTransform:'none', borderRadius:'15px', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}}>Learn More</Button>
                    </Box>
                </Card>
                <Card sx={{boxShadow:5, borderRadius:'16px', width:'290px'}} component={motion.div} whileHover={{scale:1.02}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', py:'18px', px:'25px'}}>
                        <SouthEast fontSize="large"/>
                        <Typography variant="h4" my={1} >Watch</Typography>
                        <Button variant="outlined" sx={{textTransform:'none', borderRadius:'15px', color:'black', borderColor:'black', ":hover":{color:'white', backgroundColor:'black'}}}>Learn More</Button>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
