import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
//icons
import {MdSpaceDashboard} from 'react-icons/md';
import {FcNext} from 'react-icons/fc';
import "../../assests/styles/Home.css";
import admin from "../../assests/images/undraw_financial_data_re_p0fl.svg";
//importing css
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { BsPeople } from "react-icons/bs";
//firestore
//react-chartjs-2
import { Bar } from "react-chartjs-2";
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

// ----------------
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Home({ businesses, user, reviewsValue }) {
  const [chartData, setchartData] = useState([]);

  useEffect(() => {
    handleLabels();
  }, [businesses]);

  function handleLabels() {
    console.log(businesses);
    let Resturant = 0;
    let Hotel = 0;
    let Cafe = 0;
    let Bar = 0;
    businesses.map((item) => {
      switch (item.Category) {
        case "Restaurant":
          Resturant++;
          break;
        case "Hotel":
          Hotel++;
          break;
        case "Cafe":
          Cafe++;
          break;
        case "Bar":
          Bar++;
          break;

        default:
          console.log("...");
      }
    });
    let temp = [];

    temp.push(Resturant, Hotel, Cafe, Bar);
    setchartData(temp);
  }
  ChartJS.defaults.font.size = 14;
  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "",
      },
      title: {
        display: false,
        text: "categories registered",
      },
    },
  };
  const labels = ["Resturants", "Hotel", "Cafe", "Bar"];
  const data = {
    labels,
    datasets: [
      {
        label: " ",
        data: chartData,
        borderColor: "rgb(0,0,0)  ",
        backgroundColor: "rgba(0, 19, 113,70)",
      },
    ],
  };
  return (
    <div className="home-main-container tu">
      <div className="welcome-container">
        <div className="welcome-heading">
          <h1>Hi Arsan</h1>
          <h1>Welcome back!</h1>
        </div>
        <div className="welcome-message">
          <p>
            This page is dcountesigned to give some important information about
            the application. Let's make someting together!
          </p>
        </div>
        <div className="welcome-admin-illu">
          <img src={admin} alt="React Logo" height="200px" width="250px" />
        </div>
      </div>
      <div className="mini-analytics-container">
        <div className="reactions-preview-container">
          <React.Fragment>
            <div className="like-container">
              <FcLike size={38} />
              <div className="numeric-value-container">
                <span>24,000</span>
                <br />
                <span>Loves</span>
              </div>
            </div>
            <div className="users-container">
              <BsPeople size={38} />{" "}
              <div className="numeric-value-container">
                <span>{user}</span>
                <br />
                <span>Registered users</span>
              </div>
            </div>
            <div className="review-container">
              <FcComments size={38} />
              <div className="numeric-value-container">
                <span>{reviewsValue}</span>
                <br />
                <span>Reviews</span>
              </div>
            </div>
          </React.Fragment>
          <div className="services-provided-chart-container">
            <Bar options={options} data={data} width="200" height="200" />
          </div>
        </div>
      </div>
      <div className="targets-container">
        <div className="targets">
          <h3>Targets</h3>
          <div className="cont">
            <span>Businesses listed</span>
            <progress className="business"></progress>
          </div>
          <div className="cont">
            <span>Users registered</span>
            <progress className="user"></progress>
          </div>
          <div className="cont">
            <span>Yearly revenue</span>
            <progress className="reven"></progress>
          </div>
        </div>
        <Link to="/dashboard">
        <button type="button" className="dash-btn btn-primary btn-lg">
          <MdSpaceDashboard size={40}/>
          <p>View dashboard</p>
          <FcNext size={40}/>
        </button>
        </Link>
        
      </div>
    </div>
  );
}
export default Home;
