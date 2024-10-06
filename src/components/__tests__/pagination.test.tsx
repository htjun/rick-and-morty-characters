import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../pagination'

describe('Pagination Component', () => {
  describe('Renders page buttons correctly', () => {
    beforeEach(() => {
      render(<Pagination total={10} current={1} />)
    })

    test('Buttons 1 to 5 are in the document', () => {
      const pageNumbers = [1, 2, 3, 4, 5]
      pageNumbers.forEach(page => {
        expect(
          screen.getByTestId(`pagination-button-${page}`)
        ).toBeInTheDocument()
      })
    })

    test('Button 6 is not in the document', () => {
      expect(
        screen.queryByTestId('pagination-button-6')
      ).not.toBeInTheDocument()
    })
  })

  describe('Displays next and previous buttons appropriately', () => {
    describe('When current page is the first page', () => {
      beforeEach(() => {
        render(<Pagination total={20} current={1} />)
      })

      test('Previous button is not in the document', () => {
        expect(
          screen.queryByTestId('pagination-button-prev')
        ).not.toBeInTheDocument()
      })

      test('Next button is in the document', () => {
        expect(screen.getByTestId('pagination-button-next')).toBeInTheDocument()
      })
    })

    describe('When current page is the last page', () => {
      beforeEach(() => {
        render(<Pagination total={20} current={20} />)
      })

      test('Previous button is in the document', () => {
        expect(screen.getByTestId('pagination-button-prev')).toBeInTheDocument()
      })

      test('Next button is not in the document', () => {
        expect(
          screen.queryByTestId('pagination-button-next')
        ).not.toBeInTheDocument()
      })
    })
  })
})
