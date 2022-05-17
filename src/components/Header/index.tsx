import logo from '../../img/logo.svg'
import { LoteryContest, LoteryType } from '../../pages/App/App';
import { HeaderWrapper } from './styled';

interface HeaderProps {
    loteryOptions: LoteryType[],
    selectedOption: LoteryType,
    loteryContest: LoteryContest,
    onChangeOption: (value: string) => void,
    color?: string,
    date: string
}

export function Header({ loteryOptions, selectedOption, loteryContest, onChangeOption, color, date }: HeaderProps) {
    return (
        <HeaderWrapper color={color}>
            <select value={selectedOption?.nome} onChange={(e) => onChangeOption(e.target.value)}>
                {loteryOptions.map((option) =>
                    <option
                        key={option.id}
                        value={option.nome.toLocaleLowerCase()}>
                        {option.nome.toUpperCase()}
                    </option>)}
            </select>
            <div>
                <img src={logo} alt='' />
                <h1>{selectedOption?.nome.toUpperCase()}</h1>
            </div>

            <div className='contest-info'>
                <h3 className='contest-mobile'>{loteryContest !== undefined && `Concurso Nº ${loteryContest.concursoId}`}</h3>
                <h3 className='contest'>Concurso</h3>
                <h2 className='contest-date'>{loteryContest !== undefined && `${loteryContest.concursoId} - ${date}`}</h2>
            </div>

        </HeaderWrapper>
    )
}
