const ceti = 'https://ase1.ceti.mx/tecnologo';

const calificaciones = async (page) => {
  await page.goto(ceti + '/tgoalumno/calificaciones');

  const page_data = await page.evaluate(() => {
    const texts = [];

    try {
      let $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(4) > td`
      );

      const text1 = {};

      let clave = $columns[0].innerText;
      text1['clave'] = clave;

      let nivel = $columns[1].innerText;
      text1['nivel'] = nivel;

      let materia = $columns[2].innerText;
      text1['materia'] = materia;

      let profesor = $columns[3].innerText;
      text1['profesor'] = profesor;

      let estatus = $columns[4].innerText;
      text1['estatus'] = estatus;

      let ponderacion = $columns[5].innerText;
      text1['ponderacion'] = ponderacion;

      let faltas_1 = $columns[6].innerText;
      text1['faltas_1'] = faltas_1;

      let calificacion_1 = $columns[7].innerText;
      text1['calificacion_1'] = calificacion_1;

      let calificacion_ponderacion_1 = $columns[8].innerText;
      text1['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      let faltas_2 = $columns[9].innerText;
      text1['faltas_2'] = faltas_2;

      let calificacion_2 = $columns[10].innerText;
      text1['calificacion_2'] = calificacion_2;

      let calificacion_ponderacion_2 = $columns[11].innerText;
      text1['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      let faltas_3 = $columns[12].innerText;
      text1['faltas_3'] = faltas_3;

      let calificacion_3 = $columns[13].innerText;
      text1['calificacion_3'] = calificacion_3;

      let calificacion_ponderacion_3 = $columns[14].innerText;
      text1['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      let faltas_totales = $columns[15].innerText;
      text1['faltas_totales'] = faltas_totales;

      let calificacion_final = $columns[16].innerText;
      text1['calificacion_final'] = calificacion_final;

      let situacion = $columns[17].innerText;
      text1['situacion'] = situacion;

      texts.push(text1);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(5) > td`
      );

      const text2 = {};

      clave = $columns[0].innerText;
      text2['clave'] = clave;

      nivel = $columns[1].innerText;
      text2['nivel'] = nivel;

      materia = $columns[2].innerText;
      text2['materia'] = materia;

      profesor = $columns[3].innerText;
      text2['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text2['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text2['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text2['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text2['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text2['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text2['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text2['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text2['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text2['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text2['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text2['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text2['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text2['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text2['situacion'] = situacion;

      texts.push(text2);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(6) > td`
      );

      const text3 = {};

      clave = $columns[0].innerText;
      text3['clave'] = clave;

      nivel = $columns[1].innerText;
      text3['nivel'] = nivel;

      materia = $columns[2].innerText;
      text3['materia'] = materia;

      profesor = $columns[3].innerText;
      text3['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text3['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text3['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text3['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text3['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text3['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text3['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text3['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text3['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text3['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text3['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text3['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text3['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text3['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text3['situacion'] = situacion;

      texts.push(text3);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(7) > td`
      );

      const text4 = {};

      clave = $columns[0].innerText;
      text4['clave'] = clave;

      nivel = $columns[1].innerText;
      text4['nivel'] = nivel;

      materia = $columns[2].innerText;
      text4['materia'] = materia;

      profesor = $columns[3].innerText;
      text4['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text4['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text4['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text4['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text4['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text4['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text4['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text4['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text4['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text4['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text4['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text4['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text4['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text4['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text4['situacion'] = situacion;

      texts.push(text4);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(8) > td`
      );

      const text5 = {};

      clave = $columns[0].innerText;
      text5['clave'] = clave;

      nivel = $columns[1].innerText;
      text5['nivel'] = nivel;

      materia = $columns[2].innerText;
      text5['materia'] = materia;

      profesor = $columns[3].innerText;
      text5['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text5['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text5['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text5['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text5['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text5['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text5['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text5['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text5['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text5['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text5['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text5['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text5['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text5['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text5['situacion'] = situacion;

      texts.push(text5);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(9) > td`
      );

      const text6 = {};

      clave = $columns[0].innerText;
      text6['clave'] = clave;

      nivel = $columns[1].innerText;
      text6['nivel'] = nivel;

      materia = $columns[2].innerText;
      text6['materia'] = materia;

      profesor = $columns[3].innerText;
      text6['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text6['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text6['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text6['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text6['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text6['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text6['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text6['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text6['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text6['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text6['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text6['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text6['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text6['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text6['situacion'] = situacion;

      texts.push(text6);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(10) > td`
      );

      const text7 = {};

      clave = $columns[0].innerText;
      text7['clave'] = clave;

      nivel = $columns[1].innerText;
      text7['nivel'] = nivel;

      materia = $columns[2].innerText;
      text7['materia'] = materia;

      profesor = $columns[3].innerText;
      text7['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text7['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text7['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text7['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text7['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text7['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text7['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text7['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text7['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text7['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text7['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text7['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text7['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text7['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text7['situacion'] = situacion;

      texts.push(text7);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(11) > td`
      );

      const text8 = {};

      clave = $columns[0].innerText;
      text8['clave'] = clave;

      nivel = $columns[1].innerText;
      text8['nivel'] = nivel;

      materia = $columns[2].innerText;
      text8['materia'] = materia;

      profesor = $columns[3].innerText;
      text8['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text8['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text8['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text8['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text8['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text8['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text8['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text8['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text8['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text8['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text8['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text8['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text8['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text8['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text8['situacion'] = situacion;

      texts.push(text8);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(12) > td`
      );

      const text9 = {};

      clave = $columns[0].innerText;
      text9['clave'] = clave;

      nivel = $columns[1].innerText;
      text9['nivel'] = nivel;

      materia = $columns[2].innerText;
      text9['materia'] = materia;

      profesor = $columns[3].innerText;
      text9['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text9['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text9['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text9['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text9['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text9['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text9['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text9['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text9['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text9['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text9['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text9['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text9['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text9['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text9['situacion'] = situacion;

      texts.push(text9);
    } catch (error) {
      console.error(error);
    }

    try {
      $columns = document.querySelectorAll(
        `#cal > center > table > tbody > tr:nth-child(13) > td`
      );

      const text10 = {};

      clave = $columns[0].innerText;
      text10['clave'] = clave;

      nivel = $columns[1].innerText;
      text10['nivel'] = nivel;

      materia = $columns[2].innerText;
      text10['materia'] = materia;

      profesor = $columns[3].innerText;
      text10['profesor'] = profesor;

      estatus = $columns[4].innerText;
      text10['estatus'] = estatus;

      ponderacion = $columns[5].innerText;
      text10['ponderacion'] = ponderacion;

      faltas_1 = $columns[6].innerText;
      text10['faltas_1'] = faltas_1;

      calificacion_1 = $columns[7].innerText;
      text10['calificacion_1'] = calificacion_1;

      calificacion_ponderacion_1 = $columns[8].innerText;
      text10['calificacion_ponderacion_1'] = calificacion_ponderacion_1;

      faltas_2 = $columns[9].innerText;
      text10['faltas_2'] = faltas_2;

      calificacion_2 = $columns[10].innerText;
      text10['calificacion_2'] = calificacion_2;

      calificacion_ponderacion_2 = $columns[11].innerText;
      text10['calificacion_ponderacion_2'] = calificacion_ponderacion_2;

      faltas_3 = $columns[12].innerText;
      text10['faltas_3'] = faltas_3;

      calificacion_3 = $columns[13].innerText;
      text10['calificacion_3'] = calificacion_3;

      calificacion_ponderacion_3 = $columns[14].innerText;
      text10['calificacion_ponderacion_3'] = calificacion_ponderacion_3;

      faltas_totales = $columns[15].innerText;
      text10['faltas_totales'] = faltas_totales;

      calificacion_final = $columns[16].innerText;
      text10['calificacion_final'] = calificacion_final;

      situacion = $columns[17].innerText;
      text10['situacion'] = situacion;

      texts.push(text10);
    } catch (error) {
      console.error(error);
    }

    return {
      texts,
    };
  });

  return {
    page_data,
  };
};

module.exports = calificaciones;
