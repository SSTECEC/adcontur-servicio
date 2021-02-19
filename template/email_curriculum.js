
function email_curriculum(identificacion, nombre, email, direccion, telefono, conocimientos, experiencia, salario, disponibilidad, cargo, archivo) {
    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADCONTUR</title>
</head>

<body style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;">
    <center class="wrapper"
        style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
        <div class="webkit" style="max-width:600px;">

            <table class="outer" align="center"
                style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                <tr>
                    <td class="full-width-image"
                        style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0; background: rgb(215, 254, 242) !important;
                    background: linear-gradient(90deg, rgba(215, 254, 242, 1) 0%, rgba(19, 104, 59, 1) 57%) !important; padding: 20px;">
                        <img src="https://adcontur.com/imagenes/logo/logo.png" alt="" width="300">
                    </td>
                </tr>
                <tr class="white-back" style="background-color:#f7f7f7;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                    <br>
                                    <p class="h4 center grey"
                                        style="margin:0;color:#3c3c3c;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;margin-top:0px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:15px!important;line-height: 1.4 !important;">
                                        <b style="color: #13683b !important"> `+
        nombre + `</b> a solicitado revisar su currículum.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="white-back" style="background-color:#f7f7f7;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#13683b;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                    <p class="h4 center grey"
                                        style="margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:20px;padding-left:20px;margin-top:0px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:15px!important;line-height: 1.4 !important;">
                                        A continuación los datos de la persona:
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="white-back" style="background-color:#f7f7f7;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">

                                    <div style="padding-left: 80px !important; padding-right: 80px !important">
                                        <table border="0"
                                            style="font-family: sans-serif !important; color:#13683b !important; width: 100% !important; text-align: left !important; font-size: 15px !important">
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Identificación:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ identificacion + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Nombre:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ nombre + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Email:</b></td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ email + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Dirección:</b></td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ direccion + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Teléfono:</b></td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ telefono + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Conocimientos de Niifs:</b></td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ conocimientos + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Años de Experiencia en el Área de Impuestos y Tributaria:</b></td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ experiencia + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Aspiracion Salarial:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ salario + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Disponibilidad Inmediata:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ disponibilidad + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Cargo:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    `+ cargo + `
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <b>Archivo Currículum:</b>
                                                </td>
                                                <td
                                                    style="width: 50% !important;padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;">
                                                    <a href="`+ archivo + `">Abrir Archivo</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="white-back" style="background-color:#f7f7f7;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#3c3c3c;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:0px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                    <br>
                                    <br>
                                    <p class="h4 center grey"
                                        style="margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;margin-top:0px !important;margin-bottom:0px !important;margin-right:0 !important;margin-left:0 !important;font-size:13.5px!important;line-height:1.5 !important;">
                                        Este mensaje ha sido generado automáticamente, por favor no respondas a este
                                        correo.
                                    </p>

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="blue-back" style="background-color:#f7f7f7;">
                    <td class="three-column three-column-full-width"
                        style="padding-top:30px;padding-bottom:10px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                        <div class="column"
                            style="width:100%;max-width:200px;display:inline-block;vertical-align:top;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                            <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                                <tr>
                                    <td class="inner"
                                        style="padding-top:10px;padding-bottom:0px;padding-right:0px;padding-left:0px;">
                                        <table class="contents"
                                            style="border-spacing:0;font-family:sans-serif;color:#333333;width:100%;font-size:14px;text-align:center;">
                                            <tr>
                                                <td
                                                    style="padding-top:10px;padding-bottom:0;padding-right:0;padding-left:0;">
                                                    <img src="https://adcontur.com//imagenes/servicios/titulo/impuestos.png"
                                                        alt=""
                                                        style="border-width:0;height:auto;max-width:55px;display:block;margin:15px auto;"
                                                        width="55" height="50">

                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="column"
                            style="width:100%;max-width:200px;display:inline-block;vertical-align:top;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                            <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                                <tr>
                                    <td class="inner"
                                        style="padding-top:10px;padding-bottom:0px;padding-right:0px;padding-left:0px;">
                                        <table class="contents"
                                            style="border-spacing:0;font-family:sans-serif;color:#333333;width:100%;font-size:14px;text-align:center;">
                                            <tr>
                                                <td
                                                    style="padding-top:0px;padding-bottom:0;padding-right:0;padding-left:0;border-left:2px solid #13683b;border-right:2px solid #13683b;">
                                                    <img src="https://adcontur.com//imagenes/servicios/titulo/nomina.png"
                                                        alt=""
                                                        style="border-width:0;height:auto;max-width:55px;display:block;margin:15px auto;"
                                                        width="55" height="50">

                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="column"
                            style="width:100%;max-width:200px;display:inline-block;vertical-align:top;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                            <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                                <tr>
                                    <td class="inner"
                                        style="padding-top:10px;padding-bottom:0px;padding-right:0px;padding-left:0px;">
                                        <table class="contents"
                                            style="border-spacing:0;font-family:sans-serif;color:#333333;width:100%;font-size:14px;text-align:center;">
                                            <tr>
                                                <td
                                                    style="padding-top:10px;padding-bottom:0;padding-right:0;padding-left:0;">
                                                    <img src="https://adcontur.com//imagenes/servicios/titulo/asesoria.png"
                                                        alt=""
                                                        style="border-width:0;height:auto;max-width:55px;display:block;margin:15px auto;"
                                                        width="55" height="50">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr class="grey-back" style="background-color:#13683b;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:10px;padding-bottom:0px;padding-right:10px;padding-left:10px;width:100%;text-align:center;">
                                    <p class="h4 center grey"
                                        style="Margin:0;color:#ffffff;text-align:center;padding-top:10px;padding-bottom:5px;padding-right:10px;padding-left:10px;margin-top:0px !important;margin-bottom:0px !important;margin-right:0 !important;margin-left:0 !important;font-size:13px!important;margin-bottom:0px;">


                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="blue-back" style="background-color:#f7f7f7;">
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                        <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;">
                            <tr>
                                <td class="inner contents"
                                    style="padding-top:0px;padding-bottom:0px;padding-right:20px;padding-left:20px;width:100%;text-align:center;">

                                    <p class="h4 center grey"
                                        style="Margin:0;color:#13683b;text-align:center;padding-top:10px;padding-bottom:0px;padding-right:10px;padding-left:10px;margin-top:10px !important;margin-bottom:10px !important;margin-right:0 !important;margin-left:0 !important;font-size:10px!important;margin-bottom:10px;">
                                        Este correo electrónico fue enviado por ADCONTUR<br>
                                        ©2020 Derechos Reservados
                                    <p>

                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>

</html>`
}

module.exports = {
    email_curriculum: email_curriculum
}