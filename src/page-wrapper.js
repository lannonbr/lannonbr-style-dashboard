/** @jsx h */
import { h } from "preact";
import { Helmet } from "react-helmet";

export default ({ children, ...props }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
      </Helmet>
      <header className="bg-green-400 p-2">
        <div className="flex max-w-6xl w-full mx-auto">
          <h1 className="flex-1">
            <a href="/">Lannonbr style dashboard</a>
          </h1>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-2">{children}</div>
    </div>
  );
};
