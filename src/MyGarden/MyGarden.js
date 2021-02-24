import React from 'react';
import './MyGarden.css';

function MyGarden() {

  return (
    <article className="my-garden">
      <h1 className="my-garden-header">My Garden</h1>
      <section className="my-crops">
        <article className="my-crop">
          <h2>Tomato</h2>
          <p>IMAGE HERE LATER</p>
        </article>
        <article className="my-crop">
          <h2>Potato</h2>
          <p>IMAGE HERE LATER</p>
        </article>
        <article className="my-crop">
          <h2>Broccoli</h2>
          <p>IMAGE HERE LATER</p>
        </article>
      </section>
    </article>
  )
}

export default MyGarden;