import React from "react";
import { connect } from "react-redux";
import { switch_sort } from "../../redux/actions/actions";

function Sort({ is_sort_by_cheapest, switch_sort }) {
  const sort_by_cheapest_handler = () => {
    if (!is_sort_by_cheapest) {
      switch_sort();
    }
  };

  const sort_by_fastest_handler = () => {
    if (is_sort_by_cheapest) {
      switch_sort();
    }
  };

  return (
    <div>
      <button onClick={sort_by_cheapest_handler}>Самый дешёвый</button>
      <button onClick={sort_by_fastest_handler}>Самый быстрый</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    is_sort_by_cheapest: state.is_sort_by_cheapest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switch_sort: () => dispatch(switch_sort()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
