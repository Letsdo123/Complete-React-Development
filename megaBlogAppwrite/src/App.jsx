import { useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux'
import { authService } from './appwrite/auth'
import { login, logout } from './store/authSlice'
import {Header,Footer} from './components'
function App() {
  // For accessing the env variable in vite application
  // console.log(config.appwriteUrl);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({
            userData: userData
          }))
        }
        else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log("Error in authentication :: error", error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return !loading ? (
    <>
      <h2>Blog app with appwrite</h2>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className="w-full block">
          <Header/>
          <main>
            {/* Outlet will be updated here */}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : 
  (<>
    <p>You didn't login yet</p>
  </>)
}

export default App
