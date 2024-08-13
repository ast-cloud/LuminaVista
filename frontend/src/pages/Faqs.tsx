import { ExpandLess, ExpandMore, ExpandMoreOutlined, Search } from "@mui/icons-material";
import { Box, Button, Card, Collapse, Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import ContactUsSection from "../components/ContactUsSection";
import { useState } from "react";

const FAQHeaders = ["Company", "Study in Australia", "Life and work in Australia", "Career counselling", "Mentorship programs", "Internship", "Visa assistance", "Pre-Departure orientation", "Relocation support", "Contact Us"];
// enum FAQHeads{Company, Study_in_Australia, Life_and_work_in_Australia, Career_counselling, Mentorship_programs, Internship, Visa_assistance, Pre_Departure_orientation, Relocation_support, Contact_Us};
const FAQQnA = [
    [
        ["What is Lumina Vista?", "Lumina Vista is a comprehensive service provider for international students and professionals, offering support in education, career counseling, mentorship, and migration services in Australia."],
        ["Who can use Lumina Vista's services?","Our services are designed for international students, recent graduates, and professionals looking to study, work, or settle in Australia."],
        ["How do I get started with Lumina Vista?","You can get started by contacting us through our website or scheduling a consultation with one of our advisors."]
    ],
    [
        ["What are the benefits of studying in Australia?", "Australia offers high-quality education, cultural diversity, global recognition of degrees, and excellent opportunities for research and internships."],
        ["How does Lumina Vista help with university applications?","We provide detailed assistance with applications, including essay writing, document preparation, and submission tracking, ensuring you meet all deadlines and requirements."],
        ["Can you help me find scholarships?", "You can get started by contacting us through our website or scheduling a consultation with one of our advisors."],
    ],

];

export default function FAQs(){
    return (
        <Box sx={{display:'flex', flexDirection:'column'}}>
            <FAQSection/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <StraightFromOurExperts/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <AnswerToAllYourDoubts/>
            <Divider sx={{mt:8, mb:5, width:'90vw', alignSelf:'center'}}/>
            <ContactUsSection/>

        </Box>
    );
}

function FAQSection(){
    return (
        <Box sx={{display:'flex', flexDirection:'column', px:4, pt:4}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                <Card sx={{display:'flex', flexDirection:'column', width:'50%', borderRadius:'16px', pt:4, px:4}}>
                    <Typography variant="h2" color={'#265D6B'} pb={4}>FAQs</Typography>
                    <Typography pb={4}>Here, you'll find answers to common questions about our services, processes, and how we can support your journey. Whether you're a student, professional, or looking to migrate, we have the information you need. If you don't find what you're looking for, feel free to contact us directly.</Typography>
                    <Button variant="outlined" size="large" sx={{color:'black', borderColor:'black', borderRadius:'16px', textTransform:'none', width:'40%', px:2, ":hover":{color:'white', backgroundColor:'black'}}}>Book a free session now</Button>
                    <ExpandMoreOutlined sx={{fontSize:'90px', m:0, p:0, textShadow:5}}/>
                </Card>
                <Box component={'img'} src="/FAQs_Creative_Thoughts.webp" sx={{width:'50%', borderRadius:'16px'}}/>
            </Box>
        </Box>
    );
}

function StraightFromOurExperts(){
    return (
        <Card sx={{width:'92vw', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column', mx:10, my:8}}>
                <Typography>STRAIGHT FROM OUR EXPERTS !</Typography>
                <Divider sx={{mt:2, mb:4}}/>
                <Typography mb={6}>We've got the answers to your burning questions, all wrapped up in easy-to-digest videos. Whether you're curious about our services or just need a bit of guidance, we’re here to help. Dive in and get the info you need, and if you still have questions, give us a shout!</Typography>
                <iframe width={'28%'}  src="https://www.youtube.com/embed/TrnLCFsN5i8" style={{border:'none'}}/>
            </Box>            
        </Card>
    );
}

function AnswerToAllYourDoubts(){
    return (
        <Card sx={{width:'92vw', borderRadius:'16px', boxShadow:5, alignSelf:'center'}}>
            <Box sx={{display:'flex', flexDirection:'column', mx:10, my:8}}>
                <Typography>ANSWER TO ALL YOUR DOUBTS !</Typography>
                <Divider sx={{mt:2, mb:4}}/>
                <Typography mb={6}>Got questions? We've got answers! Browse through to find everything you need to know about our services, and your journey in Australia. If something’s still on your mind, don’t hesitate to reach out. We’re here to help!</Typography>
                <TextField size="small" sx={{width:'25%', alignSelf:'end'}} InputProps={{startAdornment:(<InputAdornment position="start"><Search/></InputAdornment>)}}/>
                <FAQData/>
            </Box>
        </Card>
    );
}

function FAQData(){

    const [selectedFAQHeaderIndex, setSelectedFAQHeaderIndex] = useState(0);
    const [openedQuestionIndex, setOpenQuestionIndex] = useState(0);
    return (
        <Box sx={{display:"flex", flexDirection:'column', gap:4}}>
            <Grid container columnGap={2} rowGap={1} sx={{mt:4}}>
                {
                    FAQHeaders.map((title, index)=>(<Grid item>
                        <Typography component={'a'} noWrap fontWeight={(index===selectedFAQHeaderIndex)?'bold':'normal'} fontSize={'15px'} sx={{cursor:'pointer'}} onClick={()=>{setSelectedFAQHeaderIndex(index)}}>{title}</Typography>
                    </Grid>))
                }
            </Grid>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                {
                    FAQQnA[selectedFAQHeaderIndex].map((OneQandA, index, arr)=>{
                        
                        return <Box display={'flex'} flexDirection={'column'} gap={1}>
                            <Box onClick={()=>{setOpenQuestionIndex(index)}} sx={{display:'flex', flexDirection:'row', cursor:'pointer'}}>
                                <Typography color='black'>{OneQandA[0]}</Typography>
                                &nbsp;&nbsp;
                                {(openedQuestionIndex===index)?<ExpandLess sx={{color:'black'}}/>:<ExpandMore sx={{color:'black'}}/>}
                            </Box>
                            <Collapse in={index==openedQuestionIndex}>
                                <Typography fontSize={'15px'}>{OneQandA[1]}</Typography>
                            </Collapse>
                            {index!==(arr.length-1) && <Divider sx={{my:2}}/>}
                        </Box>
                    })
                }
                
            </Box>
        </Box>
    );
}