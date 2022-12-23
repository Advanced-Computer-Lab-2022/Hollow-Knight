


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card} from "@mui/material";


const { useState } = require("react");

const ExQuestion = (problem) => {
    console.log(problem.problem)
    var problems =problem.problem
 
  const [answer,setAnswer] = useState("");


  

  
  return (
    <div className="viewanswers">
    
 
<Card sx={{marginTop:1, marginBottom:3}}

>
            <FormControl 
            
            sx={{marginTop:2,marginBottom:3,marginLeft: 30}}>
            <FormLabel sx={{marginBottom:3}}> {problems.questions}</FormLabel> 
         
            <RadioGroup value={answer} onChange={(e) => setAnswer(e.target.value)}  >
            
            <FormControlLabel  value={ problems.answers[0]} control={<Radio/>}  label={"a : "+problems.answers[0] } />
            <FormControlLabel value={ problems.answers[1]} control={<Radio/>}  label={ "b : "+problems.answers[1]}/>
            <FormControlLabel value={ problems.answers[2]} control={<Radio/>}  label={ "c : "+problems.answers[2]}/>
            <FormControlLabel value={ problems.answers[3]} control={<Radio/>}  label={ "d : "+problems.answers[3]} />
        
            </RadioGroup>
          
            </FormControl>
            </Card>      

       
         
        
    </div>
  );
};

export default ExQuestion;
