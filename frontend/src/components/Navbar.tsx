import {Button, Typography, Grid, IconButton, Menu, MenuItem, Box, Avatar, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Instagram, Facebook, X, LinkedIn, YouTube } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// enum NavbarOpenMenu {
//     Services, Faq, About
// }
export default function Navbar(){

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);

    // const [servicesMenuOpen, setServicesMenuOpen] = useState<boolean>(false);
    // const [faqMenuOpen, setFaqMenuOpen] = useState<boolean>(false);
    // const [aboutMenuOpen, setAboutMenuOpen] = useState<boolean>(false);
    // const [navbarOpenMenu, setNavbarOpenMenu] = useState<null|NavbarOpenMenu>(null);
    const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuOpen = (event:any) => {
        setAnchorEl(event.currentTarget);
        setMobileMenuOpen(true);
      };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMenuOpen(false);
      };


    const handleSubmenuClose = (setThisMenuOpen:any)=>{
        console.log('Submenu close ran')
        setAnchorEl(null);
        setThisMenuOpen(false);
    }

    return (
        <>
            <Box sx={{display:{ xs: 'none', sm: 'flex' }, flexDirection:'row', justifyContent:'flex-end', gap: 5, py:1, pr: 8}}>
                <Instagram/>
                <Facebook/>
                <X/>
                <LinkedIn/>
                <YouTube/>
                <Typography component={'a'} onClick={()=>{}} sx={{cursor:'pointer'}}>News and articles</Typography>
                <Typography component={'a'} onClick={()=>{navigate('/events')}} sx={{cursor:'pointer'}}>Events</Typography>                   
            </Box>

            <Grid container sx={{border:'0px solid black', backgroundColor:'#265D6B', px:8, py:1}}>

                <Grid item border={'0px solid red'} xs={6}>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                        <Avatar src='/lvlogo.webp' sx={{height:'70px', width:'70px'}}/>
                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', ml:2}}>
                            <Typography color={'white'} fontSize={20} sx={{fontWeight:'bold', mb:0, pb:0}}>Lumina Vista</Typography>
                            <Typography color={'white'} fontSize={{xs:10, sm:15}} sx={{fontWeight:'bold', mt:0, pt:0}} >Illuminating Futures, Empowering Journeys</Typography>
                        </Box>
                        {/* <Card variant='outlined' onClick={function(){}} style={{border:'1px solid red', boxShadow:'none', cursor:'pointer', backgroundColor:'transparent'}}><Typography variant="h4" color='white'>LuminaVista</Typography></Card> */}
                        {/* <Image src={logo} width={100} height={20} alt=''/> */}
                    </Box>
                </Grid>

                <Grid item container xs={6} justifyContent='end' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/')}}>Home</Button>

                    <ServiceButton/>

                    <Button id='services-btn' sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/services')}} onMouseEnter={(event)=>{
                        setAnchorEl(event.currentTarget);
                        setServiceMenuOpen(true);
                    }} >Services</Button>
                    <Menu open={serviceMenuOpen} anchorEl={anchorEl} MenuListProps={{onMouseLeave:handleSubmenuClose}}>
                        <MenuItem>Study in Australia</MenuItem>
                        <MenuItem>Migrate to Australia</MenuItem>
                    </Menu>
                    
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/faqs')}} onMouseEnter={(event)=>{
                        setAnchorEl(event.currentTarget);
                        
                    }} onMouseLeave={handleSubmenuClose}>FAQ</Button>
                    <Menu open={false} anchorEl={anchorEl}>
                        <MenuItem>Study in Australia</MenuItem>
                        <MenuItem>Migrate to Australia</MenuItem>
                    </Menu>

                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/about')}}>About</Button>
                    <Button sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/contactus')}}>Contact Us</Button>
                </Grid>

                <Grid item container xs={6} sm={4} justifyContent='flex-end' sx={{display: {xs: 'flex', sm: 'none'}}}>
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen} sx={{ color:'white', }}>
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={mobileMenuOpen} onClose={handleMenuClose} sx={{width:'50vw', border:'1px solid black'}} >
                        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>Events</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>News and articles</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>About</MenuItem>
                        <Divider/>
                        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
                    </Menu>
                </Grid>

            </Grid>

        </>
    );
}

function ServiceButton(){

    const navigate = useNavigate();

    const [servicesAnchorEl, setServicesAnchorEl] = useState<null|HTMLElement>(null);

    function handleSubmenuClose(){
        setServicesAnchorEl(null);
    }

    return (
        <div style={{border:'1px solid black', alignContent:'center'}}>
            <Button id='services-btn' sx={{textTransform:'none', fontSize:15, fontWeight:'normal', color:'white', '&:hover':{color:'#aeefc5'}}} onClick={function(){navigate('/services')}} onMouseEnter={(event)=>{
                        setServicesAnchorEl(event.currentTarget);
                    }} >Services</Button>
            <Menu open={Boolean(servicesAnchorEl)} anchorEl={servicesAnchorEl} MenuListProps={{onMouseLeave:handleSubmenuClose}}>
                <MenuItem>Study in Australia</MenuItem>
                <MenuItem>Migrate to Australia</MenuItem>
            </Menu>
        </div>
    );
}