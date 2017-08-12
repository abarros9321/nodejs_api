var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NotaSchema = new Schema({
	title: 'string',
	type: 'string',
	description: 'string',
	body: 'string'
});

NotaSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});

var model = mongoose.model('nota', NotaSchema);

module.exports = model;