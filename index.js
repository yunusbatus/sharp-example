const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// import partials as Buffer data
const background = fs.readFileSync(path.join(__dirname, "images/face.png"));
const mouth = fs.readFileSync(path.join(__dirname, "images/mouth.png"));
const eyes = fs.readFileSync(path.join(__dirname, "images/eyes.png"));

/**
 * @function composite => https://sharp.pixelplumbing.com/api-composite
 */
const images = [{ input: mouth }, { input: eyes }];

/**
 * Sharp'a ilk olarak kullanacağımız imajı veriyoruz. Bu genelde fotoğraflar birleştirildiği zaman
 * en arkaya gelecek imaj oluyor. Birden fazla fotoğrafı, nesneyi ya da metni composite() fonksiyonunu kullanarak
 * ilk başta verdiğimiz imaj üzerine yapıştırabiliriz.
 *
 * composite() fonksiyonu parametre olarak içerisinde obje tutan bir Array alıyor.
 */

/**
 * @param {Buffer|String} background => İşlem uygulanacak imaj (En alttaki katman)
 */
sharp(background)
  .composite(images)
  .png()
  .toFile(path.join(__dirname, "test.png"));

/* sharp(background).composite(images).png().toBuffer((err, buffer, data) => {
    
     // Burada oluşan imajın bufferını kullanarak upload edebilirsin istediğin bir sunucuya
      
})*/
