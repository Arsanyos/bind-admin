import React, { useState, useEffect } from "react";
import { deleteDoc, arrayUnion, runTransaction } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { SiGooglemybusiness } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import {
  onSnapshot,
  getFirestore,
  collection,
  where,
  query,
  get,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import "../../assests/styles/Verification.css";

function Verification({ pendingUsersRefs, firebaseApp }) {
  useEffect(() => {}, []);
  const db = getFirestore(firebaseApp);
  function handleVerify(usrRef, busiRef, uid, bid, penRef) {
    updateDoc(busiRef, {
      Uid: uid,
      Claimed: true,
    });
    updateDoc(usrRef, {
      OwnedBusinessBid: arrayUnion(bid),
    });
    deleteDoc(penRef);
  }
  const pendingUsersCont = pendingUsersRefs.map((item) => {
    return (
      <div className="verify-user-container">
        <div className="user-buisness-link-container">
          <FaUserCircle size={38} />
          <div className="binder-container"></div>
          <SiGooglemybusiness size={38} />
        </div>
        <div className="tag-container">
          <p>{item.Firstname}</p> <p>{item.Businessname}</p>
        </div>
        <div className="a">
          <p className="wants-cont">Wants to own...</p>
        </div>
        <button
          onClick={() => {
            handleVerify(
              item.usrRef,
              item.busiRef,
              item.Uid,
              item.Bid,
              item.penId
            );
          }}
          className="verify-button"
        >
          Verify
        </button>
      </div>
    );
  });
  return <div className="verification-main-container">{pendingUsersCont}</div>;
}
export default Verification;
