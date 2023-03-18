import React from 'react'

export default function Footer() {
  return (
    <div className=''>
     <footer className = "bg-black py-10 text-center text-white items-center">
            <div className = "footer-container container flex justify-between">
                <div className='my-10'>
                    <h2 className='text-lightGreen font-bold text-4xl tracking-widest '>SARAH DOE</h2>
                    <p className='opacity-50 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati sapiente minima itaque nam modi libero optio vitae animi, praesentium quis commodi fugit quasi nostrum nihil veniam nisi suscipit cumque ducimus error doloribus est voluptatum at? Et aut mollitia quia.</p>
                </div>
                <div>
                    <h3>Free Subscription!</h3>
                    <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere eius! Ipsam laborum modi, cumque dolor incidunt animi nam magni.</p>

                    <div className = "bg-black w-96 flex justify-between items-center mx-auto">
                        <i className = "fas fa-envelope text-2xl "></i>
                        <input className='bg-transparent border-none text-base px-2 outline-0 text-white' type = "email" id = "email" placeholder="Email Address"/>
                        <button className='text-base py-4 font-bold bg-lightGreen border-none transition-none cursor-pointer hover:text-white' type = "submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright SARAHDOE . SIMPLE AND NICE TEMPALTE</p>
        </footer>
    </div>
  )
}
