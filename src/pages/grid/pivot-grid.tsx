import { PivotGrid } from "devextreme-react/pivot-grid";

const sales = [
  { region: "North", city: "New York", year: 2023, sales: 1000 },
  { region: "North", city: "Boston", year: 2023, sales: 900 },
  { region: "North", city: "Boston", year: 2024, sales: 900 },
  { region: "South", city: "Miami", year: 2023, sales: 1200 },
  { region: "North", city: "New York", year: 2024, sales: 1100 },
  { region: "South", city: "Miami", year: 2024, sales: 1300 },
];

const fields = [
  { dataField: "region", area: "row" },
  { dataField: "city", area: "row" },
  { dataField: "year", area: "column" },
  { dataField: "sales", area: "data", summaryType: "sum" },
];

export function Grid() {
  return (
    <PivotGrid
      dataSource={{
        fields,
        store: sales,
      }}
      showBorders={true}
    />
  );
}
