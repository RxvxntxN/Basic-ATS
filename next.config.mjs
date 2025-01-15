/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'assets.whichcar.com.au',
        port: '', 
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'e1.pxfuel.com',
        port: '', 
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'autopremiumgroup.ru',
        port: '', 
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: [
//         'avatars.mds.yandex.net',
//         'assets.whichcar.com.au',
//       ],
//     },
//   };
  
//   export default nextConfig;
  