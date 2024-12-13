// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import { useState } from "react";

export default function Exercise9() {
  const [price, setPrice] = useState(100);
  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={() => setPrice(75)}>Apply Discount</button>
    </div>
  );
}
