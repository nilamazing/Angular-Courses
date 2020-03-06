const courseData = require('../assets/courses');
let course=require('./course');
module.exports.coursePayload={
    payload:[],
    populateData: function(){
        let keys = Object.keys(courseData.COURSES);
        if(keys.length>0){
            keys.forEach((k)=>{
                course=courseData.COURSES[k];
                this.payload.push(course);
            })
        }
    }
}