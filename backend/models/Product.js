const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
productId: {
type: String
},

productName: {
type: String,
required: true
},

productCode: {
type: String,
required: true,
unique: true
},

category: {
type: String,
required: true
},

supplierName: {
type: String,
required: true
},

quantityInStock: {
type: Number,
min: 0,
required: true
},

reorderLevel: {
type: Number,
min: 1,
required: true
},

unitPrice: {
type: Number,
min: 0,
required: true
},

manufactureDate: {
type: Date
},

productType: {
type: String,
enum: ["Perishable", "Non-Perishable"]
},

status: {
type: String,
enum: ["Available", "Out of Stock"],
default: "Available"
}

},
{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);