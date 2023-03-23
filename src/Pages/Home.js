import React, {useEffect } from "react";
import Card from "../Components/Card";
import icon from "../Assets/images";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = `Home/SamCart`;
  });

  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      Prd_image: icon.img1,
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      Prd_image: icon.img2,
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      Prd_image: icon.img3,
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      Prd_image: icon.img4,
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      Prd_image: icon.img5,
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      Prd_image: icon.img6,
    },
  ];

  return (
    <main>
      <div className="product">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
