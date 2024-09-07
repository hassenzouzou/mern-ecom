import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  find(): unknown;
  insertMany(products: { title: string; image: string; price: number; stock: number; }[]): unknown;
  title: string;
  image: string;
  price: string;
  stock: number;
}

const productSchema = new Schema<number, IProduct>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true, default: 0 },
});

const productModel = mongoose.model<number, IProduct>("Product", productSchema);

export default productModel;
