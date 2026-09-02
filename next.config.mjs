/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Quando o catálogo real tiver fotos hospedadas fora do projeto,
    // adicione o domínio delas aqui (ex.: Supabase Storage, Cloudinary etc).
    remotePatterns: [],
  },
};

export default nextConfig;
