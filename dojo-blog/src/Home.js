import { useState , useEffect } from "react";
import BlogList from "./BlogList";



const Home = () => {
    const [blogs , setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

    ])

    const [name,setName] = useState("Mario")

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlog(newBlog);
    }
    
    useEffect(()=>{
        console.log("useeffect ran")
    },[blogs])
    
    return ( 
        <div className="home">
            
            <BlogList blogs = {blogs} title="All the Blogs" handleDelete={handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title="Marios Blogs" handleDelete={handleDelete}/>

            <p>The name is {name}</p>
            <button onClick={()=> setName("luigi")}>Click</button>
        </div>
     );
}
 
export default Home;