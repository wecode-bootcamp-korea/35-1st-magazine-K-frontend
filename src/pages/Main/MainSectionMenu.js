/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainSectionMenu.scss';

function MainSectionMenu() {
  const [MagaZineK, setMagaZineK] = useState([]);
  const [Design, setDesign] = useState([]);

  useEffect(() => {
    fetch('/data/MagazineKData.json')
      .then(res => res.json())
      .then(data => {
        setMagaZineK(() => data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/DeSignData.json')
      .then(res => res.json())
      .then(data => {
        setDesign(() => data);
      });
  }, []);

  return (
    <div className="mainSectionMenu">
      <p className="sectionTitle">shop</p>
      <span className="sectionMenu">
        <span className="mainMenu">
          <span className="mainMenuTitle">Magazine K</span>
          <span> , </span>
        </span>
        <span className="subMenu">
          <span className="subMenu1">Design&Lifestyle</span>
          <span> , </span>
          <span className="subMenu2">Fashion</span>
        </span>
      </span>
      <div className="menuInfo">
        {MagaZineK.map(
          ({ id, img, main_category_name, issue_number, title, desc }, i) => {
            return (
              <Link
                to={
                  id === 1
                    ? '/Products/17'
                    : id === 2
                    ? '/Products/5'
                    : '/Products/2'
                }
                key={id}
              >
                <div className="info">
                  <img
                    className={i === 1 ? 'halfImg' : null}
                    src={img}
                    alt="1"
                  />
                  <div className="category">
                    <span className="cate">{main_category_name}</span>
                    <span className="issueNum">ISSUE NO.{issue_number}</span>
                  </div>

                  <div className="title">{title}</div>
                  <p className="desc">{desc}</p>
                </div>
              </Link>
            );
          }
        )}
      </div>
      <div className="sectionShopLink">
        <Link to="/ProductList">
          Shop<span className="Arrow">➡️</span>
        </Link>
      </div>
    </div>
  );
}

export default MainSectionMenu;
