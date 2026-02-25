import { IPlugin } from '../interfaces/IPlugin';

export class PluginManager {
  private plugins: Map<string, IPlugin> = new Map();

  register(plugin: IPlugin) {
    this.plugins.set(plugin.name, plugin);
    console.log(`Plugin ${plugin.name} registered.`);
  }

  async run(name: string, cmd: any) {
    const plugin = this.plugins.get(name);
    if (!plugin) throw new Error("Plugin not found");
    return await plugin.execute(cmd);
  }
}
