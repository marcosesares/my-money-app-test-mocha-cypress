export class PaymentCyclePageConstant {
  static attributes = {
    selectors: {
      list: "button[data-target='tabList']",
      add: "button[data-target='tabCreate']",
      nameColumn: "div#tabList > th:contains('Name')",
      monthColumn: "div#tabList > th:contains('Month')",
      yearColumn: "div#tabList > th:contains('Year')",
      actionsColumn: "div#tabList > th:contains('Actions')",
      nameTextbox: "input[placeholder='Inform the billing Name']",
      monthTextbox: "input[placeholder='Inform the billing Month']",
      yearTextbox: "input[placeholder='Inform the billing Year']",
      save: "button:contains('Save')",
      cancel: "button:contains('Cancel')",
    },
    labels: {
      paymentCycleHeader: "Payment Cycle Register",
      list: "List Tab Button",
      add: "Register Button",
      nameColumn: "Name Column",
      monthColumn: "Month Column",
      yearColumn: "Year Column",
      actionsColumn: "Actions Column",
      nameTextbox: "Name Textbox",
      monthTextbox: "Month Textbox",
      yearTextbox: "Year Textbox",
      save: "Save Button",
      cancel: "Save Button",
    },
  };
}
