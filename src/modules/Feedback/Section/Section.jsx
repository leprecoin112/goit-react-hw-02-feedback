import React from 'react';
import Title from 'shared/components/Title/Title';

function Section({ title, children }) {
  return (
    <div>
      <Title title={title} />
      {children}
    </div>
  );
}

export default Section;
