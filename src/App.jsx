import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './images/Group.png'
import img2 from './images/Group (2).png'
import img3 from './images/Vector (2).png'
import img4 from './images/Group (3).png'
import img5 from './images/Group (4).png'
import img6 from './images/Group (5).png'
import img7 from './images/Group (6).png'
import img8 from './images/Group (7).png'
import img9 from './images/Group (8).png'
import img10 from './images/Group (9).png'
import img11 from './images/Group (10).png'
import img12 from './images/Group (11).png'
import img13 from './images/Group (12).png'
import img14 from './images/Group (13).png'
import img15 from './images/Group (14).png'
import img16 from './images/Group (14).png'
import img17 from './images/Frame (1).png'
import img18 from './images/Vector (4).png'
import img19 from './images/Vector (5).png'
import { Container } from 'postcss'




function App() {

    return  (
              <div>

                  <header class="flex justify-between">
     <div>
      <div class="flex">
     <div class="logo font-extrabold text-white text-3xl">
         PayEase Pro
     </div>
     <div class=" features absolute w-fit md:static bg-gray-400 md:bg-black inse-0 md:flex  md:py-2 md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0">
          <div class="fitem text-green-600">Home</div>
          <div class="fitem text-white">About Us</div>
          <div class="fitem text-white">Pricing</div>
          <div class="fitem text-white">Features</div>
     </div>
     </div>

      <div class="navbar  p-4">
        <div class="hamburger inline-block p-1 cursor-pointer md:hidden">
             <div class="line h-0.5 w-6 my-1 bg-white"></div>
             <div class="line h-0.5 w-6 my-1 bg-white"></div>
             <div class="line h-0.5 w-6 my-1 bg-white"></div>
        </div>
      </div>
      </div>

      <div class="buttons">
      <button class="text-white rounded-full border  border-green-600 bg-black-600 px-3 py-2">
              Sign Up
            </button>
            <button class="text-white rounded-full border border-green-600 bg-black-600 px-3 py-2 mx-3">
              Login
            </button>
      </div>
                  </header>

                  <img class="py-3 md:px-24 lg:px-80 xl:px-80 2xl:px-96" src={img1} />

                  <img class="py-3 md:px-24 lg:px-80 xl:px-80 2xl:px-96" src={img2} />

                  <main class="flex-row lg:px-48 xl:flex">
          <div class="py-20 px-16">
            <div class="px-52">
              <img src={img5} />
            </div>
          <h1 class="text-white font-bold text-5xl py-2">
          One platform for any business.
          </h1>
          <p class="text-gray-400 my-2 text-2xl">
            Make online payments and keep track of all your transactions.
            </p>

            <div class="flex my-3">
              <img src={img3} />
            <p class="text-gray-400 text-1xl px-4 text-2xl">
                  Data Protection
            </p>
            </div>

            <div class="flex my-2">
            <img src={img3} />
            <p  class="text-gray-400 text-1xl px-4 text-2xl">
                Fraud Prevention
              </p>
            </div>

            <div class="flex my-2">
            <img src={img3} />
            <p  class="text-gray-400 text-1xl px-4  text-2xl">
                24/7 Monitoring
              </p>
            </div>

            </div>

            <div class="xl:py-24">
               <img src={img4} />
            </div>

                  </main>

                  <img class="xl:px-20 2xl:px-28" src={img6} />

                  <main2 class="flex-row py-5 xl:flex">
                  <div>
                      <img src={img7} />
                  </div>
            <div class="px-11 xl:py-32">
            <div class="px-52">
              <img src={img5} />
            </div>
          <h1 class="text-white font-bold text-5xl py-2">
          One platform for any business.
          </h1>
           <div class="flex my-3">
              <img src={img3} />
            <p class="text-gray-400 text-2xl px-4">
                 Secure Sockets Layer (SSL) Encryption
            </p>
            </div>

            <div class="flex my-1">
            <img src={img3} />
            <p  class="text-gray-400 text-2xl px-4">
                Multi-Factor Authentication (MFA)
              </p>
            </div>

            <div class="flex my-1">
            <img src={img3} />
            <p  class="text-gray-400 text-2xl px-4">
               Regulatory Compliance
              </p>
            </div>
            <div class="py-3">
              <button class="text-white bg-green-300 rounded-full text-center py-3 px-6">
                    download - it’s free
              </button>
              </div>

            </div>
                  </main2>

                  <main3 class="flex-row py-7 lg:mx-36 lg:px-16 xl:flex">
                    <div>
                       <img src={img8} />
                    </div>
                    <div>
                       <img src={img9} />
                    </div>

                  </main3>

                  <footer class="mx-36">
                  <div class="px-20 lg:px-40">
                      <img class="h-20 w-96" src={img10} />
                  </div>

                 <div class="flex-row py-10 xl:flex">

                   <div class="mx-10">
                      <img src={img11} />
                      <img class="py-9" src={img12} />
                      <img src={img13} />
                   </div>
                    
                   <div class="mx-10 my-8 xl:-m-px">
                     <img src={img14} />
                     <img class="py-9" src={img15} />
                     <img src={img16} />
                   </div>
                </div>
                  </footer>

                  <footer2 class="">
                         <img class="lg:mx-20" src={img17} />
                  </footer2>

                  <footer3 class="flex my-9 xl:mx-72">
                  <div>
             <h1 class="text-white text-6xl">.</h1>
             <div class="flex">
                <img class="h-3 my-2" src={img18} />
                <p class="text-white px-2">help@devticks.com/</p>
             </div>
             <div class="flex">
                <img class="h-3 my-2" src={img19} />
                <p class="text-white px-2">+47982903685</p>
             </div>
          </div>

         <div class="mx-5">
          <h1 class="font-bold text-white text-2xl">Links</h1>
          <p class="  text-white">Home</p>
          <p class="  text-white">About Us</p>
          <p class="  text-white">Bookings</p>
          <p class="  text-white">Blog</p>
         </div>

         <div class="mx-5">
          <h1 class="font-bold text-white text-2xl">Legal</h1>
          <p class="  text-white">Term Of Use</p>
          <p class="  text-white">Privacy Policy</p>
          <p class="  text-white">cookie Policy</p>
         </div>

         <div class="mx-5">
          <h1 class="font-bold text-white text-2xl">Product</h1>
          <p class="  text-white">Take Tour</p>
          <p class="  text-white">Live Chat</p>
          <p class="  text-white">Reviews</p>
         </div>

         <div class="mx-5">
          <h1 class="font-bold text-white text-2xl">Newsletter</h1>
          <p class="  text-white">Stay Up To Date</p>
         </div>
                  </footer3>

                  <hr />

                  <p class="text-white text-center py-8 text-2xl">Copyright 2022 Frybix inc. all rights reserved</p>




              </div>
    )

  }

export default App
