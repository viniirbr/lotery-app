import { useEffect, useState } from 'react';
import { api } from '../../api/loteriasApi';
import { BallSet } from '../../components/BallSet';
import { GlobalStyle } from '../../components/GlobalStyle';
import { Header } from '../../components/Header';
import { AppWrapper } from './styled';

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
  const [loteryContest, setLoteryContest] = useState<LoteryContest>();
  const [numbersDrawn, setNumbersDrawn] = useState<number[]>([]);
  const [date, setDate] = useState<string>();


  useEffect(() => {
    const fetchOptions = async () => {
      const loteriesResponse = await api.get('/loterias');
      setListOfOptions(loteriesResponse.data);
      setSelectedOption(listOfOptions[0]);
    }
    fetchOptions();
  }, []);


  useEffect(() => {
    const fetchContest = async () => {
      const contestsResponse = await api.get('/loterias-concursos');
      const contests = contestsResponse.data as LoteryContest[];
      setLoteryContest(contests.filter((contest) => contest.loteriaId === selectedOption?.id)[0]);
    }
    fetchContest();
  }, [selectedOption]);

  useEffect(() => {
    const fetchContestNumbers = async () => {
      const contestsByIdResponse = await api.get(`/concursos/${loteryContest?.concursoId}`);
      const data = contestsByIdResponse.data;    
      const contestById = data.numeros;
      const contestDate = data.data;
      const formatedDate = (new Date(contestDate).getDay().toString()+'/'+
      new Date(contestDate).getMonth().toString()+'/'+
      new Date(contestDate).getFullYear().toString())
      setNumbersDrawn(contestById);
      setDate(formatedDate);
    }
    fetchContestNumbers()

  }, [loteryContest])


  function selectOption(value: string) {
    setSelectedOption(listOfOptions.filter((option) => {
      return option.nome === value.toLowerCase();
    })[0]);
  }

  function selectColor(selectedOption: LoteryType) {
    switch (selectedOption?.id) {
      case 0:
        return ('#6BEFA3')
      case 1:
        return '#8666EF';
      case 2:
        return '#DD7AC6';
      case 3:
        return '#FFAB64';
      case 4:
        return '#5AAD7D';
      case 5:
        return '#BFAF83'
    }
  }

  return (
    <AppWrapper className="App">
      <GlobalStyle />
      <Header
        loteryOptions={listOfOptions}
        selectedOption={selectedOption as LoteryType}
        loteryContest={loteryContest as LoteryContest}
        onChangeOption={selectOption}
        color={selectColor(selectedOption as LoteryType)}
        date= {date as string} />

      <div className='bottom-container'>
        <main>
          <BallSet numberValues={numbersDrawn as number[]} />
        </main>

        <footer>
          <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </footer>
      </div>
    </AppWrapper>
  );
}

export default App;
