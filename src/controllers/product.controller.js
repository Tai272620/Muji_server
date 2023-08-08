import productModel from '../models/product.model';
import { uploadFileToStorage } from '../meobase';
import fs from 'fs';


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
    create: async (req, res) => {
        // console.log("req.body", req.body);

        let productInforFormat = JSON.parse(req.body.product_infor);

        // xử lý avatar
        let avatarProcess = await uploadFileToStorage(req.files[0], "products", fs.readFileSync(req.files[0].path));
        productInforFormat.avatar = avatarProcess;
        fs.unlink(req.files[0].path, (err) => {

        })
        req.files.splice(0, 1);
        // console.log("productInforFormat", productInforFormat);
        let product = productInforFormat;
        try {
            /* Gọi model xử lý database */
            let result = await productModel.create(product);
            return res.status(result.status ? 200 : 214).json(result)
            // console.log("result", result)
        } catch (err) {
            return res.status(500).json({
                message: "Lỗi xử lý!"
            })
        }
    }
}