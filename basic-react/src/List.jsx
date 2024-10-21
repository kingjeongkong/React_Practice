import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => a.calories - b.calories);

  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : <b>&nbsp;{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

List.defaultProps = {
  items: [],
  category: 'Category',
};

export default List;
