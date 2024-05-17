import PropTypes from "prop-types";
import Helmet from "react-helmet";

const Container = ({ siteMetadata, children }) => {
  return (
    <>
      <Helmet
        title={siteMetadata.title}
        meta={[
          {
            name: "description",
            content: siteMetadata.description,
          },
          {
            name: "keywords",
            content: siteMetadata.keywords,
          },
        ]}
      />
      <div className={"main-body"}>{children}</div>
    </>
  );
};

Container.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
