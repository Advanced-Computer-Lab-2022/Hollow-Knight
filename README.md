
# Hollow_Knight 🥷

A web application for online learning in which anyone can submit and attend courses from teachers online through pre-recorded courses, 
evaluations, quizzes, and exams to help students to become experts in their fields in no time with the help of many professional teachers and authors.  


## Motivation 💪

The creation of the project came after the realization of the struggles met in terms
of limitations of learning methods that students face in real life.
but with the online tool, We allowed more freedom and more options for learning 
methods, and a trustworthy experience that will guarantee expertise in your chosen field.


## Build Status 🔧

- The project is currently in development.
- The project needs Unit tests.
- handling asynchronous tasks such as sending emails and notifications.


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
## Badges

[![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)---------------------
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)]()---------------------
[![MONGODB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)---------------------
[![NODE.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)---------------------
[![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)---------------------
[![EXPRESS.JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)---------------------
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)


## Tech Stack

- **Client:** React

- **Server:** Node.js , Express , MongoDB

### Different Tech used to build the stack :

- VSCode
- Postman
- Mongoose
- Material-UI
- React
- Node.js
- Express
- MongoDB




## Screenshots


![Profile Page Edit for Instructor](https://user-images.githubusercontent.com/101879923/211217965-196519a3-3822-4956-9209-df4094cd9695.png)
### *Edit Profile Page for Instructor

![image3](https://user-images.githubusercontent.com/101879923/211219402-2daf3e0c-93cb-4774-ba04-ceaec231ca81.png)
### *Add a Course

![image2](https://user-images.githubusercontent.com/101879923/211218422-9bfab6f7-f1c2-4150-8bfd-6a110586ab7a.png)
### *Discount For Course

![Coursesdetails](https://user-images.githubusercontent.com/101879923/211218186-c54b7610-1028-4774-80d6-d088ed3ec08c.png)
### *Course Details

![Instructor_Reviews](https://user-images.githubusercontent.com/101879923/211218556-c2947d4a-d2e6-4cda-ba62-fb2ab43ee831.png)
### *Instructor_Reviews


![image4](https://user-images.githubusercontent.com/101879923/211219449-32e64cfa-dfe2-48ee-8205-92ee018b228d.png)
### *Searching for Instructor


![ViewAllcourses](https://user-images.githubusercontent.com/101879923/211218582-3c43d6b1-3cd6-42ba-b255-1e1110afdbb3.png)
### *View all courses

![ViewSubtitles](https://user-images.githubusercontent.com/101879923/211218614-2e2ad62b-7f66-4146-bc46-53956802dc0f.png)
### *View Course work page

![ViewMyCourses](https://user-images.githubusercontent.com/101879923/211218634-f1097cd1-ee32-4cd6-ac62-4cb313e80686.png)
### *View my courses


![image](https://user-images.githubusercontent.com/101879923/211218230-08d6f991-d6c5-41ea-aad3-82d0c0c70bb7.png)
### *Reporting page info
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



## Installation And Run Locally

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
## API References

### POST Login instructor

```http
  POST /api/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email of instructor |
| `password` | `string` | **Required**. Password of instructor |

#### Response of API Ref
```
{
  _id: new ObjectId("63a636466e75cb99a6b28b93"),
  email: 'instructor@hotmail.com',
  password: '$2b$10$RiaKeMNaQKsd.EcA74kZnu2eQ8zvzT/Es7R1AGg0SOJ2Ca5Ky3KRq',
  first_name: '',
  last_name: '',
  country: 'Albania',
  type: 'instructor',
  countryAbb: 'AL',
  gender: '',
  __v: 0
}
```
### POST payment secret

```http
  POST /api/trainees/create-payment-intent
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of the trainee |

Bearer token of the instructor

#### Response of API Ref
```
{
    "clientSecret": "pi_3MO4f4IVFRy206CW1mSboZ4q_secret_9Fq30CheAkkly9GSSuZ9DsH8X"
}

```

### POST resolve status for report

```http
  POST /api/admins/resolvereport
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` | **Required**. Change Status of report to resolved |

#### Response of API Ref
```
{
  comments: 'none',
  _id: new ObjectId("63a097656efd7f877a5df34e"),
  courseid: new ObjectId("639e3f21750de87c82b60541"), 
  traineeid: new ObjectId("639e3ee9750de87c82b6053a"),
  coursetitle: 'Physics302',
  traineemail: 'powe',
  reason: 'moral',
  status: 'resolved',
  createdAt: 2022-12-19T16:55:01.174Z,
  updatedAt: 2023-01-08T19:36:20.041Z,
  __v: 0
}
```


### POST Pending status for report

```http
  POST /api/admins/pendreport
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` | **Required**. Change Status of report to pending |


#### Response of API Ref
```
{
  comments: 'none',
  _id: new ObjectId("63a097656efd7f877a5df34e"),
  courseid: new ObjectId("639e3f21750de87c82b60541"),
  traineeid: new ObjectId("639e3ee9750de87c82b6053a"),
  coursetitle: 'Physics302',
  traineemail: 'powe',
  reason: 'moral',
  status: 'pending',
  createdAt: 2022-12-19T16:55:01.174Z,
  updatedAt: 2023-01-08T19:38:26.129Z,
  __v: 0
}
```


### GET Refunds in admin page

```http
  GET /api/admins/refunds
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email of instructor |
| `password` | `string` | **Required**. Password of instructor |

#### Response of API Ref
```
{
    _id: new ObjectId("63b4c315eadf1efce398c649"),
    courseid: new ObjectId("639e2cd34e2f0eef4f76a8c2"),
    traineeid: new ObjectId("63a4d28da9834c2d44f96eb8"),
    coursetitle: 'csen1',
    traineemail: 'podddffwes',
    createdAt: 2023-01-04T00:06:45.892Z,
    updatedAt: 2023-01-04T00:06:45.892Z,
    v: 0,
    courseprice: 2
  }
```



### POST Funds for course 

```http
  POST /api/admins/addfunds
```


#### Response of API Ref
```
{
  _id: new ObjectId("63a4d28da9834c2d44f96eb8"),
  userid: new ObjectId("63a4d28da9834c2d44f96eb6"),
  registeredcourses: [],
  wallet: 10,
  courseProgression: [],
  createdAt: 2022-12-22T21:56:29.262Z,
  updatedAt: 2023-01-08T19:35:06.328Z,
  __v: 0
}
```


### POST admin add refunds to the user

```http
  POST /api/admins/addfunds
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. id of user that added the refund to |

#### Response of API Ref
```
{
  _id: new ObjectId("63a4d28da9834c2d44f96eb8"),
  userid: new ObjectId("63a4d28da9834c2d44f96eb6"),
  registeredcourses: [],
  wallet: 10,
  courseProgression: [],
  createdAt: 2022-12-22T21:56:29.262Z,
  updatedAt: 2023-01-08T19:35:06.328Z,
  __v: 0
}
```

### POST Admin denying a refund for trainee

```http
  POST /api/admins/denyfunds

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of Admin |


#### Response of API Ref
```
{
    "message": "Refund has been rejected."
}
```

### POST adding course 

```http
  POST /api/trainees/addcoursetotrainee
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. Id of the trainee |
| `courseId` | `string` | **Required**. Id of course to be submitted to |

#### Response of API Ref
```
{
    "wallet": 0,
    "_id": "6399bf1dae8f70f3ecc124b9",
    "userid": "6399bf1dae8f70f3ecc124b7",
    "createdAt": "2022-12-14T12:18:37.526Z",
    "updatedAt": "2023-01-07T19:30:49.941Z",
    "__v": 0,
    "registeredcourses": [
        "6354eafa33c10fe74b8d81cd",
        "6354eb0f33c10fe74b8d81d1"
    ],
    "courseProgression": [
        {
            "emailSent": false,
            "courseId": "6354eafa33c10fe74b8d81cd",
            "progression": 0,
            "videos": [],
            "_id": "63b7017bead93765628ffaaa"
        },
        {
            "emailSent": false,
            "courseId": "6354eb0f33c10fe74b8d81d1",
            "progression": 0,
            "videos": [],
            "_id": "63b9c86950e1ef7f72d3bf0b"
        }
    ]
}
```



### Get a key for the user to use in the website

```http
  GET /api/trainees/config
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of the trainee |



#### Response of API Ref
```
{
    "publishableKey": "pk_test_51MIOuZIVFRy206CWZ2y4GxtysC1EJvBhsE9ZrpY41HSTVMrAzqs8wmjThDsf8IwM7NAaT7LGQkG3WLLG7nXuZv4t00buOKTD61"
} 

```


### POST Creating an admin by author

```http
  POST /api/admins/createadmin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email of admin |
| `password` | `string` | **Required**. Password of admin |
| `first_name` | `string` | **Required**. first name of the admin |
| `last_name` | `string` | **Required**. last name of the admin |
| `country` | `string` | **Required**. country of admin |
| `gender` | `string` | **Required**. gender of the admin |

#### Response of API Ref
```
{
  _id: new ObjectId("63bb1e0a5454d7a13effcb08"),
  email: 'Mohsen@gmail.com',
  password: '$2b$10$FxONYq5b2T9vgt4eaZ01dOXiNW2ZlcTPDYa4hNvkP33.hpi6a2bse',
  first_name: '',
  last_name: '',
  country: 'Algeria',
  type: 'admin',
  countryAbb: 'DZ',
  gender: '',
  __v: 0
}
```


### POST filter your courses based on discounts

```http
  POST /api/courses/selectdiscounts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `discount` | `string` | **Required**. discount of designated course |

#### Response of API Ref
```
{
  discount: {
    percent: 4,
    start_date: 2023-01-06T22:00:00.000Z,
    end_date: 2023-01-30T22:00:00.000Z
  },
  exam: { problems: [] },
  registered: false,
  _id: new ObjectId("63bb0b62ed6d24f673b7d23f"),
  title: 'Analysis',
  numberOfTrainees: 0,
  price: 300,
  subject: 'Physics',
  author: new ObjectId("63a636466e75cb99a6b28b95"),
  summary: 'good',
  total_hours: 6,
  overallRating: 0,
  maxProgress: 0,
  traineeProgression: 0,
  review: [],
  createdAt: 2023-01-08T18:28:50.896Z,
  updatedAt: 2023-01-08T19:54:32.598Z,
  __v: 0,
  published: 'true'
}
```


### POST register a corporate

```http
  POST /api/trainees/registercorporate
```

#### Response of API Ref
```
{
    "courseid": "6354ead933c10fe74b8d81c9",
    "traineeid": "6399bf1dae8f70f3ecc124b9",
    "coursetitle": "csen102",
    "traineemail": "madara44444@gmail.com",
    "_id": "63bb20b0bb48cd7cf19d3d29",
    "createdAt": "2023-01-08T19:59:44.162Z",
    "updatedAt": "2023-01-08T19:59:44.162Z",
    "__v": 0
}
```


### GET Instructor

```http
  GET/api/instructors/getinst
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |

#### Response of API Ref
```
{
    "contract": {
        "Status": "Accepted",
        "percent": 70
    },
    "_id": "6391b7c3360286b5e83f63db",
    "userid": "63a60a79a7ed1f566a983d69",
    "review": [
        {
            "rating": 2.5,
            "reviews": "bad",
            "traineeid": "6391b7e6360286b5e83f63dd",
            "_id": "6391c3b93342bcce90f62ed8"
        },
        {
            "rating": 5,
            "reviews": "ayhage",
            "traineeid": "6391c4fd3342bcce90f62f25",
            "_id": "6391c5803342bcce90f62f49"
        },
        {
            "rating": 4,
            "reviews": "vfdbgfb",
            "traineeid": "6394a75fd5b30411b87ff65a",
            "_id": "639f26f52b3cf31d02da4197"
        }
    ],
    "createdAt": "2022-12-08T10:09:07.497Z",
    "updatedAt": "2023-01-04T20:27:44.379Z",
    "__v": 0,
    "biography": "Doctor / Mathemaican / Computer Scientist at GUC ",
    "overallRating": 3.75
}
```


### PATCH update information of instructor

```http
  PATCH/api/instructors/updateinfo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `first_name` | `string` | **Required**. Update first_name of instructor |
| `last_name` | `string` | **Required**. Update last_name of instructor |
| `email` | `string` | **Required**. Update email of instructor |
| `biography` | `string` | **Required**. Update biography of instructor |
| `country` | `string` | **Required**. Update country of instructor |
| `password` | `string` | **Required**. Update Password of instructor |

#### Response of API Ref
```
{
  _id: new ObjectId("63a636466e75cb99a6b28b93"),
  email: 'instructor@hotmail.com',
  password: '$2b$10$RiaKeMNaQKsd.EcA74kZnu2eQ8zvzT/Es7R1AGg0SOJ2Ca5Ky3KRq',
  first_name: 'Inst',
  last_name: 'Mohey',
  country: 'Algeria',
  type: 'instructor',
  countryAbb: 'AL',
  gender: 'M',
  __v: 0
}
```



# POST Login instructor RETURN--------

```http
  PATCH/api/instructors/updatecontract
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email of instructor |
| `password` | `string` | **Required**. Password of instructor |

#### Response of API Ref
```
{
  _id: new ObjectId("63a636466e75cb99a6b28b93"),
  email: 'instructor@hotmail.com',
  password: '$2b$10$RiaKeMNaQKsd.EcA74kZnu2eQ8zvzT/Es7R1AGg0SOJ2Ca5Ky3KRq',
  first_name: '',
  last_name: '',
  country: 'Albania',
  type: 'instructor',
  countryAbb: 'AL',
  gender: '',
  __v: 0
}
```



### GET Instructor Courses teach

```http
  GET/api/instructors/viewmycourses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |


#### Response of API Ref
```
[
    {
        "discount": {
            "percent": 23,
            "start_date": "2023-01-22T22:00:00.000Z",
            "end_date": "2023-01-23T22:00:00.000Z"
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6391cc154f269db99ea6587c",
        "title": "Math101",
        "price": 2000,
        "subject": "Mathematics",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "Math basics and intro",
        "total_hours": 12,
        "overallRating": 3,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-08T11:35:49.441Z",
        "updatedAt": "2023-01-07T13:00:20.863Z",
        "__v": 0,
        "maxProgress": 51,
        "video": "N9udwF8AsGU",
        "published": "true",
        "name": "Mohamed Hossam "
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6391dca36873f0b6b784b6f8",
        "title": "Statistics And Probability",
        "price": 10000,
        "subject": "Mathematics",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "Hany",
        "total_hours": 123,
        "overallRating": 0,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-08T12:46:27.033Z",
        "updatedAt": "2023-01-06T20:08:37.423Z",
        "__v": 0,
        "video": "0F_UQF2gC_g",
        "published": "true"
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6391dcbb6873f0b6b784b6fa",
        "title": "Data Structures And Algorithms",
        "price": 100,
        "subject": "Computer Science",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "asdf",
        "total_hours": 1,
        "overallRating": 0,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-08T12:46:51.783Z",
        "updatedAt": "2023-01-06T20:17:45.266Z",
        "__v": 0,
        "video": "Y60CQMkLOE4",
        "published": "true"
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6399a8a386bfd4bab6513e11",
        "title": "Analysis and Design of Algorithms",
        "price": 213,
        "subject": "Computer Science ",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "Learn how to design fast, correct and Efficient Algorithms and compute their running time ",
        "total_hours": 12,
        "overallRating": 0,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-14T10:42:43.327Z",
        "updatedAt": "2022-12-27T21:45:08.522Z",
        "__v": 0,
        "published": "true"
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6399cfac889274c0dd1d6be4",
        "title": "ACL",
        "price": 2000,
        "subject": "Computer Science",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "amazing course",
        "total_hours": 36,
        "overallRating": 0,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-14T13:29:16.449Z",
        "updatedAt": "2023-01-07T13:01:07.752Z",
        "__v": 0,
        "video": "plTxhj51INM",
        "published": "true"
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "title": "Final",
            "maxGrade": 12,
            "problems": [
                {
                    "questions": "q1",
                    "answers": [
                        "a1",
                        "a2a3",
                        "wdw",
                        "sw"
                    ],
                    "solution": "sw",
                    "_id": "63b9af92d3ae8e8098ac37cd"
                }
            ]
        },
        "numberOfTrainees": 0,
        "published": "false",
        "registered": false,
        "_id": "63a78dc4acf04b76d400c350",
        "title": "CSEN 502 : Graphics",
        "price": 250,
        "subject": "DMET",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "updated2",
        "total_hours": 32,
        "overallRating": 0,
        "maxProgress": 3,
        "traineeProgression": 0,
        "review": [],
        "createdAt": "2022-12-24T23:39:48.631Z",
        "updatedAt": "2023-01-07T18:39:47.591Z",
        "__v": 0,
        "video": "ZRwoZKPNUZQ"
    },
    {
        "discount": {
            "percent": 5
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "registered": false,
        "_id": "63a875107b3e0efa5e5656d0",
        "title": "sdfds",
        "price": 100,
        "subject": "sdf",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "dfsf",
        "total_hours": 21,
        "overallRating": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "review": [],
        "createdAt": "2022-12-25T16:06:40.969Z",
        "updatedAt": "2023-01-07T13:50:38.378Z",
        "__v": 0,
        "published": "closed"
    },
    {
        "discount": {
            "percent": 20,
            "start_date": "2022-12-31T22:00:00.000Z",
            "end_date": "2023-02-28T22:00:00.000Z"
        },
        "exam": {
            "title": "Final ",
            "maxGrade": 105,
            "problems": []
        },
        "numberOfTrainees": 0,
        "published": "false",
        "registered": false,
        "_id": "63ab286762f30464b2bf50ef",
        "title": "DMET 501: MEDIA",
        "price": 260,
        "subject": "DMET",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "nothing",
        "total_hours": 36,
        "overallRating": 0,
        "maxProgress": 2,
        "traineeProgression": 0,
        "review": [],
        "createdAt": "2022-12-27T17:16:23.968Z",
        "updatedAt": "2023-01-05T13:04:47.361Z",
        "__v": 0
    },
    {
        "discount": {
            "percent": 0
        },
        "exam": {
            "problems": []
        },
        "registered": false,
        "_id": "63b8b29c7e31a6c0d68a4e58",
        "title": "CSEN 704",
        "numberOfTrainees": 0,
        "price": 2000,
        "subject": "CS",
        "author": "6391b7c3360286b5e83f63db",
        "name": "Mohamed  Samy",
        "summary": "nothing",
        "total_hours": 13,
        "overallRating": 0,
        "maxProgress": 0,
        "traineeProgression": 0,
        "review": [],
        "createdAt": "2023-01-06T23:45:32.684Z",
        "updatedAt": "2023-01-07T12:38:58.081Z",
        "__v": 0,
        "published": "true"
    }
]
```


### POST search for instructor 

```http
  POST/api/instructors/search
```

#### Response of API Ref
```
[
    {
        "discount": {
            "percent": 23,
            "start_date": "2023-01-22T22:00:00.000Z",
            "end_date": "2023-01-23T22:00:00.000Z"
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6391cc154f269db99ea6587c",
        "title": "Math101",
        "price": 2000,
        "subject": "Mathematics",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "Math basics and intro",
        "total_hours": 12,
        "overallRating": 3,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-08T11:35:49.441Z",
        "updatedAt": "2023-01-07T13:00:20.863Z",
        "__v": 0,
        "maxProgress": 51,
        "video": "N9udwF8AsGU",
        "published": "true",
        "name": "Mohamed Hossam "
    }
]
```


### PATCH new course 

```http
  PATCH/api/instructors/publishcourse
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. title of course |
| `price` | `double` | **Required**. price of course |
| `subject` | `string` | **Required**. the subject of the course |
| `summary` | `string` | **Required**. the summary |
| `total_hours` | `double` | **Required**. total credit hours for the course |

#### Response of API Ref
```
{
    "discount": {
        "percent": 23,
        "start_date": "2023-01-22T22:00:00.000Z",
        "end_date": "2023-01-23T22:00:00.000Z"
    },
    "exam": {
        "problems": []
    },
    "numberOfTrainees": 0,
    "traineeProgression": 0,
    "registered": false,
    "_id": "6391cc154f269db99ea6587c",
    "title": "Math101",
    "price": 2000,
    "subject": "Mathematics",
    "author": "6391b7c3360286b5e83f63db",
    "summary": "Math basics and intro",
    "total_hours": 12,
    "overallRating": 3,
    "contract": {
        "Status": "Pending",
        "percent": 0
    },
    "review": [],
    "createdAt": "2022-12-08T11:35:49.441Z",
    "updatedAt": "2023-01-07T13:00:20.863Z",
    "__v": 0,
    "maxProgress": 51,
    "video": "N9udwF8AsGU",
    "published": "true",
    "name": "Mohamed Hossam "
}
```


### PATCH finish certain course

```http
  PATCH/api/instructors/closecourse
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |


#### Response of API Ref
```
{
    "discount": {
        "percent": 23,
        "start_date": "2023-01-22T22:00:00.000Z",
        "end_date": "2023-01-23T22:00:00.000Z"
    },
    "exam": {
        "problems": []
    },
    "numberOfTrainees": 0,
    "traineeProgression": 0,
    "registered": false,
    "_id": "6391cc154f269db99ea6587c",
    "title": "Math101",
    "price": 2000,
    "subject": "Mathematics",
    "author": "6391b7c3360286b5e83f63db",
    "summary": "Math basics and intro",
    "total_hours": 12,
    "overallRating": 3,
    "contract": {
        "Status": "Pending",
        "percent": 0
    },
    "review": [],
    "createdAt": "2022-12-08T11:35:49.441Z",
    "updatedAt": "2023-01-08T19:53:22.908Z",
    "__v": 0,
    "maxProgress": 51,
    "video": "N9udwF8AsGU",
    "published": "true",
    "name": "Mohamed Hossam "
}
```


### POST Reviews of instructor

```http
  POST/api/instructors/viewreviews
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |


#### Response of API Ref
```
[
    {
        "discount": {
            "percent": 23,
            "start_date": "2023-01-22T22:00:00.000Z",
            "end_date": "2023-01-23T22:00:00.000Z"
        },
        "exam": {
            "problems": []
        },
        "numberOfTrainees": 0,
        "traineeProgression": 0,
        "registered": false,
        "_id": "6391cc154f269db99ea6587c",
        "title": "Math101",
        "price": 2000,
        "subject": "Mathematics",
        "author": "6391b7c3360286b5e83f63db",
        "summary": "Math basics and intro",
        "total_hours": 12,
        "overallRating": 3,
        "contract": {
            "Status": "Pending",
            "percent": 0
        },
        "review": [],
        "createdAt": "2022-12-08T11:35:49.441Z",
        "updatedAt": "2023-01-08T19:54:51.052Z",
        "__v": 0,
        "maxProgress": 51,
        "video": "N9udwF8AsGU",
        "published": "closed",
        "name": "Mohamed Hossam "
    }
```


### PATCH Answer for exam 

```http
  PATCH /api/trainees/getanswers
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token for trainee |


#### Response of API Ref
```
[
    {
        "questions": "question1",
        "answers": [
            "a",
            "b",
            "c"
        ],
        "solution": "a",
        "_id": "6387a191c449f452b850b0f5"
    }
]
```


### PATCH new edits for the trainee info

```http
  PATCH /api/trainees/updateinfo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of trainee |


#### Response of API Ref
```
{
    "message": "info updated successfully"
}
```


### GET Reports done by trainee

```http
  GET /api/trainees/viewmyreports
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of trainee |

#### Response of API Ref
```
[
    {
        "comments": "none",
        "_id": "63abd02d022a56d9a86bd362",
        "courseid": "6354ead933c10fe74b8d81c9",
        "userid": "6399bf1dae8f70f3ecc124b7",
        "coursetitle": "csen102",
        "email": "madara44444@gmail.com",
        "reason": "Technical",
        "details": "asdasd",
        "status": "unseen",
        "createdAt": "2022-12-28T05:12:13.798Z",
        "updatedAt": "2022-12-28T05:12:13.798Z",
        "v": 0
    },
    {
        "_id": "63bb2169d9665994b103a10b",
        "courseid": "6354ead933c10fe74b8d81c9",
        "userid": "6399bf1dae8f70f3ecc124b7",
        "coursetitle": "csen102",
        "email": "madara44444@gmail.com",
        "reason": "abcd",
        "details": "efgh",
        "status": "unseen",
        "comments": "none",
        "createdAt": "2023-01-08T20:02:49.747Z",
        "updatedAt": "2023-01-08T20:02:49.747Z",
        "v": 0
    }
]
```



### GET pay instructor

```http
  GET/api/instructors/getpay
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token of instructor |








## Contributing 😇

Contributions are what make the open source community such an amazing place to inspire and create. 
Any contributions you make are greatly appreciated ❤️.

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
## Feedback 👨‍💻

If you have any feedback, please reach out to us at [@MohamedHatem-0110](https://github.com/MohamedHatem-0110)


