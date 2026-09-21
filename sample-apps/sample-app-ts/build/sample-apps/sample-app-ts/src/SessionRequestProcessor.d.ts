import { FaceTecSessionRequestProcessor, FaceTecSessionResult, type FaceTecSessionRequestProcessorCallback } from "../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
export declare class SessionRequestProcessor implements FaceTecSessionRequestProcessor {
    onSessionRequest: (sessionRequestBlob: string, sessionRequestCallback: FaceTecSessionRequestProcessorCallback) => void;
    onResponseBlobReceived: (responseBlob: string, sessionRequestCallback: FaceTecSessionRequestProcessorCallback) => void;
    onUploadProgress: (progress: number, sessionRequestCallback: FaceTecSessionRequestProcessorCallback) => void;
    onCatastrophicNetworkError: (sessionRequestCallback: FaceTecSessionRequestProcessorCallback) => void;
    onFaceTecExit: (faceTecSessionResult: FaceTecSessionResult) => void;
}
