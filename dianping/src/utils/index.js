import ajax from "./request"

// export const reqLikes = () => ajax(`/mock/products/likes.json`)
export const reqLikes = (pageNo) => ajax(`/mock/products/likes_${pageNo}.json`)
export const reqDiscounts = () => ajax('/mock/products/discounts.json')

// console.log('发起请求')
// console.log(reqLikes())
// console.log(reqDiscounts())