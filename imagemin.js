/* eslint-disable */

const
  imagemin = require('imagemin-keep-folder'),
  imageminMozjpeg = require('imagemin-mozjpeg'),
  imageminPngquant = require('imagemin-pngquant'),
  imageminGifsicle = require('imagemin-gifsicle');

const imageBuild = () => {
  imagemin(['src/images/**/*.{jpg,png,gif,svg,ico}'], {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.65, 0.8] }),
      imageminGifsicle(),
    ],
    replaceOutputDir: output => {
      return output.replace(/images\//, '../dist/assets/images/')
    }
  }).then(() => {
    console.log('Images optimized');
  });
}

imageBuild()