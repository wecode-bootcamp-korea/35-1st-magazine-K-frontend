import React, { useEffect, useState } from 'react';
import './MainSectionMenu.scss';
function MainSectionMenu() {
  const [mainSectionMenuData, setMainSectionMenu] = useState([]);

  useEffect(() => {
    fetch('/data/mainSectionMenudata.json')
      .then(res => res.json())
      .then(data => {
        setMainSectionMenu(() => data);
      });
  }, []);

  return (
    <div className="mainSectionMenu">
      <p className="sectionTitle">shop</p>
      <div className="sectionMenu">
        <h1 className="mainMenu">Magazine K,</h1>
        <h2 className="subMenu">Design&Lifestyle, Tech</h2>
      </div>
      <div className="menuInfo">
        {mainSectionMenuData.map(
          ({ id, img, main_category_name, issue_number, title, desc }, i) => {
            return (
              <div className="info" key={id}>
                <img className={i === 1 ? 'halfImg' : null} src={img} alt="1" />
                <div className="category">
                  <span className="cate">{main_category_name}</span>
                  <span className="issueNum">ISSUE NO{issue_number}</span>
                </div>

                <div className="title">{title}</div>
                <p className="desc">{desc}</p>
              </div>
            );
          }
        )}
      </div>
      <div className="sectionShopLink">
        Shop<span className="Arrow">➡️</span>
      </div>
    </div>
  );
}

export default MainSectionMenu;
