/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// https://stackoverflow.com/questions/65487914/error-image-optimization-using-next-js-default-loader-is-not-compatible-with-n
// https://github.com/cyrilwanner/next-optimized-images
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules')(['@datability/8ui'])

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  // .html doesn't work
  // https://stackoverflow.com/questions/63591544/next-js-how-to-make-links-work-with-exported-sites-when-hosted-on-aws-cloudfron
  // AND need to reconfigure cloudfront origin to s3-website instead of native s3 URL!!
  trailingSlash: true,
}

const enhancedNextConfig = withPlugins(
  [
    withTM,
    optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: 'src/images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['png'], //'jpeg', 'svg', 'webp', 'gif'
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: true,
      // mozjpeg: {
      //   quality: 80,
      // },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      // gifsicle: {
      //   interlaced: true,
      //   optimizationLevel: 3,
      // },
      // svgo: {
      //   // enable/disable svgo plugins here
      // },
      // webp: {
      //   preset: 'default',
      //   quality: 75,
      // },
    },
  ],
  nextConfig,
)

module.exports = enhancedNextConfig
