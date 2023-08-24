import { styled } from "styled-components";

export const Container = styled.div`
    margin: 85px auto 0 auto;
    width: 80%;
    padding: 1rem;

    @media screen and (max-width: 767px) {
        width: 95%;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: rgba(10, 25, 47, 0.9);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    transition: transform 0.3s ease;
    &.hide{
        transform: translateY(-100%);
    }

    .linkCont{
        display: flex;
        gap: 1.6rem;
        align-items: center;
    }
    
    a{
        font-size: 1.2rem;
        padding: .8rem;
        color: var(--tertiary-color);
        transition: color .3s ease-in;
        &:hover{
            color: var(--quinary-color);
        }
    }

    .active{
        color: var(--quinary-color);
    }

    @media screen and (max-width: 767px) {
        width: 95%;
        padding: 1rem 1rem;
    }
`

export const MainProject = styled.div`
    display: flex;
    width: 100%;
    margin: 2rem auto;
    align-items: center;
    justify-content: center;

    img{
        width: 60%;
        height: auto;
        opacity: .9;
        border-radius: 5px;
    }

    .overlay{
        width: 40%;
        height: 200px;
        padding: 1rem;
        border-radius: 3px;
        background-color: rgba(17, 34, 64, 0.9);
        margin-left: -100px;
        z-index: 1;
    }

    h4{
        color: var(--tertiary-color);
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
    }
    p{
        width: 100%;
    }
`

export const Card = styled.div`
    max-width: 400px;
    min-width: 250px;
    padding: 1rem;
    background-color: var(--quaternary-color);
    border-radius: 5px;

    h3{
        font-size: 1.2rem;
        margin: 8px 0;
    }

    p{
        margin: 5px 0;
        width: 100%;
    }

    img{
        border-radius: 5px;
    }

    .specialInfo{
        margin-top: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const PageFooter = styled.footer`
    color: var(--secondary-color);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: 'Roboto', sans-serif;

    p{
        width: 100%;
        margin: .6rem;
    }

    .linksContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`