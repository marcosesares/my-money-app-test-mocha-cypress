export class DashboardPageConstant {
  static attributes = {
    selectors: {
      totalCreditsValue: "div.small-box:has(p:contains('Total Credits')) h3",
      totalDebitsValue: "div.small-box:has(p:contains('Total Debits')) h3",
      consolidatedValue: "div.small-box:has(p:contains('Consolidated')) h3",
      totalCredits: "div.small-box p:contains('Total Credits')",
      totalDebits: "div.small-box p:contains('Total Debits')",
      consolidated: "div.small-box p:contains('Consolidated')",
    },
    labels: {
      totalCreditsValue: "Total Credits Value",
      totalDebitsValue: "Total Debits Value",
      consolidatedValue: "Consolidated Value",
      totalCredits: "Total Credits",
      totalDebits: "Total Debits",
      consolidated: "Consolidated",
    },
  };
}
