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
}