import { FaceTecSessionRequestProcessorCallback } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
import { SessionRequestProcessor } from "../SessionRequestProcessor";
export declare class SampleAppNetworkingRequest {
    private static readonly MAX_ERRORS_ALLOWED;
    static send: (referencingProcessor: SessionRequestProcessor, sessionRequestBlob: string, sessionRequestCallback: FaceTecSessionRequestProcessorCallback) => void;
    private static getSessionRequestRetryDelay;
    private static getResponseBlobOrHandleError;
    private static storeOfficialIDPhotoIfApplicable;
}
