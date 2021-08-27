import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../App'
import renderWithRedux from './helpers'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

describe('Teste no Semario', () => {
  test('Testa se clicar o com texto yellow a cor muda para amarelo', () => {
    const {store} = renderWithRedux(<App />)
    const buttonGreen = screen.getByRole('button', {name: /green/i})
    userEvent.click(buttonGreen)
    let trafficLight = store.getState().trafficLight
    expect(trafficLight.color).toBe('green')
    const buttonRed = screen.getByRole('button', {name: /Red/i})
    userEvent.click(buttonRed)
    trafficLight = store.getState().trafficLight
    expect(trafficLight.color).toBe('red')
  })
})