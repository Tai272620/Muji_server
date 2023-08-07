import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
    findByCategory: async function (category_id) {
        try {
            let products = await prisma.products.findMany({
                where: {
                    category_id: category_id
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
}