import { ConfigurationScope, workspace, WorkspaceConfiguration } from "vscode";
import { Constants } from "../util/constants";

export class SettingNames {
  static settingsPrefix: string = Constants.ExtensionName + ".";
  static enabled: string = SettingNames.settingsPrefix + "enabled";
  static executablePath: string =
    SettingNames.settingsPrefix + "executablePath";
  static ignorePlatformReqs: string =
    SettingNames.settingsPrefix + "ignorePlatformReqs";
  static runInTerminal: string = SettingNames.settingsPrefix + "runInTerminal";
  static runQuiet: string = SettingNames.settingsPrefix + "runQuiet";
  static workingPath: string = SettingNames.settingsPrefix + "workingPath";
}

export class ComposerSettings {
  private config: WorkspaceConfiguration;

  constructor(scope?: ConfigurationScope) {
    this.config = workspace.getConfiguration("", scope);
  }

  public get enabled(): boolean {
    return this.config.get<boolean>(SettingNames.enabled, true);
  }

  public get executablePath(): string {
    return this.config.get<string>(SettingNames.executablePath, "");
  }

  public get ignorePlatformReqs(): boolean {
    return this.config.get<boolean>(SettingNames.ignorePlatformReqs, false);
  }

  public get runInTerminal(): boolean {
    return this.config.get<boolean>(SettingNames.runInTerminal, true);
  }

  public get runQuiet(): boolean {
    return this.config.get<boolean>(SettingNames.runQuiet, false);
  }

  public get workingPath(): string {
    return this.config.get<string>(SettingNames.workingPath, "");
  }
}

/**
 * An event describing a transactional composer workspace settings change.
 */
export interface ComposerSettingsChangeEvent {
  /**
   * The affected settings.
   */
  settings: ComposerSettings;
}
