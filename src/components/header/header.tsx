import React from 'react';

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Next Desk</h1>
          <h2 className="subtitle">Choose your next office to work from.</h2>
        </div>
      </div>
    </section>
  );
}
