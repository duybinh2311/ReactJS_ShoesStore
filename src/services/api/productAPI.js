import shoesAPI from 'services/axios/configAxios'

const PRODUCT_URL = {
  getAll: 'Product',
  getById: 'Product/getbyid?id=',
}

const productAPI = {
  getAll: async (fakeLoading = true) => {
    const result = await shoesAPI.get(PRODUCT_URL.getAll)
    const dataConvert = result.data.content.map((product) => {
      product.categories = JSON.parse(product.categories)
      return product
    })
    if (fakeLoading) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    return dataConvert
  },
  getById: async (id) => {
    const result = await shoesAPI.get(`${PRODUCT_URL.getById}${id}`)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return result.data.content
  },
}

export default productAPI
