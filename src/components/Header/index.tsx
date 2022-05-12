import React, { useEffect, useState } from 'react'
import { api } from '../../api/loteriasApi';
import logo from '../../img/logo.svg'
import { LoteryType } from '../../pages/App/App';

interface HeaderProps {
    loteryOptions: LoteryType[],
    selectedOption: LoteryType,
    onChangeOption: (value: string) => void
}

export function Header({ loteryOptions, selectedOption, onChangeOption }: HeaderProps) {

    return (
        <header style={{ background: 'red' }}>
            <select value={selectedOption?.nome} onChange={(e) => onChangeOption(e.target.value)}>
                {loteryOptions.map((option) => <option key={option.id}>{option.nome.toUpperCase()}</option>)}
            </select>
            <div>
                <img src={logo} alt='' />
                <h1>{selectedOption?.nome}</h1>
            </div>

        </header>
    )
}
