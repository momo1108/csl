const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/wellcome', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{console.log('연결!')})
    .catch((err)=>{console.log(err)});

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'JavaScript',
        author: 'Tony',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();
