import React from "react";
import Header from "./Header";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home__Div">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg"
          alt="Home-big-img"
        />
        {/* Home Products */}
        <div className="home_product_row">
          <Product
            id={12312}
            title={
              "The Lean Startup : The Million Copy Bestseller Driving Entrepreneurs to Success"
            }
            price={"521"}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81vvgZqCskL._SL1500_.jpg"
            }
          />

          <Product
            id={67534}
            title={
              "boAt Nirvana Ion TWS Earbuds with 120 HRS Playback(24hrs/Charge), Crystal Bionic Sound with Dual EQ Modes, Quad Mics ENx™ Technology, Low Latency(60ms), in Ear Detection(Charcoal Black)"
            }
            price={"1,999"}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61NDPRXm9XL._AC_UL320_.jpg"
            }
          />
        </div>

        <div className="home_product_row">
          <Product
            id={97312}
            title={
              "ASUS ROG Zephyrus M16 (2022), 16-inch (40.64 cms) 2K QHD 165Hz/3ms, Intel Core i7-12700H 12th Gen, RTX 3060 6GB Graphics"
            }
            price={"1,74,999"}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81xnSQAMDLL._SL1500_.jpg"
            }
          />

          <Product
            id={70112}
            title={"U-TURN Men's Cotton Solid Formal/Semi Formal Shirt"}
            price={"417"}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/51ybvgpUUkL._SY500_.jpg"
            }
          />

          <Product
            id={58712}
            title={"FEBMANIA Women's Bodycon Knee Length Dress"}
            price={"350"}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61HB7-hPtLL._SY550_.jpg"
            }
          />
        </div>
        <div>
          <Product
            id={12312}
            title={
              "Acer XZ306CX 29.5 Inch (74.93 Cm) Ultrawide 21:9 1500R Curve 2560 X 1080 Pixels LCD Monitor with LED Backlight I 1 MS VRB I 200 Hz I HDR 400 I DCI-P3 93% I AMD Free Sync I 2XHDMI 1XDP "
            }
            price={"21,999"}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71sBDiA+O3L._SL1500_.jpg"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Home;
