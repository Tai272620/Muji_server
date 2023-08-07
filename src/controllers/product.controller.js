import productModel from '../models/product.model';

export default {
    findById: async function (req, res) {
        try {
            let result = await productModel.findById(parseInt(req.params.id));

            return res.status(200).json({
                message: result.message,
                data: result.data
            })

        } catch (err) {
            console.log("err", err);
            return res.status(500).json({
                message: "Lỗi không xác định!"
            })
        }
    },
}