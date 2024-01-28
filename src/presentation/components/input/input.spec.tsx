import React from 'react'
import faker from 'faker'
import { RenderResult, fireEvent, render } from '@testing-library/react'

import Input from './input'
import Context from '@/presentation/contexts/form/form-context'

type SutTypes = {
  sut: RenderResult
  fieldName: string
}

const makeSut = (fieldName = faker.database.column()): SutTypes => {
  return {
    sut: render(
      <Context.Provider value={{ state: {} }}>
        <Input name={fieldName} />
      </Context.Provider>,
    ),
    fieldName,
  }
}
describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const { sut, fieldName } = makeSut()
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    expect(input.readOnly).toBeTruthy()
  })

  test('Should remove readOnly on focus', () => {
    const { sut, fieldName } = makeSut()
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBeFalsy()
  })
})
