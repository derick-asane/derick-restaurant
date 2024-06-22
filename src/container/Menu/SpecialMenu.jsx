import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specilaMenu-title">
      <SubHeading title="Menu that feet your palate" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="" style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More{" "}
      </button>
    </div>
  </div>
);

export default SpecialMenu;
