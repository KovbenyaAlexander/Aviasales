import React from "react";
import classes from "./List-item.module.css";
import { connect } from "react-redux";

function ListItem(data) {
  if (data.ticket) {
    const ticketElements = data.ticket.segments.map((ticketInfo, id) => {
      const travel_durationMinutes = ticketInfo.duration;
      const travel_duration = getTimeFromMins(travel_durationMinutes); //human readable value

      const start_time_timestamp = Date.parse(ticketInfo.date);
      const start_time = new Date(start_time_timestamp);
      const start_hours = start_time.getHours();
      const start_minutes = start_time.getMinutes();

      const travel_durationMilliSec = travel_durationMinutes * 60000;
      const end_time_timestamp = start_time_timestamp + travel_durationMilliSec;
      const end_time = new Date(end_time_timestamp);
      const end_hours = end_time.getHours();
      const end_minutes = end_time.getMinutes();

      return (
        <div key={id}>
          <p className={classes.destination}>
            {ticketInfo.origin}-{ticketInfo.destination}
          </p>
          <p> travel_time: {travel_duration}</p>
          <p> {ticketInfo.stops.length} пересадок </p>
          {ticketInfo.stops.map((item, id) => {
            return <span key={id}>{item} </span>;
          })}
          <br />
          {start_hours}:{start_minutes}
          <br />
          {end_hours}:{end_minutes}
          <hr />
        </div>
      );
    });

    return (
      <div className={classes.ListItem}>
        <p className={classes.price}> {data.ticket.price} Р</p>
        <p> carrier: {data.ticket.carrier}</p>
        <hr />
        {ticketElements}
      </div>
    );
  }

  return null;
}

function getTimeFromMins(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}ч ${minutes}м`;
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ListItem);
