import React from 'react'
import SliderItem from './SliderItem'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="slider_area">
        <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={true}
            showStatus={false}
            swipeable={true}
            className="slider_active"
            >
          <SliderItem bg={`slider_bg_2`} title={`Grow Big With Musicol Business`} desc={`Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.`}/>
          <SliderItem bg={`slider_bg_1`} title={`Grow Big With Musicol Business`} desc={`Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.`}/>
          <SliderItem bg={`slider_bg_2`} title={`Grow Big With Musicol Business`} desc={`Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.`}/>
        </Carousel>
      </div>
  )
}

export default Slider