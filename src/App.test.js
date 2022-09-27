import { render, renderHook, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


it('should have 20 buttons', () => {
  render(<App />)
  expect(screen.getAllByTestId('botonCalc')).toHaveLength(20)
})

it('should have an equal button', () => {
  render(<App />)
  const equal = screen.getByText('=')
  expect(equal).toBeInTheDocument()
})

it('the equal symbol should have the operator className', () =>{
  render(<App />)
  const equal = screen.getByText('=').className
  expect(equal).toContain('operador')
})

it('should has the element where the result is displayed', () => {
  render(<App />)
  const result = screen.getByTestId('result')
  expect(result).toBeInTheDocument()
})



