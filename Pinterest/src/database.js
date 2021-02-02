const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ThImages', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));