import Notification from "./methods";
import { withInstallFunction } from "@yzy-element/utils";

export const ErNotification = withInstallFunction(
  Notification,
  "$notify"
);

export * from "./types";