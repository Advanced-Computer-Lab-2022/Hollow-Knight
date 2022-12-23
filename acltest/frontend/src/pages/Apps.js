import InstructorBar from "../components/InstructorBar";
import {Link} from "react-router-dom";
const { useState ,useEffect} = require("react");

const Apps = () => {
  
  const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId)
/*

    const urlmyreview=`/Reviews?userId=${userId}`
    const urlcoursereview=`/ViewReviews?userId=${userId}`
    const urladdcourse=`/addcourse?userId=${userId}`
    const urlsearchcourse=`/instructor?userId=${userId}`
   
    const urlallcourses=`/viewallcourses`
    const urlviewmycourses=`/viewmycourses?userId=${userId}`
    const urlviewrevenue=`/getpay?userId=${userId}`

*/
    

  const [instructors, setInstructors] = useState(null)
  const [contract,setContract]=useState("false")
  


  useEffect(() => {
    const handler = async () => {
      const params = new URLSearchParams(window.location.search);
      const userId = params.get('userId');
      //e.preventDefault()
      const response = await fetch(`/api/instructors/getinst?userId=${userId}`);
      const json = await response.json()
      //console.log(json)
      if (response.ok) {
        setInstructors(json)
      }
    
     
    }
    handler()
  }, [])
 
  console.log("hi")
  if(instructors){
  
   if(instructors.contract.Status=="Pending")
   {
    console.log("go")
    window.location.href = `/ViewContract?userId=${userId}`
   }
  }

    return(
        <div className="Apps">

       <InstructorBar x={0}/>
      <br></br>
      {/*
      <Link  to= {urladdcourse}> Add Course</Link>
      <br></br>

      <Link  to= {urlmyreview}> My Reviews</Link>
      <br></br>
      <Link  to= {urlcoursereview}> View Courses Reviews</Link>
      <br></br>
      <Link to ={urlsearchcourse} > Search  Instructor </Link>
      <br></br>
     
   
      <Link to ={urlallcourses} > View All Available Courses </Link>
      <br></br>
      <Link to ={urlviewmycourses} > View My Courses </Link>
     
        
      <br></br>
    <Link to ={urlviewrevenue}>View Monthly Revenues</Link>

    */ }
       
        </div>

    )
}



export default Apps;
