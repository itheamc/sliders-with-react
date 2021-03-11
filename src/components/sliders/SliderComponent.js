import React, { useState, useEffect } from 'react'
import { SliderContainer, Sliders, Slider, SliderImage, Indicator, HorizontalIndicator } from "../styles/Styles";
import { slidersData } from './SlidersData';


const SliderComponent = () => {
    const [index, setIndex] = useState(0);
    const [slider, setSlider] = useState(slidersData[index]);

    useEffect(() => {
        setTimeout(() => {
            setSlider(slidersData[index]);
            setIndex((index + 1) % slidersData.length);
        }, 2000);
    }, [index])


    return (
        <SliderContainer>
            <Sliders>
                <Slider isVisible = {true}>
                    <SliderImage src = {slider?.url} />
                </Slider>
            </Sliders>
            <HorizontalIndicator>
                {slidersData.map((s, i) => {
                    return <Indicator key = {s.id} isVisible = {index === i} />
                })}
            </HorizontalIndicator>
        </SliderContainer>
    )
}

export default SliderComponent
