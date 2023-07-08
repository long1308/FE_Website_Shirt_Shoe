import { Iproduct } from "../../interface/product";
import insntance from "../config";
const productService = {
  getAllProducts: async (): Promise<Iproduct[]> => {
    try {
      const response = await insntance.get("/products");
      return response.data.product.docs;
    } catch (error) {
      throw new Error("Error retrieving products");
    }
  },
  addProduct: async (product: Iproduct): Promise<Iproduct> => {
    try {
      const response = await insntance.post("/products", product);
      return response.data;
    } catch (error) {
      throw new Error("Error adding product");
    }
  },
  updateProduct: async (product: Iproduct): Promise<Iproduct> => {
    try {
      const response = await insntance.put(`/products/${product._id}`, product);
      return response.data;
    } catch (error) {
      throw new Error("Error updating product");
    }
  },
  deleteProduct: async (productId: string): Promise<void> => {
    try {
      await insntance.delete(`/products/${productId}`);
    } catch (error) {
      throw new Error("Error deleting product");
    }
  },
};

export default productService;
