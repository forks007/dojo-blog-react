const Home = () => {
    const handleClick = (e) => {
        console.log("Hello Ninjas",e)
    }
    const handleClickAgain = (name,e) => {
        console.log(`Hello ${name} ${e.target} `)
    }
    return ( 
        <div className="home">
            <h2>homepage</h2>
            <button onClick={handleClick}>Click ME</button>
            <button onClick={(e)=>handleClickAgain("forks",e)}>Click ME again</button>
        </div>
     );
}
 
export default Home;