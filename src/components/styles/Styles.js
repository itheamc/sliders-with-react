import styled, { keyframes } from 'styled-components';

export const SliderContainer = styled.div`
    width: 750px;
    height: 375px;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 32px 0;
`

export const Sliders = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    /* background-color: red; */
`

// Animation
const enteranim = keyframes`
    /* from {
        left: -20%;
    }
    to {
        left: 0;
    } */

    0% {
        left: -20%;
    }
    50% {
        left: 20%;
        right: -20%
    }
    100% {
        left: 0;
        right: 0;
    }
`

export const Slider = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: ${({isVisible}) => (isVisible) ? 'flex' : 'none'};
    flex-direction: column;
    justify-content:center;
    align-content: center;
    text-align:center;
    flex-wrap: wrap;
    background-color: ${({bgColor}) => bgColor || 'white'};
    animation: ${enteranim} 2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    /* transition: all 2s cubic-bezier(0.785, 0.135, 0.15, 0.86); */
`


export const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    /* src: url(); */
`

export const IndicatorContainer = styled.div`
    width: auto;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: yellow; */
    right: 24px;
`

export const Indicator = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: ${({isVisible}) => (isVisible) ? 'white' : 'transparent'};
    position: relative;
    box-sizing: border-box;
    margin: 2px 2px;
    transition: all 1s ease;

    &:hover{
        cursor: pointer;
    }
`

export const Title = styled.h1`
    color: yellow;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
    transition: all 1s ease;
`

export const Description = styled.p`
    color: whitesmoke;
    font-size: 16px;
`
