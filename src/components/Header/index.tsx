import React, { useEffect, useState } from 'react'
import logo from '../../img/logo.svg'
import { LoteryContest, LoteryType } from '../../pages/App/App';
import { HeaderWrapper } from './styled';

interface HeaderProps {
    loteryOptions: LoteryType[],
    selectedOption: LoteryType,
    loteryContest: LoteryContest
    onChangeOption: (value: string) => void
}

export function Header({ loteryOptions, selectedOption, loteryContest, onChangeOption }: HeaderProps) {

    return (
        <HeaderWrapper>
            <select value={selectedOption?.nome} onChange={(e) => onChangeOption(e.target.value)}>
                {loteryOptions.map((option) => <option key={option.id}>{option.nome.toUpperCase()}</option>)}
            </select>
            <div>
                <img src={logo} alt='' />
                <h1>{selectedOption?.nome.toUpperCase()}</h1>
            </div>
            <h3>{loteryContest !== undefined && `Concurso Nº ${loteryContest.concursoId}`}</h3>
        </HeaderWrapper>
    )
}
