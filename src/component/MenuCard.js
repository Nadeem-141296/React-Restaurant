import React from "react";

const MenuCard = ({ menuData }) => {
  
  return (
    <>
      <section className="main-card--cointainer">       

        {menuData.map((curElem) => {
            const { id, name, category, image, description,price } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <img
                      src={image}
                      alt="images"
                      className="card-media"
                    />

                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{category} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div>
                      <span className="price">{price}</span>
                    </div>
                    <div className="card-read">Read</div>
                  </div>

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
