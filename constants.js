let host = "http://localhost";
let port = "1337";
let url = host + ":" + port + "/api";
const isProduction = process.env.NODE_ENV == "production";
if (isProduction) {
  url = "https://theproductpersonbackend-production.up.railway.app/api";
}
export default url;
