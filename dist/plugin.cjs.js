'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CallKitVoip = core.registerPlugin('CallKitVoip', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CallKitVoipWeb()),
});

class CallKitVoipWeb extends core.WebPlugin {
    async register() {
        console.log('call is register');
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CallKitVoipWeb: CallKitVoipWeb
});

exports.CallKitVoip = CallKitVoip;
//# sourceMappingURL=plugin.cjs.js.map
