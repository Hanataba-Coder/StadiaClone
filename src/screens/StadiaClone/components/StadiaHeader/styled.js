import styled from 'styled-components'

export const StadiaHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem;

    .onlyBigScreen{
        display: block;
    }

    .smallScreen{
        display: none;
    }

    @media screen and (max-width: 640px){
        .smallScreen{
            display: flex;
        }
        .onlyBigScreen{
            display: none;
        }
    }
`

export const HeaderWrapper = styled.div`
    display:flex;   
    justify-content: space-between;
    font-size: 22px;
    max-width: 1300px;
    margin: 0 auto;
`
export const LogoWrapper = styled.div`
    width: 10rem;
`

export const Logo = styled.img`
    width: 100%;
`

export const TabWrapper = styled.div`
    display: inline-flex;
    padding: 0 10px;
    cursor: pointer;
    font-size: .8em;
    font-weight: 500;
`