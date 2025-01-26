/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        // Aplica esta configuración CORS a todas las rutas API
        source: "/(.*)", // Asegúrate de que tu ruta coincida con el patrón que estás utilizando
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Permite todas las fuentes (puedes restringir a una URL específica)
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
