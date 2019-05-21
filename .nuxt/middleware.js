const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js');
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['guest'] = require('../middleware/guest.js');
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['hasShop'] = require('../middleware/hasShop.js');
middleware['hasShop'] = middleware['hasShop'].default || middleware['hasShop']

middleware['locale-redirect'] = require('../middleware/locale-redirect.js');
middleware['locale-redirect'] = middleware['locale-redirect'].default || middleware['locale-redirect']

export default middleware
