import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);



    return ( 

        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <div>This blog is written by { blog.author}</div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;