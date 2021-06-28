import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

const ColorList = ({ store }) => {
  const { colors, sort } = store.getState();
  return (
    <div>
      {colors.length === 0 ? (
        <p>색이 없습니다. (색을 추가해주세요)</p>
      ) : (
        colors.map(color => (
          <Color
            key={color.id}
            {...color}
            onRate={rating =>
              store.dispatch({ type: 'RATE_COLOR', id: color.id, rating })
            }
            onRemove={() =>
              store.dispatch({ type: 'REMOVE_COLOR', id: color.id })
            }
          />
        ))
      )}
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default ColorList;
