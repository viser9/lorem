import AppBar from '@mui/material/AppBar';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
function Appbar(){
  const navigate = useNavigate()
  // useEffect(()=>{
  //   fetch("http://localhost:3000/admin/me",{
  //     method:"GET",
  //     headers:{
  //       "Authorization":"Bearer "+localStorage.getItem("token")
  //     }
  //   }).then(res => res.json())
  //   .then(data => {
  //     if(data.username)
  //       setUserEmail(data.username)
  //   })
  // },[])
    return(
      <AppBar position="static" sx={{flexGrow:4,backgroundColor:'gray'}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h6" component="div" style={{margin:3,marginLeft:10}} sx={{flexGrow:1}}>
          MARKET
        </Typography>
        <Button 
          color="inherit"
          onClick={()=>{
            navigate('/addcourses')
          }}
        >
          Add Location
        </Button>
        <Button 
          color="inherit"
          onClick={()=>{
            navigate('/courses')
          }}
        >
          Visit
        </Button>
      </div>
    </AppBar>
    
    )
  
}

export default Appbar