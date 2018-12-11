// instead of const createDebug = require('debug');
import createDebug from debug;

const debug = createDebug('akjs:demo');

const log = message => debug(message);

// instead of module.exports = log;
export default log;
