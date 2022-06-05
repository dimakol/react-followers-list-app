import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Followers from "../../interfaces/IFollowers";

const PAGE_SIZE = 30;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 125 },
  {
    field: "login",
    headerName: "User",
    width: 300,
    renderCell: (params) => (
      <a href={params.row.html_url} target="_blank" rel="noopener noreferrer">
        {params.row.login}
      </a>
    ),
  },
  {
    field: "avatar_url",
    headerName: "Picture",
    sortable: false,
    filterable: false,
    width: 95,
    renderCell: (params) => <Avatar src={params.row.avatar_url}></Avatar>,
  },
];

interface IMUIDataTableProps {
  rows: Followers[];
  total: number;
  handlePageChange: (newPage: number) => void;
  page: number;
  isLoading: boolean;
}

export const MUDataTable: React.FC<IMUIDataTableProps> = ({
  rows,
  total,
  handlePageChange,
  page,
  isLoading,
}) => (
  <DataGrid
    autoHeight
    rows={rows}
    columns={columns}
    pagination
    pageSize={PAGE_SIZE}
    rowsPerPageOptions={[PAGE_SIZE]}
    rowCount={total}
    paginationMode="server"
    onPageChange={(newPage) => handlePageChange(newPage)}
    page={page}
    loading={isLoading}
  />
);
