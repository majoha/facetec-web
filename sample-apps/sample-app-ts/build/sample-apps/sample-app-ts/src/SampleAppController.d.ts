import { FaceTecSessionResult } from "../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
export declare class SampleAppController {
    private themeHelpers;
    private faceTecSDKInstance;
    static latestOfficialIDPhoto: string;
    static demonstrationExternalDatabaseRefID: string;
    constructor();
    private initializeFaceTecSDK;
    private onFaceTecSDKInitializationSuccess;
    private onFaceTecSDKInitializationFailure;
    onLivenessCheckPressed: () => void;
    onEnrollUserPressed: () => void;
    onVerifyUserPressed: () => void;
    onPhotoIDMatchPressed: () => void;
    onPhotoIDScanPressed: () => void;
    onOfficialIDPhotoPressed: () => void;
    onContinueOfficialIDPhotoPressed: () => void;
    onCancelOfficialIDPhotoPressed: () => void;
    onDownloadOfficialIDPhotoPressed: () => void;
    onDesignShowcasePressed(): void;
    onVocalGuidanceSettingsButtonPressed(): void;
    private generateExternalDatabaseRefID;
    static demonstrateHandlingFaceTecExit: (FaceTecSessionResult: FaceTecSessionResult) => void;
}
