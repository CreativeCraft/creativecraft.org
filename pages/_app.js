import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from './components/header'
import { NextSeo } from 'next-seo'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans antialiased text-gray-200">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <NextSeo
        title="CreativeCraft – Builder-focused Minecraft"
        description="Welcome to CreativeCraft! Enjoy an open creative world, massive plots, minigames and more. Join the fun!"
        canonical="https://creativecraft.org"
        openGraph={{
          url: 'https://creativecraft.org',
          title: 'CreativeCraft – Builder-focused Minecraft',
          description:
            'Welcome to CreativeCraft! Enjoy an open creative world, massive plots, minigames and more. Join the fun!',
          site_name: 'CreativeCraft',
        }}
        twitter={{
          handle: '@creativecraftus',
          site: '@creativecraftus',
          cardType: 'summary_large_image',
        }}
      />

      <div className="absolute top-0">
        <Header />
      </div>

      <Component {...pageProps} />
    </div>
  )
}
