/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

type ReservationsContextType = {
  reservations: unknown[];
  setReservations: (reservations: unknown[]) => void;
};

const ReservationsContext = createContext<ReservationsContextType>({
  reservations: [],
  setReservations: () => {},
});

export const useReservations = () => useContext(ReservationsContext);

export const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useLocalStorage("reservations", []);

  return (
    <ReservationsContext.Provider value={{ reservations, setReservations }}>
      {children}
    </ReservationsContext.Provider>
  );
};
