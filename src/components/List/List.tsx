import { RenderDataGrid } from "../../Atom/RenderDataGrid/RenderDataGrid";
import { useReservations } from "../../context/ContextData";
import { IconButton, Avatar } from "@material-ui/core";

{
  /* debo hacerlo condicional si no hay elementos añadidos en la lista de las propiedad enviadas  */
}
export const List = (): JSX.Element => {
  const { reservations } = useReservations();

  const columns = [
    { field: "origin", headerName: "Origen", width: 150 },
    { field: "destination", headerName: "Destino", width: 150 },
    { field: "passengers", headerName: "Pasajeros", width: 120 },
    { field: "date", headerName: "Fecha", width: 120 },
    { field: "time", headerName: "Hora", width: 120 },
    {
      field: "actions",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            size="large"
            title="Eliminar relación catalogo TRD"
            onClick={() =>
              // handleDelete(row.id)
              console.log(params.row)
            }
          >
            <Avatar
              sx={{
                width: 24,
                height: 24,
                background: "#fff",
                border: "2px solid",
              }}
              variant="rounded"
            >
              <DeleteIcon
                sx={{
                  color: "red",
                  width: "18px",
                  height: "18px",
                }}
              />
            </Avatar>
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <RenderDataGrid
        title="Reservation List"
        rows={(reservations as never) ?? []}
        columns={columns ?? []}
      />
    </>
  );
};
