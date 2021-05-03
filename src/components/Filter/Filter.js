import React from "react";
import { connect } from "react-redux";
import {
  filter_all,
  filter_without_transfer,
  filter_one_transfer,
  filter_two_transfer,
  filter_three_transfer,
} from "../../redux/actions/actions";

function Filter({
  filterAll,
  filterWithoutTransfer,
  filterOneTransfer,
  filterTwoTransfer,
  filterThreeTransfer,
  filter_all_checked,
  filter_without_transfer_checked,
  filter_one_transfer_checked,
  filter_two_transfer_checked,
  filter_three_transfer_checked,
}) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={filterAll}
        checked={filter_all_checked}
      />
      <span>Все</span>
      <br />
      <input
        type="checkbox"
        onChange={filterWithoutTransfer}
        checked={filter_without_transfer_checked}
      />
      <span>Без пересадок</span>
      <br />
      <input
        type="checkbox"
        onChange={filterOneTransfer}
        checked={filter_one_transfer_checked}
      />
      <span>1 пересадка</span>
      <br />
      <input
        type="checkbox"
        onChange={filterTwoTransfer}
        checked={filter_two_transfer_checked}
      />
      <span>2 пересадки</span>
      <br />
      <input
        type="checkbox"
        onChange={filterThreeTransfer}
        checked={filter_three_transfer_checked}
      />
      <span>3 пересадки</span>
      <br />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filter_all_checked: state.filter_all_checked,
    filter_without_transfer_checked: state.filter_without_transfer_checked,
    filter_one_transfer_checked: state.filter_one_transfer_checked,
    filter_two_transfer_checked: state.filter_two_transfer_checked,
    filter_three_transfer_checked: state.filter_three_transfer_checked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterAll: () => dispatch(filter_all()),
    filterWithoutTransfer: () => dispatch(filter_without_transfer()),
    filterOneTransfer: () => dispatch(filter_one_transfer()),
    filterTwoTransfer: () => dispatch(filter_two_transfer()),
    filterThreeTransfer: () => dispatch(filter_three_transfer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
