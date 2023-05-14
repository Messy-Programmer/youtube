function myFunction() {
  const spreadsheetName = SpreadsheetApp.getActiveSpreadsheet().getName();
  const spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  const spreadsheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();

  const owner = SpreadsheetApp.getActiveSpreadsheet().getOwner();
  const userData = {
    userName: owner.getUsername(),
    userEmail: owner.getEmail()
  }

  const spreadsheetTimezone = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();

  const sheetName = SpreadsheetApp.getActiveSpreadsheet().getSheetName();
  const sheetId = SpreadsheetApp.getActiveSpreadsheet().getSheetId();
  const allSheets = SpreadsheetApp.getActiveSpreadsheet().getSheets().map((sheet) => sheet.getName());
  const numSheets = SpreadsheetApp.getActiveSpreadsheet().getNumSheets();

  const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Automation Sheet 2').getName();
  const currentCell = SpreadsheetApp.getActiveSpreadsheet().getCurrentCell().getValue();
  const allValues = SpreadsheetApp.getActiveSpreadsheet().getDataRange().getValues();
  const rangedValues = SpreadsheetApp.getActiveSpreadsheet().getRange('Automation Sheet 1!A2:B3').getValues();
  const activeRangedValues = SpreadsheetApp.getActiveSpreadsheet().getActiveRange().getValues();
  const rangedV = SpreadsheetApp.getActiveSpreadsheet().getSheetValues(3,1, 2, 2);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Automation Sheet 1');
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();


  console.log({
  spreadsheetName,
  spreadsheetId,
  spreadsheetUrl,
  userData,
  spreadsheetTimezone,
  sheetName,
  sheetId,
  allSheets,
  numSheets,
  activeSheet,
  currentCell,
  });
}
