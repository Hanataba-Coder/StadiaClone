import styled from 'styled-components'

export const FooterWrapper = styled.div`
    position: relative;
    padding: 1rem 1.5rem;
`

export const ContentWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`

export const Link = styled.a`
    text-decoration: none;
    color: red;

    &:nth-child(n+2){
        margin-left: 10px;
    }
`