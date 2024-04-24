import { useEffect, useState } from 'react';
import './App.css'
import config from './config/config';
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
function App() {
  // For accessing the env variable in vite application
  // console.log(config.appwriteUrl);
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    
  },[])
  return (
    <> 
      <h2>Blog app with appwrite</h2>
    </>
  )
}

export default App
