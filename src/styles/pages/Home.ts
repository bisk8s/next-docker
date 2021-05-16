import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: aileron, sans-serif;
    font-weight: 900;
    font-style: normal;

    font-size: 64px;
    color: ${props => props.theme.colors.primary};
    margin-top: -10px;
  }

  .graph {
    path {
      fill: ${props => props.theme.colors.primary} !important;
    }
    width: 100px;
    margin-left: 100px;
    margin-top: 0px;
  }

  .code {
    color: ${props => props.theme.colors.primary};
    font-family: aileron, sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 16px;

    margin-left: 150px;
    margin-top: -10px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
