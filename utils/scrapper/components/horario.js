const ceti = 'https://ase1.ceti.mx/tecnologo';

const horario = async (page) => {
  await page.goto(ceti + '/tgoalumno/horario');
  const page_data = await page.evaluate(() => {
    const texts = [];

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(3) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(4) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(5) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(6) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(7) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(8) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(9) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(10) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > div:nth-child(31) > table > tbody > tr:nth-child(11) > th'
      );
      try {
        const text1 = {};
        let $spans1 = $columns[1].querySelectorAll('span');
        text1['dia'] = 'Lunes';
        text1['hora'] = $columns[0].innerText;
        text1['materia'] = $spans1[0].innerText;
        text1['grupo'] = $spans1[1].innerText;
        text1['edificio'] = $spans1[2].innerText;
        text1['salon'] = $spans1[3].innerText;
        text1['nombre_salon'] = $spans1[4].innerText;
        texts.push(text1);
      } catch (error) {
        console.error(error);
      }

      try {
        const text2 = {};
        $spans2 = $columns[2].querySelectorAll('span');
        text2['dia'] = 'Martes';
        text2['hora'] = $columns[0].innerText;
        text2['materia'] = $spans2[0].innerText;
        text2['grupo'] = $spans2[1].innerText;
        text2['edificio'] = $spans2[2].innerText;
        text2['salon'] = $spans2[3].innerText;
        text2['nombre_salon'] = $spans2[4].innerText;
        texts.push(text2);
      } catch (error) {
        console.error(error);
      }

      try {
        const text3 = {};
        $spans3 = $columns[3].querySelectorAll('span');
        text3['dia'] = 'Miercoles';
        text3['hora'] = $columns[0].innerText;
        text3['materia'] = $spans3[0].innerText;
        text3['grupo'] = $spans3[1].innerText;
        text3['edificio'] = $spans3[2].innerText;
        text3['salon'] = $spans3[3].innerText;
        text3['nombre_salon'] = $spans3[4].innerText;
        texts.push(text3);
      } catch (error) {
        console.error(error);
      }

      try {
        const text4 = {};
        $spans4 = $columns[4].querySelectorAll('span');
        text4['dia'] = 'Jueves';
        text4['hora'] = $columns[0].innerText;
        text4['materia'] = $spans4[0].innerText;
        text4['grupo'] = $spans4[1].innerText;
        text4['edificio'] = $spans4[2].innerText;
        text4['salon'] = $spans4[3].innerText;
        text4['nombre_salon'] = $spans4[4].innerText;
        texts.push(text4);
      } catch (error) {
        console.error(error);
      }

      try {
        const text5 = {};
        $spans5 = $columns[5].querySelectorAll('span');
        text5['dia'] = 'Viernes';
        text5['hora'] = $columns[0].innerText;
        text5['materia'] = $spans5[0].innerText;
        text5['grupo'] = $spans5[1].innerText;
        text5['edificio'] = $spans5[2].innerText;
        text5['salon'] = $spans5[3].innerText;
        text5['nombre_salon'] = $spans5[4].innerText;
        texts.push(text5);
      } catch (error) {
        console.error(error);
      }

      try {
        const text6 = {};
        $spans6 = $columns[6].querySelectorAll('span');
        text6['dia'] = 'Sabado';
        text6['hora'] = $columns[0].innerText;
        text6['materia'] = $spans6[0].innerText;
        text6['grupo'] = $spans6[1].innerText;
        text6['edificio'] = $spans6[2].innerText;
        text6['salon'] = $spans6[3].innerText;
        text6['nombre_salon'] = $spans6[4].innerText;
        texts.push(text6);
      } catch (error) {
        console.error(error);
      }
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

module.exports = horario;
