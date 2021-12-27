import imagemin from 'imagemin';
import webp from 'imagemin-webp';
const outputFolder = './webp'
const produceWebP = async () => {
  await imagemin(['./*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['./*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()
