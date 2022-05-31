import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";


import { SidebarData } from "./SidebarData";

function Main() {
  return (
    <div className="menu-container">
      <div className="links-container">
        {SidebarData.map((item, index) => {
          return (
            <nav>
          
               <Link to={item.path}>
                  <button type="button" className="btn btn-primary btn-lg">
                    <span> {item.icon}</span>
                    
                    <span>{item.title}</span>
                    
                  </button>
           </Link>
            </nav>
          );
        })}
      </div>
    </div>
  );
}
export default Main;
