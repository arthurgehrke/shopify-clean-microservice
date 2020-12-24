import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 8081,
  shopify_api_key: process.env.SHOPIFY_API_KEY,
  shopify_api_password: process.env.SHOPIFY_API_PASSWORD,
  shopify_store_name: process.env.SHOPIFY_STORE_NAME
};
