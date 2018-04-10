import ProptTypes from 'prop-types';

export const TabContent = ({ content }) => (
  <section className="tab-content">
    <p>{content}</p>
  </section>
);

TabContent.propTypes = {
  content: ProptTypes.string
};
TabContent.defaultProps = {
  content: ''
};
