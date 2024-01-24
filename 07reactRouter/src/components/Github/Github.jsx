import { React, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])
    return (
        <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
            Github Follwers : {data.followers}
            <img src={data.avatar_url} alt="User Image" width={300}/>
        </div>
    )
}

export default Github

export const githubDetails = async ()=>{
    let response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}