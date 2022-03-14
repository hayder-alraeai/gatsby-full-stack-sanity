import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const formatMony = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format;
const createPatchForm = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));
function Priceinput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMony(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(v) => onChange(createPatchForm(v.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

export default Priceinput;
