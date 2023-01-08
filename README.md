# Hollow_Knight

A web application for online learning in which anyone can submit and attend courses from teachers online through pre-recorded courses, 
evaluations, quizzes, and exams to help students to become experts in their fields in no time with the help of many professional teachers and authors.  


## Motivation

The creation of the project came after the realization of the struggles met in terms
of limitations of learning methods that students face in real life.
but with the online tool, We allowed more freedom and more options for learning 
methods, and a trustworthy experience that will guarantee expertise in your chosen field.


## Build Status
**Version** --0.0.1--


## code style

If you want to contrbuite to the project, We use a standard code style 
for the website in an object oriented way of naming and identation.

**Example**

```javascript
const { default: mongoose } = require('mongoose')
const Course = require('../models/Courses')


const CourseDetails = async (req,res) => {
    //const titles = req.body
    //const key =titles._id
    const{id}=req.params

   if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :'invalid course id'})
       }
    
     const courses = await Course.findById(id)
     
  
    
    if(!courses){
        return res.status(400).json({error :'course does not exist'})
    }
 
    res.status(200).json(courses)
} 
```
## Tech Stack

**Client:** React

**Server:** Node, Express


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Usage/Examples (Home Snippet)

```javascript
import React from "react";
import {Link} from "react-router-dom";
import SearchCourse from "../components/SearchCourse";

const Home = () => {
    return(
        <div className="home">
        <div>
            <h2>Home</h2>
        </div>
        <div>
        <Link to="/create">
        Create a user
        </Link>
        <br></br>
        <Link to="/viewallcourses">
        View All Courses
        </Link>
        <br></br>
        <Link to="/viewallcourseswithprices">
        View All Courses With Prices
        </Link>
        <br></br>
        <Link to="/selectcountry">
        Select a Country
        </Link>
        <br></br>


<br></br>
        <Link to="/addcourse">
        Create a course
        </Link>
        <br></br>
        <Link to="/instructor">
Search  Inst      </Link>
<br></br>
        <Link to="/SearchCoursePage">
                    Search       </Link>
        </div>
        </div>
    )
}

export default Home
```

## (Course search Front-End Snippet)

```javascript
import SearchCourse from "../components/SearchCourse";
import SearchInstructor  from "../components/Searchinstructor";

const SearchCoursePage = () => {
    return(
        <div className="Instructor">
        <div>
            <h2>Search</h2>
        </div>
        <div>
        <SearchCourse/>
        </div>
        </div>
    )
}

export default SearchCoursePage

```

## (Course search Back-End Snippet)
```javascript

const searchCourse = async (req, res) => {
    const {name}=req.body;
    const {title} = req.body
    const {subject,price} = req.body

    


   
    try{
        if (title){
            const course = await Course.find({title:title})
            return res.status(200).json(course)
        }
         if (subject){ 
            const course = await Course.find({subject:subject,author:name})
            return res.status(200).json(course)
        }
     
        
        if(price){
            const course = await Course.find({price:price,author:name })
            return res.status(200).json(course)
        }
        if(name){
            const course = await Course.find({author:name})
            return res.status(200).json(course)
        }


        throw new Error("Course not found")
    }
    catch (error) {
       return res.status(500).json({error: error.message})
    }



}

```


## Features


- Live previews
- Fullscreen mode



## Installation

Install Hollow-Knight with npm first. 
You need to install thee following packages to begin the process of modifiying or contributing by adding a feature.
```
1-
  npm install Hollow-Knight
  cd acltest
  cd backend 
  npm install express
  npm install mongoose
  npm install dotenv
```
Installing mongoose and dotenv, If you are going to contribute in any server relating feature, you want to add.

```
2-
  cd Hollow-Knight
  cd acltest
  cd frontend 
  npm install react
```
Installing react will help you in the development process of the Front-End part
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Contributing

Contributions are what make the open source community such an amazing place to inspire and create ❤️. 
Any contributions you make are greatly appreciated 😇.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again! 

    Fork the Project
    Create your Feature Branch (git checkout -b feature/Hollow-Knight-New-Feature)
    Commit your Changes (git commit -m 'Hollow-Knight-New-Feature')
    Push to the Branch (git push origin feature/Hollow-Knight-New-Feature)
    Open a Pull Request



## License

[MIT License](https://choosealicense.com/licenses/mit/)


## Authors

- [@hoss4](https://github.com/hoss4)
- [@MohamedHatem-0110](https://github.com/MohamedHatem-0110)
- [@mostaf7583](https://github.com/mostaf7583)
- [@IsmaielAmr](https://github.com/KoftaBofta)
- [@Youssef-Ehab01](https://github.com/Youssef-Ehab01)


## Credits

- [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
 - [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
 - [React Hooks -- functional components](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h)
 - [README file writing](https://www.mygreatlearning.com/blog/readme-file/)
 - [Node.js](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY)
 - [React introduction](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK)
 - [JWT authentication](https://www.youtube.com/watch?v=mbsmsi7l3r4)
