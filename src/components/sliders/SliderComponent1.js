import React, { useState, useEffect } from 'react'
import { SliderContainer, Sliders, Slider, VerticalIndicator, Indicator, Title, Description } from "../styles/Styles";
import { sliderTexts } from './SlidersData';


const SliderComponent1 = () => {
    const [index, setIndex] = useState(0);
    // const [slider, setSlider] = useState(sliderTexts[index]);

    useEffect(() => {
        setTimeout(() => {
            // setSlider(sliderTexts[index]);
            setIndex((index + 1) % sliderTexts.length);
        }, 3500);
    }, [index])



    return (
        <SliderContainer>
            <Sliders>

                {
                    sliderTexts.map((text, i) => {
                        return (
                            <Slider isVisible = {index === i} bgColor = {text.bgColor}>
                                <Title>{text.title}</Title>
                                <Description>{text.desc}</Description>
                            </Slider>
                        );
                    })
                } 
            </Sliders>
            <VerticalIndicator>
                {sliderTexts.map((s, i) => {
                    return <Indicator key = {s.id} isVisible = {index === i}/>
                })}
            </VerticalIndicator>
        </SliderContainer>
    )
}

export default SliderComponent1
