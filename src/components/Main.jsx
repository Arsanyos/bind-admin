import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { SidebarData } from "./SidebarData";
import "../assests/styles/Home.css";
function Main() {
  return (
    <div className="main-container">
      <div className="menu-container">
        <div className="links-container">
          {SidebarData.map((item, index) => {
            return(
               <button type="button" className="btn btn-primary btn-lg">
              {item.icon}
              <span>{item.title}</span>
            </button>
            );
          })}
        </div>
    
      </div>
    </div>
  );
}
export default Main;
