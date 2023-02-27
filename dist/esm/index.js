import { registerPlugin } from '@capacitor/core';
const CallKitVoip = registerPlugin('CallKitVoip', {
    web: () => import('./web').then(m => new m.CallKitVoipWeb()),
});
export * from './definitions';
export { CallKitVoip };
//# sourceMappingURL=index.js.map