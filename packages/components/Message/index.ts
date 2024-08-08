import Message from "./methods";
import { withInstallFunction } from "@yzy-element/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";