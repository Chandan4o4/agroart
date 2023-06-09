import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { 
    field: "id", 
    headerName: "Sr.", 
    width: 90 
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "house",
    headerName: "House Number",
    width: 150,
    editable: false,
  },
  {
    field: "area",
    headerName: "Area",
    width: 150,
    editable: false,
  },
  {
    field: "contact",
    headerName: "Contact Number",
    width: 150,
    editable: false,
  },
  {
    field: "aid",
    headerName: "AID",
    width: 150,
    editable: false,
  },
  {
    field: "website",
    headerName: "Website",
    width: 150,
    editable: false,
  },
  {
    field: "remarks",
    headerName: "Remarks",
    width: 150,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: false,
  },
  {
    field: "interested",
    headerName: "Interested",
    width: 150,
    editable: false,
  },
];

const rows = [
  { id: 1, name: "Jon",  house: "25", area: "35",contact:"9876543210", aid:"test",website:"https://agroart.com", remarks:"this is remark section", date:"10-05-2023",interested:"yes"},
  
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
