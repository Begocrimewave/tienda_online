const { model, Schema } = require('mongoose');
const clientSchema = new Schema({
	name: String,
	email: String,
	address: String,
	age: Number,
	active: Boolean,
	products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
	//relaciona productos con un unico objeto del modelo product
	//Relacion 1:1 --> Un cliente por producto {}
	//Relacion 1:n --> Un cliente con varios productos [{}]
});

module.exports = model('client', clientSchema);
//GET /api/clients/IDCLIENT/product/IDPRODUCT
