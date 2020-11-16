const puppeteer = require('puppeteer');
const ceti = 'https://ase1.ceti.mx/tecnologo';

const inicio = require('./components/inicio');
const calificaciones = require('./components/calificaciones');
const horario = require('./components/horario');

const Scrapper = async (user, pass) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultTimeout(20000);
  await page.goto(ceti);
  await page.type('input[name=registro]', user);
  await page.type('input[name=password]', pass);
  await page.click('input[value="INGRESAR AL SISTEMA"]');
  try {
    await page.waitForNavigation();
  } catch (error) {
    return error;
  }

  const url = page.url();

  if (url === ceti + '//') {
    return false;
  } else {
    const inicio_data = await inicio(page);
    const calificaciones_data = await calificaciones(page);
    const horario_data = await horario(page);
    await browser.close();

    return [
      inicio_data.page_data.text,
      calificaciones_data.page_data.texts,
      horario_data.page_data.texts,
    ];
  }
};
// try {
//   await page.click('#jqi_state0_buttonOk');
// } catch (error) {
//   console.error(error);
// }

module.exports = Scrapper;
