import { connect } from "react-redux";
import Loader from "../Loader";
import ListItem from "./List-item/List-item";
import { show_additional_cards } from "../../redux/actions/actions";

function List({ data, show_additional_cards, countOfListItems }) {
  if (!data) {
    return <Loader />;
  }

  const ticketsArray = data.tickets.map((ticket, id) => {
    if (id < countOfListItems) {
      return <ListItem key={id} ticket={ticket} />;
    }
  });
  return (
    <div>
      {ticketsArray}
      <button onClick={show_additional_cards}>Показать ещё 5 билетов!</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    countOfListItems: state.countOfListItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    show_additional_cards: () => {
      dispatch(show_additional_cards());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
