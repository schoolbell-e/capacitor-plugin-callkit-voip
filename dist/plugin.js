var capacitorCallKitVoip = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
