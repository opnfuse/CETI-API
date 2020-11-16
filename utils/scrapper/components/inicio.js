const inicio = async (page) => {
  const page_data = await page.evaluate(() => {
    const text = {};

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(1) > td'
      );

      let registro = $columns[1].innerText.trim();
      text['registro'] = registro;

      let nombre = $columns[3].innerText.trim();
      text['nombre'] = nombre;

      let estado = $columns[5].innerText.trim();
      text['estado'] = estado;

      let semestre = $columns[7].innerText.trim();
      text['semestre'] = semestre;
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(2) > td'
      );

      let nivel_edu = $columns[1].innerText.trim();
      text['nivel_edu'] = nivel_edu;

      let carrera = $columns[3].innerText.trim();
      text['carrera'] = carrera;

      let tipo_alumno = document
        .querySelector(
          'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(2) > th'
        )
        .textContent.trim();
      text['tipo_alumno'] = tipo_alumno;

      let pago = $columns[7].innerText.trim();
      text['pago'] = pago;
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(3) > td'
      );

      let plantel = $columns[1].innerText.trim();
      text['plantel'] = plantel;

      let area = $columns[3].innerText.trim();
      text['area'] = area;

      let nivel = $columns[5].innerText.trim();
      text['nivel'] = nivel;

      let plan_edu = $columns[7].innerText.trim();
      text['plan_edu'] = plan_edu;
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(4) > td'
      );

      let turno = $columns[1].innerText.trim();
      text['turno'] = turno;

      let curp = $columns[3].innerText.trim();
      text['curp'] = curp;

      let grupo = $columns[5].innerText.trim();
      text['grupo'] = grupo;

      let tipo_plan = $columns[7].innerText.trim();
      text['tipo_plan'] = tipo_plan;
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(5) > td'
      );

      let credencial_hid = $columns[1].innerText.trim();
      text['credencial_hid'] = credencial_hid;

      let tipo_ingreso = $columns[3].innerText.trim();
      text['tipo_ingreso'] = tipo_ingreso;

      let correo_academico_gmail = $columns[5].innerText.trim();
      text['correo_academico_gmail'] = correo_academico_gmail;

      let correo_institucional_microsoft = $columns[7].innerText.trim();
      text['correo_institucional_microsoft'] = correo_institucional_microsoft;
    } catch (error) {
      console.error(error);
    }

    try {
      let $columns = document.querySelectorAll(
        'center > table > tbody > tr > td > table:nth-child(9) > tbody > tr:nth-child(6) > td'
      );

      let correo_personal = $columns[2].innerText.trim();
      text['correo_personal'] = correo_personal;

      let contrasena_del_correo_institucional = $columns[4].innerText.trim();
      text[
        'contrasena_del_correo_institucional'
      ] = contrasena_del_correo_institucional;
    } catch (error) {
      console.error(error);
    }

    return {
      text,
    };
  });

  return {
    page_data,
  };
};

module.exports = inicio;
