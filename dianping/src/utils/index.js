import ajax from "./request"

export const reqLikes = (pageNo) => ajax(`/mock/products/likes_${pageNo}.json`)
export const reqDiscounts = () => ajax('/mock/products/discounts.json')
export const reqProductDetail = (id) => ajax(`/mock/product_detail/${id}.json`)
export const reqPolularKeywords = () => ajax(`/mock/keywords/popular.json`)
export const reqRelatedKeywords = (text) => ajax(`/mock/keywords/related.json?keyword=${text}`)
export const reqRelatedShops = (keyword) =>ajax(`/mock/shops/related.json?keyword=${keyword}`)
