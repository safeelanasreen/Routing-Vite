import { useState,useEffect } from "react"
import ShimmerEffect from "../ShimmerEffect"
const About =()=>{
    // const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate data fetching
      setTimeout(() => {
        // Set data when fetched
        // setData({ /* your data here */ });
        setLoading(false);
      }, 500); 
    }, []);
    return(
        <>
          {loading ? (
        <ShimmerEffect />
      ) : (
        <div>
          {/* Render your actual component content here */}
          <h1>About</h1>
          {/* ... other content */}
        </div>
      )}
        </>
    )
}
export default About