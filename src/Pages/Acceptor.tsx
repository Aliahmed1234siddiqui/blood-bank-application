import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Routers , Routes , Route , useNavigate, useParams } from 'react-router-dom'


import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';

import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import RedeemIcon from '@mui/icons-material/Redeem';
import SettingsIcon from '@mui/icons-material/Settings';
import AButton from '../Components/BUTTON/AButton';
import {fbGet, fbGet2, fbLogin, fbLogout } from '../config/Firbase/FirebaseMethod';
import ATable from '../Components/TABLE/ATable';
import { Filter } from '@mui/icons-material';





const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


export default function Acceptor(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const[details , setDetails] = useState<any>([])
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


const navigate = useNavigate()
let openPage=(route:string)=>{
navigate(`./${route}`)

}


 let signout = ()=>{
fbLogout().then(res=>{
  navigate('../../Login')
})
 }
 const [userdata, setUserData] = React.useState<any>([]);
const params = useParams();

let render = () => {
  console.log(params.id);
  fbGet(`users/${params.id}`)
    .then((res) => {
      setDetails(res);
      console.log(res);
      console.log(details);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Define a new function to fetch user data
const fetchData = () => {
  if (details.bloodG) {
    fbGet2("users")
      .then((res: any) => {
        let filteredData = [];
        if (details.bloodG === "O") {
          filteredData = res.map((x: any) => x);
        } else if (details.bloodG === "A") {
          filteredData = res.filter((x: any) => x.bloodG === "A" || x.bloodG === "AB");
        } else if (details.bloodG === "B") {
          filteredData = res.filter((x: any) => x.bloodG === "B" || x.bloodG === "AB");
        } else if (details.bloodG === "AB") {
          filteredData = res.filter((x: any) => x.bloodG === "AB");
        }
        setUserData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

useEffect(() => {
  render();
}, [params.id]);

// Add an effect to fetch user data when details change
useEffect(() => {
  fetchData();
}, [details.bloodG]);
  const drawer = (
    <div><h2  className='text-center fw-bolder m-3' >Acceptor</h2>
    <p className='text'>YOUR PERSONAL DETAILS</p>
      
      <p className='text-center'>
        <b>Name</b> : {details.userName}<br />
        <b>Contact</b> : {details.contact} <br />
        <b>Blood Group</b> : {details.bloodG} <br />
      </p>
      <div style={{display:"flex",justifyContent:"center"}}>
     <div className='text-center' style={{width:"200px",height:"300px",textAlign:"center"}}>
      <img style={{width:"100%",height:"100%"}} src="https://destechcreations.com/image/cache/catalog/products/Medical/MH-03-700x933.jpg" alt="" />
      </div>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      
        position="fixed"
        sx={{
          backgroundColor: 'red',
          color:"white",
          paddingTop:"4px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
           <InputGroup className="mb-1">
       <div>Acceptor</div>
       {/* <Form.Control width={75} placeholder='serach here' aria-label="Text input with checkbox" />
        <InputGroup.Text><SearchIcon />  </InputGroup.Text><CircleNotificationsIcon className='mx-2' />  <MarkChatUnreadIcon className='mx-2' />  <RedeemIcon className='mx-2'/>  <SettingsIcon className='mx-2'/>
       <SearchIcon /> */}
      </InputGroup>
     <AButton label='Logout' clicked={ signout}/>
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      <ATable cols={[
        {
          heading:"Name",
          key:"userName",
        },
        {
          heading:"Contact",
          key:"contact",
        },
        {
          heading:"Email",
          key:"email",
        },
        {
          heading:"Blood Gorup",
          key:"bloodG",
        }
      ]} data={userdata}/>
      </Box>
    </Box>
  );
}