import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { ReservationData } from "./types/reservationForm.types";
import { useReservations } from "../../context/ContextData";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  form: {
    origin: "",
    destination: "",
    passengers: "",
    date: "0",
    time: "0",
  },
  loading: false,
};

const ReservationForm = () => {
  const { reservations, setReservations } = useReservations();

  const [reservationData, setReservationData] = useState<ReservationData>(
    initialState.form
  );
  // const [loading, setLoading] = useState<boolean>(initialState.loading);

  const handleReservationDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    if (name === "date") {
      const date = new Date(value);
      const today = new Date();
      if (date.getTime() < today.getTime()) {
        alert("La fecha no puede ser anterior a la actual");
        setReservationData((prevData: ReservationData) => ({
          ...prevData,
          date: "0",
        }));
        return;
      }
    }

    setReservationData((prevData: ReservationData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSend = {
      ...reservationData,
      id: uuidv4(),
    };

    if (
      dataToSend.origin === "" ||
      dataToSend.destination === "" ||
      dataToSend.passengers === "" ||
      dataToSend.date === "0" ||
      dataToSend.time === "0"
    ) {
      alert("Por favor, rellene todos los campos");
      return;
    }

    setReservations([...reservations, dataToSend]);
  };

  const { origin, destination, passengers, date, time } = reservationData;

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          mt: "2rem",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          background: "#FAFAFA",
          borderRadius: "15px",
          p: "25px",
          mb: "25px",
          boxShadow: "0px 3px 6px #042F4A26",
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            label="Origin"
            name="origin"
            variant="outlined"
            fullWidth
            value={origin}
            onChange={handleReservationDataChange}
            autoComplete="shipping address-level1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            label="Destination"
            name="destination"
            variant="outlined"
            fullWidth
            value={destination}
            onChange={handleReservationDataChange}
            autoComplete="shipping address-level1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            label="# Passengers"
            name="passengers"
            variant="outlined"
            inputProps={{ min: 1, max: 30 }}
            fullWidth
            value={passengers}
            onChange={handleReservationDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            label="Date"
            name="date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={handleReservationDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="time"
            label="Hour"
            name="time"
            variant="outlined"
            fullWidth
            value={time}
            onChange={handleReservationDataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            startIcon={<AddIcon />}
            variant="contained"
            color="success"
          >
            Reservar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="button"
            onClick={() =>
              setReservationData({
                origin: "",
                destination: "",
                passengers: "",
                date: "0",
                time: "0",
              })
            }
            startIcon={<CleaningServicesIcon />}
            variant="outlined"
            color="primary"
          >
            Limpiar campos
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ReservationForm;
