import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import TimeCard from "../TimeCard/TimeCard";
import items from "./items";
import styles from './TimeLine.module.scss'

const TimeLine = () => {

  const [screenWideEnough, setscreenWideEnough] = useState(false)
  const checkSize = () =>  setscreenWideEnough(window.innerWidth < 700 ? false : true);

  useEffect(() => {
        checkSize()
        window?.addEventListener('resize', checkSize);
        return () => {
            window?.removeEventListener('resize', checkSize);
        };
    }, []);

  return (
    <div className={styles.container}>
    <Chrono
      items={items}
      mode={screenWideEnough ? "HORIZONTAL" : "VERTICAL"}
      slideShow={true}
      slideItemDuration={500}
      // itemWidth={"150"}
      // cardLess={true}
      lineWidth={5}
      hideControls={true}
      // cardHeight={100}
      borderLessCards={true}
      // disableAutoScrollOnClick={true}
      // focusActiveItemOnLoad={false}
      showAllCardsHorizontal={true}
      theme={{
        primary: "yellow",  //color of line and points, outline frame of timecard, color of card subtitle
        secondary: "black",   //background of timeItem and timepoint while focussed
        cardBgColor: "",  //timecard background color
        cardForeColor: "pink", //color of card title
        titleColor: "white", //color of timepoint titles
      }}
    >
        {items.map((item, index) => {
          return <TimeCard timeItem={item} key={index}></TimeCard>
        })}
    {/* <div>
      <div style={{width: "250px", height: "250px"}}>
        <img style={{maxWidth:  "100%", maxHeight:  "100%"}}  src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"/>
      </div>
    </div>
    <div>
      <h3>This is a List</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    <div>
      <h3>Dunkirk</h3>
      <p>
        The Battle of Dunkirk (French: Bataille de Dunkerque) was fought in Dunkirk (Dunkerque), France, during the Second World War, between the Allies and Nazi Germany.
      </p>
    </div>
    <div style={{margin: "1rem"}}>
      <h3>Table</h3>
      <table>
        <thead>
          <tr>
            <td>Column  1</td>
            <td>Column  2</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
          </tr>
          <tr>
            <td>Value 5</td>
            <td>Value 6</td>
          </tr>
        </tbody>
      </table>
    </div> */}
    </Chrono>
  </div>
  )
}

export default TimeLine
