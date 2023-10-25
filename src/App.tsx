import ReservationForm from "./components/Form/Form";
import Header from "./components/Header/Header";
import { List } from "./components/List/List";
import { ReservationsProvider } from "./context/ContextData";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <ReservationsProvider>
        <Header />
        <ReservationForm />
        <List />
      </ReservationsProvider>
    </>
  );
}

export default App;
