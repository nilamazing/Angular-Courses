const app=require('express')();
const bodyParser=require('body-parser');
const courseData = require('./assets/courses');
const coursePayload=require('./entities/coursesPayload');


const PORT=8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.redirect('/courses');
});
app.get('/courses',(req,res)=>{
  if(courseData && courseData.COURSES){
    let keys = Object.keys(courseData.COURSES);
    if(keys.length>0){
      console.log("Valid Courses Payload");
      coursePayload.coursePayload.populateData();
      //let jsonCoursePayloadData = JSON.stringify(coursePayload.coursePayload);
      res.status(200).json(coursePayload.coursePayload);
      // console.log(jsonCoursePayloadData);
    }
  }
});

app.listen(PORT,()=>{console.log(`The Server is up and listening on ${PORT}`)});
