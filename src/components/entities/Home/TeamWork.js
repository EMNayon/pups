import React from "react";
// import Img1 from '../../../assets/images/project-main.jpg'
// import Img2 from '../../../assets/images/project-1.jpg'
// import Img3 from '../../../assets/images/project-2.jpg'

export default function TeamWork() {
  return (
    // <section className = "section-one">
    <div className="section-one">
      <div className="container">
        <div className="sec-one-left">
          {/* <!-- image here --> */}
          {/* <img src={Img1} alt=''/> */}
          <div>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos suscipit ut aliquid ab illo. Repellat nam molestias
              repellendus perspiciatis blanditiis.
            </p>
            {/* <a href = "#" className = "btn">view all</a> */}
          </div>
        </div>

        <div className="sec-one-right">
          <div className="work-content">
            <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ducimus laboriosam facilis repudiandae neque minus in corrupti
              consequatur illum placeat nam libero adipisci quidem doloribus,
              numquam eius delectus quaerat omnis illo earum necessitatibus
              natus soluta deserunt iusto. Modi, soluta quos.
            </p>
            {/* <a href = "#" className = "btn">view all</a> */}
          </div>
          <div className="work-imgs">
            <div className="work-img-1">
              {/* <!--image here--> */}
              {/* <img src={Img2} alt=''/> */}
            </div>
            <div className="work-img-2">
              {/* <!-- image here --> */}
              {/* <img src={Img3} alt=''/> */}
            </div>
          </div>
          <h3>
            "Taking an image, freezing a moment, reveals how rich reality truly
            is."
          </h3>
        </div>
      </div>
    </div>
  );
}
