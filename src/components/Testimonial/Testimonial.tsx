import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import TestimonialItem from './TestimonialItem';

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <div className="testmonial_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="testmonial_active2 owl-carousel">
                
              <Carousel 
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={true}
            showStatus={false}
            swipeable={true}
            className="testmonial_active2"
            >
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
              </Carousel>

                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonial