import { FaceTecInitializationError, FaceTecSessionStatus } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
export declare class DeveloperStatusMessages {
    static LOG_PREFIX: string;
    static displayMessage: (message: string) => void;
    static logMessage: (message: string) => void;
    static logAndDisplayMessage: (message: string) => void;
    static logInitializationErrorResult: (enumValue: FaceTecInitializationError) => void;
    static logSessionStatusOnFaceTecExit: (sessionStatus: FaceTecSessionStatus) => void;
}
