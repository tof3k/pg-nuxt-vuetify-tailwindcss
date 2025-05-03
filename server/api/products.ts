import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_API_URL!,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
})

export default defineEventHandler(async () => {
  const res = await api.get('products')
  return res.data
})
