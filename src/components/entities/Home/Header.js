import React from 'react'
import Img from '../../../assets/images/about-img.jpg'
export default function Header() {
  return (
    <div>
      <div className = "container about">
                <div className = "about-content">
                    <div className = "about-img flex">
                        <img src = {Img} alt = "photographer img"/>
                    </div>
                    <h2>I'm Sarah Doe</h2>
                    <h3>Photographer | Traveller</h3>
                    <blockquote>
                        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things, long after you have forgotten everything."
                        <span>-Aaron Siskind</span>
                    </blockquote>
                </div>

                <div className = "social-icons">
                    <ul>
                        <li>
                            <a href = "#"><i className = "fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href = "#"><i className = "fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href = "#"><i className = "fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href = "#"><i className = "fab fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}
