export interface IPlugin {
  name: string;
  version: string;
  install(): Promise<void>;
  execute(command: any): Promise<any>;
  uninstall(): Promise<void>;
  getStatus(): Promise<string>;
}
