import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 12rem;

  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_500};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;

    margin: 0 auto;
    padding-top: 2.4rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    span {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      .logo {
        display: none;
      }

      gap: 3rem;
    }
  }
`

export const Profile = styled.span`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_200};

      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  > a img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div strong {
      display: none;
    }
  }
`

export const Logout = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: Roboto Slab;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  background: transparent;
  border: none;

  display: flex;
  justify-content: flex-end;
`
