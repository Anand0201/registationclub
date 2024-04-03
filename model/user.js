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
        coderating:{ type: String, required: true },
        language:{ type: Array, required: true },
        beforeparticipate:{ type: String, required: true },
    },
    codingexperectations:{ type: String, required: true },
    availability: {
        hour:{ type: Number, required: true },
        week:{ type: Array, require: true }
    },
    additionalinfo:{
        type: String,
        required: true
    }
});

exports.student =  mongodb.model('Stu', student);
