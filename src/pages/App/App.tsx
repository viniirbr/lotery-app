import { useEffect, useState } from 'react';
import { api } from '../../api/loteriasApi';
import { GlobalStyle } from '../../components/GlobalStyle';
import { Header } from '../../components/Header';

export interface LoteryType {
  id: number | undefined,
  nome: string
}

export interface LoteryContest {
  loteriaId: number,
  concursoId: number
}

function App() {
  const [selectedOption, setSelectedOption] = useState<LoteryType>();
  const [listOfOptions, setListOfOptions] = useState<LoteryType[]>([]);
  const [loteryEvent, setLoteryEvent] = useState<LoteryContest>();

  useEffect(() => {
    const fetchData = async () => {
      const loteries = await api.get('/loterias');
      setListOfOptions(loteries.data);
      setSelectedOption(listOfOptions[0]);
    }
    fetchData();
  }, []);


  function selectOption(value: string) {
    setSelectedOption(listOfOptions.filter((option) => {
      return option.nome === value.toLowerCase();
    })[0]);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header loteryOptions={listOfOptions} selectedOption={selectedOption as LoteryType} onChangeOption={selectOption} />


    </div>
  );
}

export default App;
