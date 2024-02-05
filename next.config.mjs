/** @type {import('next').NextConfig} */

module.exports = {
    env: {
        SANITY_PROJECT_ID: '86tqg9pt',
    },
  }
const nextConfig = {
    images:{
        remotePatterns:[
            
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
              },
        ]
    }
};

export default nextConfig;
