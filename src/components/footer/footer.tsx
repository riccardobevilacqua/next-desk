import React from 'react';

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <section className="section is-fixed-bottom">
      <div className="container">
        <footer className="footer">
          <div className="content has-text-centered">
            <p>Riccardo Bevilacqua 2020 <a href="http://opensource.org/licenses/mit-license.php">MIT</a></p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export { Footer };
