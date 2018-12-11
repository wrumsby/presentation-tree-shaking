import logger from 'loglevel';
import messages from './messages';
import nullNewRelic from './nullNewRelic';

export const generateBrowserSnippet = (options = {}) => {
  const { licenseKey = '', applicationId = '' } = options;

  if (licenseKey === '') {
    logger.warn(messages.NO_LICENSE_KEY);
  }

  if (applicationId === '') {
    logger.warn(messages.NO_APPLICATION_ID);
  }

  // THIS SCRIPT HAS BEEN OMITTED FOR READABILITY
  /* eslint-disable no-useless-escape */
  return `
    <script type="text/javascript">
      ...
    </script>
  `;
  /* eslint-enable no-useless-escape */
};

// There are cases where window.newrelic and window.NREUM are
// undefined even if we include the snippet.
//
// In those cases return nullNewRelic which provides null object
// implementations of the New Relic Browser API.
export const newrelic = () =>
  window.newrelic || window.NREUM || nullNewRelic;
