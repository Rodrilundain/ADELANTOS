function doPost(e) {
  const ss = SpreadsheetApp.openById("1f2wvUgKnS1BgerCFwoeZc2QOn6BWGNtvIQYcWiayJZs");
  const hoja = ss.getSheetByName("Adelantos"); // o el nombre correcto de la pestaña

  hoja.appendRow([
    new Date(),
    e.parameter.nombre,
    e.parameter.interno,
    e.parameter.monto
  ]);

  return ContentService.createTextOutput("OK");
}

