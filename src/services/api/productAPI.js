import shoesAPI from 'services/axios/configAxios'

const PRODUCT_URL = {
  getAll: 'Product',
  getByKeyWord: 'Product?keyword=',
  getById: 'Product/getbyid',
}

const productAPI = {
  getAll: async () => {
    const result = await shoesAPI.get(PRODUCT_URL.getAll)
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return result.data.content
  },
}

export default productAPI
