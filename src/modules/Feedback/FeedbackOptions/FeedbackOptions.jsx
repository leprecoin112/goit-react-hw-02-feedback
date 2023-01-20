import React from 'react';
import Button from 'shared/components/Button/Button';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(({ type, title }) => (
        <Button
          key={title}
          onClick={onLeaveFeedback}
          type={type}
          title={title}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
