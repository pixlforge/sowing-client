const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js');
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['guest'] = require('../middleware/guest.js');
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['hasShop'] = require('../middleware/hasShop.js');
middleware['hasShop'] = middleware['hasShop'].default || middleware['hasShop']

middleware['landing-page-redirect'] = require('../middleware/landing-page-redirect.js');
middleware['landing-page-redirect'] = middleware['landing-page-redirect'].default || middleware['landing-page-redirect']

export default middleware
