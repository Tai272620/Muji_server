import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    findById: async function (id) {
        try {
            let products = await prisma.products.findUnique({
                where: {
                    id: id
                }
            });
            return {
                message: "Get products success!",
                data: products
            }
        } catch (err) {
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },
    create: async function (newProduct) {
        try {
            const product = await prisma.products.create({
                data: newProduct
            })
            return {
                status: true,
                message: "Thêm sản phẩm thành công!",
                data: product
            }
        } catch (err) {
            console.log("err", err)
            return {
                status: false,
                message: "Lỗi không xác định!"
            }
        }
    },
}