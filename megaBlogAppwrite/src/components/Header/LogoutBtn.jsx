import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { authService } from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.Logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.log("Error in logout :: error", error);
            })
    }
    return (
        <button 
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn
