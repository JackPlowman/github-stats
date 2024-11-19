import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GitHub Stats Dashboard',
    short_name: 'GH Stats Dashboard',
    description: 'A dashboard to view Jack\'s GitHub stats',
    start_url: '/github-stats',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
