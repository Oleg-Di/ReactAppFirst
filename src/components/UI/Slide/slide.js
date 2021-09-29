import React from "react";
import { Carousel } from 'react-carousel-minimal';
import Loader from "../Loading/loading";

function Slide(props) {


  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Appp">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={props.data.length > 0 ? props.data : <Loader/>}
            time={5000}
            width={props.width}
            height={props.height}
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={props.slideNumber}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit={props.slideImageFit}
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;