var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    name: String,
    username: { type: String, required: true, unique: true },
    
});

var User = mongoose.model('User', UserSchema);

// on every save, add the date
UserSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.updatedAt = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.createdAt = currentDate;
    next();
});

module.exports = User;
