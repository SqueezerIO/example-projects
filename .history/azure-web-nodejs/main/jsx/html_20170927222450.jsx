import React from 'react';

const HTML = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default HTML;
