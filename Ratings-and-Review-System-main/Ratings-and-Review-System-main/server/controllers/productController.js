class ProductController {
    constructor(productModel) {
        this.productModel = productModel;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.productModel.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }

    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await this.productModel.findByPk(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error });
        }
    }

    async createProduct(req, res) {
        const { name, description } = req.body;
        try {
            const newProduct = await this.productModel.create({ name, description });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    }

    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, description } = req.body;
        try {
            const [updated] = await this.productModel.update({ name, description }, {
                where: { id }
            });
            if (updated) {
                const updatedProduct = await this.productModel.findByPk(id);
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    }

    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            const deleted = await this.productModel.destroy({
                where: { id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error });
        }
    }
}

export default ProductController;