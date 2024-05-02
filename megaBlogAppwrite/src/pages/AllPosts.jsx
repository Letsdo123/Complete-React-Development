import React, { useEffect, useState } from 'react'
import service from '../appwrite/db_config'
import { Container, PostCard } from '../components'
function AllPosts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [])
    useEffect(() => {
        console.log('Updated posts:', posts);
    }, [posts]);
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
