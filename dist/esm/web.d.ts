import { WebPlugin } from '@capacitor/core';
import type { CallKitVoipPlugin } from './definitions';
export declare class CallKitVoipWeb extends WebPlugin implements CallKitVoipPlugin {
    register(): Promise<void>;
}
