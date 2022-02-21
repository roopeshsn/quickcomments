const theme = {
  styles: {
    global: (props) => ({
      html: {
        minWidth: "360px",
        scrollBehavior: "smooth",
      },
      "#_next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
    }),
  },
};
