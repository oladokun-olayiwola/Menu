import React from "react";

const Menu = ({ foods }) => {
  //  console.log(foods);
  const render = foods.map((food) => {
    const { title, category, price, img, desc, id } = food;
   // console.log(food)
    return (
      <div key={id}>
        <div className="section-center" style={{ margin: "10px" }}>
          <article className="menu-item">
            <img src={img} alt={category} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        </div>
      </div>
    );
  });

  return <>{render}</>;
};

export default Menu;
