import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
  margin-top: 5rem;

  display: grid;
  grid-template-rows: max-content auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.6rem;

    button {
      width: 21rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      h1 {
        font-size: 2.8rem;
      }
    }
  }

  .notes {
    margin: 4rem 0 1.6rem 0;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    overflow-y: auto;
    padding-right: 1.6rem;
  }
`

export const Newnote = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-weight: 500;

  width: 20.7rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  height: 5.6rem;

  border: none;
  border-radius: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 16rem;
    height: initial;

    padding: 1.5rem 1rem;
    font-size: 1.5rem;
  }
`
