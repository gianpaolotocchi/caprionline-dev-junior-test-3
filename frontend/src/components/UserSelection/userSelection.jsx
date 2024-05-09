import PropTypes from 'prop-types';
import { Label, Select } from "flowbite-react";

const UserSelection = ({setVisualizzazione, setGenere}) => {

    const handlerChange = (value, typeSelect) => {
        typeSelect === 'viewType' && value !== null ? setVisualizzazione(value) : setGenere(value)
    }

    return(
        <div className="grid grid-cols-2 gap-4 py-5">
        <div className="max-w-md">
        <div className="mb-2 block flex justify-center">
          <Label htmlFor="viewTypeLabel" value="Seleziona il tipo di visualizzazione" />
        </div>
        <Select id="viewTypeSelect" required onChange={(e) => handlerChange(e.target.value, 'viewType')}>
        <option></option>
        <option>Più recenti</option>
        <option>Rating</option>
        </Select>
      </div>
      <div className="max-w-md">
        <div className="mb-2 block flex justify-center">
        <Label htmlFor="genreLabel" value="Seleziona il Genere" />
        </div>
        <Select id="genreSelect" required onChange={(e) => handlerChange(e.target.value, 'genre')}>
        <option>Azione</option>
        <option>Commedia</option>
        <option>Horror</option>
        </Select>
        </div>
        </div>
    )
}

UserSelection.propTypes = {
    setVisualizzazione: PropTypes.func.isRequired,
    setGenere: PropTypes.func.isRequired,
  };

export default UserSelection;