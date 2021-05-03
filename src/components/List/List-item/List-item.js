import React from "react";
import classes from "./List-item.module.css";
import { connect } from "react-redux";

function ListItem(data) {
  if (data.ticket) {
    return (
      <div className={classes.ListItem}>
        <p> {data.ticket.price}</p>
      </div>
    );
  }

  return null;
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ListItem);
