const express = require('express')
const mongodb = require('mongoose')
const { student } = require( './model/user' );
const app = express();

app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Connect to MongoDB database
mongodb.connect('mongodb+srv://anandjethava538:Anand123@cluster0.ujbaulb.mongodb.net/Codingclub');
console.log("mongodb connected");



app.get('/', (req, res) => {
    res.render('coding_club_registeration');
})

app.post('/submitRegistration', async (req, res) => {

    const { full_name, student_id, emailid, phone, Program, semester, spi, coding_proficiency, languages, coding_experience, coding_expectations, code_hour, availability, additional_info } = req.body;
    const existingStudent = await student.findOne({ 'personalinformation.email': emailid });
    if (existingStudent) {
        return res.status(400).send();
    }
    let newStudent = new student ({ personalinformation: {name: full_name, 
        studentID : student_id, 
        email: emailid, 
        phone: phone
        },
    acadamic:{
        Department: Program, 
        semester: semester, 
        year: year, 
        spi: spi
    },
    codeexperience:{
        coderating: coding_proficiency, 
        language: languages,
        beforeparticipate: coding_experience
    }, 
    codingexperectations: coding_expectations,
    availability:{
        hour: code_hour, 
        week: availability
    }, 
    additionalinfo: additional_info });
    await newStudent.save()
    console.log('user register successfully complated')
    res.redirect('https://coding-club-sltiet-i55q.onrender.com/')

})

app.listen(2010, () => {
    console.log("Server is running on port 2010");
});
