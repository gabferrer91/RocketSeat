import {styled} from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    transition: all 0.5s;
  }
  
  > div:hover {
    text-decoration: underline;
    filter: brightness(0.8);
    transition: all 0.5s;
  }

  > span {
    font-size: 14px;
  }

  > strong {
    font-size: 18px;
  }
`


export const Logout = styled.button`
border: none;
background: none;

> svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 24px;
}
`