import PropTypes from "prop-types";

/**
 * vendor
 */

/**
 * styles
 */

/** ========== */

const Description = ({ list, ...props }) => {
  return (
    <div
      {...props}
      className={`${
        props.className ? `${props.className}` : "text-base text-black"
      }`}
      style={{
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Description;

Description.propTypes = {};

Description.defaultProps = {};

export const Descriptions = ({ list, wrapper, contentClass, ...props }) => {
  if (list?.length > 0) {
    if (wrapper) {
      return (
        <div {...wrapper}>
          {list.map((item, index) => (
            <div
              className={contentClass || "mb-4 last:mb-0"}
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      );
    }
    return (
      <>
        {list.map((item, index) => (
          <div
            className={contentClass || "mb-4 last:mb-0"}
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </>
    );
  } else {
    return <></>;
  }
};

Descriptions.propTypes = {
  list: PropTypes.array,
  wrapper: PropTypes.object,
  contentClass: PropTypes.string,
};

Descriptions.defaultProps = {
  list: [],
  contentClass: "mb-4 last:mb-0",
};

/** ========== */
