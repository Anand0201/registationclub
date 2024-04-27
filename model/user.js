const mongodb = require('mongoose')

const student = mongodb.Schema({
    personalinformation:{
        name: { type: String, required: true },
        studentID: { type: String, required: true },
        email: { type: String, required: true },
        phone:{ type: String, required: true }
    },
    acadamic:{
        Department: { type: String, required: true },
        semester: { type: String, required: true },
        spi:{ type: String, required: true },
    },
    codeexperience:{
        coderating:{ type: String },
        language:{ type: Array },
        beforeparticipate:{ type: String },
    },
    codingexperectations:{ type: String },
    availability: {
        hour:{ type: Number },
        week:{ type: Array }
    },
    additionalinfo:{
        type: String
    }
});

exports.student =  mongodb.model('Stu', student);
