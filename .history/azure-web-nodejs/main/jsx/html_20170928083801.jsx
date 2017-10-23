
const HTML = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Hello World</title>
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
