import flower1 from './flower1.png'
import flower2 from './flower2.png'
import flower3 from './flower3.png'
import flower4 from './flower4.png'
import flower5 from './flower5.png'

import offerflower1 from './offerflower1.png'
import offerflower2 from './offerflower2.png'
import offerflower3 from './offerflower3.png'

import logo from './logo.png'
import flowerImage from './flowerImage.png'


export const assets = {
    logo,

    flowerImage,

    flower1,
    flower2,
    flower3,
    flower4,
    flower5
}

export const flowers = [
    { name: "Rose Bouquet", image: assets.flower1, price: "1399" },
    { name: "Tulip Arrangement", image: assets.flower2, price: "1699" },
    { name: "Lily Collection", image: assets.flower3, price: "1399"},
    { name: "Rose Collection", image: assets.flower4, price: "1299"},
    { name: "Paper Rose Bouquet", image : assets.flower5, price: "1799"}
];

export const offers = [
    { title: "Exciting Offer!", discount: "25%", image: offerflower1 },
    { title: "Limited Deal!", discount: "30%", image: offerflower2 },
    { title: "Special Discount!", discount: "20%", image: offerflower3 },
  ];

