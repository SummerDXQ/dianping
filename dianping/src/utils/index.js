import ajax from "./request"

export const reqLikes = (pageNo) => ajax(`/mock/products/likes_${pageNo}.json`)
export const reqDiscounts = () => ajax('/mock/products/discounts.json')
export const reqProductDetail = (id) => ajax(`/mock/product_detail/${id}.json`)