import { Box, Button, Card, CardContent, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../components/ContactUsSection";

export default function About(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <AboutUs/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <OurMission/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <OurStory/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <OurTeam/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <OurPartners/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <OurSuccessStories/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>
        </Box>
    );
}

function AboutUs(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>About Us</Typography>
                    <Typography pb={4}>Lumina Vista career counselling and mentorship services are dedicated to empowering students and graduates to achieve their dreams by providing comprehensive support at every stage of your career journey, ensuring you have the skills and confidence to succeed.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/AboutUs_Office_Talk.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function OurMission(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:8, pt:0}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Box component={'img'} src="/AboutUs_Studying_in_Groups.webp" sx={{width:'50%', borderRadius:'16px'}}/>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Our Mission</Typography>
                    <Typography pb={4}>At Lumina Vista, our mission is to offer personalized career guidance & support and assisting our clients in realizing their career aspirations through customized and extensive recourses. As trusted partners, we strive to facilitate the journey of those planning to come to Australia and empower them to achieve success.</Typography>
                </Card>
            </Box>
        </Box>
    );
}

function OurStory(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:8, pt:0}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'60%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Our Story</Typography>
                    <Typography pb={4}>Founded by our CEO, Lumina Vista Career Counselling and Mentorship has an inspiring origin story. Starting his career journey in Australia as an international student, Shivendra evolved into an accomplished IT leader with over 15 years of extensive industry experience. His journey, marked by various challenges, spurred the establishment of Lumina Vista's career counselling and mentorship services. Drawing from his experiences, Shivendra has tailored these services to empower students and graduates with practical knowledge for success.</Typography>
                    <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                        <ListItem sx={{display:'list-item', p:0}}><Typography>Successful launch of Lumina Vista IT service and consulting business.</Typography></ListItem>
                        <ListItem sx={{display:'list-item', p:0}}><Typography>Established Lumina Vista Career Counselling and Mentorship Services with a vision to support students in achieving their career goals.</Typography></ListItem>
                        <ListItem sx={{display:'list-item', p:0}}><Typography>Expanded our offerings to include comprehensive career counselling and job readiness programs.</Typography></ListItem>
                        <ListItem sx={{display:'list-item', p:0}}><Typography>Formed partnerships with leading educational institutions and corporations to enhance job opportunities for our clients.</Typography></ListItem>
                    </List>
                </Card>
                <Box component={'img'} src="/AbooutUs_Students_Sitting_on_Staircase.webp" sx={{width:'40%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function OurTeam(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:10, pt:0}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Box component={'img'} src="/Shivendradp.webp" sx={{width:'45%', height:'80vh', borderRadius:'16px'}}/>
                <Card sx={{display:'flex', flexDirection:'column', width:'55%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>Our Team</Typography>
                    <List sx={{listStyle:'disc', color:'black', pl:4, m:0}}>
                        <ListItem sx={{display:'list-item', p:0}}><Typography><b>Shivendra Singh (CEO):</b> With a background as an international student turned IT industry leader, Shivendra brings invaluable insight and experience to Lumina Vista.</Typography></ListItem>
                        <ListItem sx={{display:'list-item', p:0}}><Typography><b>Career Counsellors:</b> Our team of experienced career counsellors provides personalized guidance tailored to each client's unique aspirations and strengths.</Typography></ListItem>
                        <ListItem sx={{display:'list-item', p:0}}><Typography><b>Mentors:</b> Our mentors offer additional support and practical insights, guiding clients through strategic career decisions and professional growth opportunities.</Typography></ListItem>
                    </List>
                    <Box sx={{display:'flex', flexDirection:'row', gap:2, mt:2}}>
                        <Button variant="outlined" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', ":hover":{color:'white', backgroundColor:'black'}}}>Our Mentors</Button>
                        <Button variant="outlined" sx={{color:'black', borderColor:'black', borderRadius:'12px', textTransform:'none', ":hover":{color:'white', backgroundColor:'black'}}}>Our Counsellors</Button>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

function OurPartners(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:10}}>
            <Typography variant="h2" color={'#265D6B'} pb={5}>Our Partners</Typography>
            <Typography mb={4}>Lumina Vista collaborates with leading educational institutions, industry corporations, migration service providers, and organizations dedicated to professional development. These partnerships enrich our offerings, ensuring we provide comprehensive support and opportunities for our clients to thrive in their careers and lives in Australia.</Typography>
            <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay interval={1000} centerMode centerSlidePercentage={28} showIndicators={false} swipeable stopOnHover={false}>
                <Box sx={{height:'15vw', display: 'flex', justifyContent: 'center', alignItems: 'center', border:'0px solid red'}}>
                    <img src="/logo/freshworks.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Box>
                <Box sx={{height:'15vw', display: 'flex', justifyContent: 'center', alignItems: 'center', border:'0px solid red'}}>
                    <img src="/logo/gg.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Box>
                <Box sx={{height:'15vw', display: 'flex', justifyContent: 'center', alignItems: 'center', border:'0px solid red'}}>
                    <img src="/logo/sal.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Box>
                <Box sx={{height:'15vw', display: 'flex', justifyContent: 'center', alignItems: 'center', border:'0px solid red'}}>
                    <img src="/logo/whatfix.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </Box>
            </Carousel>
        </Box>
    );
}

function OurSuccessStories(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4}}>
            <Typography variant="h2" color={'#265D6B'} pb={5}>Our Success Stories</Typography>
            <Box sx={{display:'flex', flexDirection:'row', gap:4}}>
                <Card sx={{height:'72vh'}}>
                    <CardMedia image="/AboutUs_Student_Portrait.webp" sx={{height:'50%'}}/>
                    <CardContent>
                        <Typography>"The program has provided tremendous benefits, and I genuinely appreciate the effort and expertise you’ve shared. It has given me the tools and knowledge to navigate the job-hunting landscape successfully. Thank you for your support and for offering such a valuable resource."</Typography>
                    </CardContent>            
                </Card>            
                <Card sx={{height:'72vh'}}>
                    <CardMedia image="/AboutUs_Student_Girl.webp" sx={{height:'50%'}}/>
                    <CardContent>
                        <Typography>"I'm pleased to share that the Job Ready Program has significantly boosted my professional and personal growth. Its well-structured approach, relevant content, and tailored support provide excellent networking opportunities, ensuring effective career advancement."</Typography>
                    </CardContent>            
                </Card>            
                <Card sx={{height:'72vh'}}>
                    <CardMedia image="/AboutUs_Student_Boy.webp" sx={{height:'50%'}}/>
                    <CardContent>
                        <Typography>"The Mentorship Program has been instrumental in my professional journey. Its personalized guidance, comprehensive resources, and strong support network have equipped me with the skills and confidence to achieve my career goals. I highly recommend this program to anyone looking to advance their career."</Typography>
                    </CardContent>            
                </Card>            
            </Box>
        </Box>
    );
}