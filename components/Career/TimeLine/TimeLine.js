import { Chrono } from "react-chrono";
import { useScreenContext } from '../../ScreenContext';
import TimeCard from "../TimeCard/TimeCard";
import styles from './TimeLine.module.scss'

const TimeLine = ({timelineEntries}) => {

  const screenContext = useScreenContext();
  const sortedTimelineEntries = timelineEntries.sort((a,b) => a.fields.orderNum - b.fields.orderNum)

  return (
    <div className={styles.container}>
    <Chrono
      items={sortedTimelineEntries.map((el) => el.fields)}
      mode={screenContext == 'mobile' ? "VERTICAL" : "HORIZONTAL"}
      // slideShow={true}
      // slideItemDuration={500}
      // itemWidth={"150"}
      // cardLess={true}
      lineWidth={5}
      hideControls={screenContext == 'mobile' ? true : false}
      flipLayout={screenContext == 'mobile' ? true : false}
      // cardHeight={100}
      borderLessCards={true}
      cardPositionHorizontal='TOP'
      // disableAutoScrollOnClick={true}
      // focusActiveItemOnLoad={false}
      showAllCardsHorizontal={true}
      // cardWidth={300}
      cardHeight={150}
      theme={{
        primary: "rgb(226, 92, 197)",  //color of line and points, outline frame of timecard, color of card subtitle
        secondary: "rgb(27, 27, 27)",   //background of timeItem and timepoint while focussed
        cardBgColor: "",  //timecard background color
        cardForeColor: "", //color of card title
        titleColor: "rgb(240,234,214)", //color of timepoint titles
        titleColorActive: 'rgb(226, 92, 197)', //color of timepoint titles when focussed
      }}
      fontSizes={{
        // cardSubtitle: '0.85rem',
        // cardText: '0.8rem',
        // cardTitle: '1rem',
        title: '1.4rem',
      }}
      classNames={{
        card: 'timeCard',
        title: 'timePoint'
      }}
    >
        {sortedTimelineEntries.map((timeLineEntry, index) => {
          return <TimeCard timeLineEntry={timeLineEntry} key={index}/>
        })}
    </Chrono>
  </div>
  )
}

export default TimeLine
