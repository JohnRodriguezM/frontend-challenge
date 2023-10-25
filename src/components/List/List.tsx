import { RenderDataGrid } from "../../Atom/RenderDataGrid/RenderDataGrid";
import { useReservations } from "../../context/ContextData";
import { IconButton, Avatar } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

{
  /* debo hacerlo condicional si no hay elementos añadidos en la lista de las propiedad enviadas  */
}
export const List = (): JSX.Element => {
  const { reservations, setReservations } = useReservations();

  const handleDeleteElement = (params) => {
    const newReservations = reservations.filter(
      (reservation: { id: string }) => reservation?.id !== params.row.id
    );
    setReservations(newReservations);
  };

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
            title="Eliminar elemento de reserva"
            onClick={() => handleDeleteElement(params)}
          >
            <Avatar
              style={{
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


  if(!reservations.length) return (<></>)

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
