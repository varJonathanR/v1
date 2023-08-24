import { styled } from "styled-components";

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
        @media (min-width: 768px){
            transform: translateY(-100%);
        }
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
        width: 100%;
        padding: 1rem 1rem;
    }
`

export const LinkContainer = styled.div`
        display: flex;
        gap: 1.6rem;
        align-items: center;

        @media screen and (max-width: 767px) {
            position: absolute;
            top: 70px;
            left: ${({ open }) => (open ? "0" : "-100%")};
            width: 100%;
            height: 90vh;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            transition: .5s;
            background-color: rgba(10, 25, 47, 0.9);
            backdrop-filter: blur(5px);

            a{
                width: 100%;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
`

export const Burguer = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: flex;
        .nav-icon{
            width: 35px;
            height: 30px;
            margin: 10px 10px;
            position: relative;
            cursor: pointer;
            display: inline-block;
        }
        .nav-icon span{
            background-color:var(--tertiary-color);
            position: absolute;
            border-radius: 2px;
            transition: .3s cubic-bezier(.8, .5, .2, 1.4);
            width:100%;
            height: 4px;
            transition-duration: 500ms
        }
        .nav-icon span:nth-child(1){
            top:0px;
            left: 0px;
        }
        .nav-icon span:nth-child(2){
            top:13px;
            left: 0px;
            opacity:1;
        }
        .nav-icon span:nth-child(3){
            bottom:0px;
            left: 0px;
        }
        .nav-icon:not(.open):hover span:nth-child(1){
            transform: rotate(-3deg) scaleY(1.1);
        }
        .nav-icon:not(.open):hover span:nth-child(2){
            transform: rotate(3deg) scaleY(1.1);
        }
        .nav-icon:not(.open):hover span:nth-child(3){
            transform: rotate(-4deg) scaleY(1.1);
        }
        .nav-icon.open span:nth-child(1){
            transform: rotate(45deg);
            top: 13px;
        }
        .nav-icon.open span:nth-child(2){
            opacity:0;
        }
        .nav-icon.open span:nth-child(3){
            transform: rotate(-45deg);
            top: 13px;
        }
    }
`