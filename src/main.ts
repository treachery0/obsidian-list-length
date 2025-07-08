import { App, Plugin, PluginSettingTab } from 'obsidian';

interface ListLengthSettings {

}

const DEFAULT_SETTINGS: ListLengthSettings = {}

export default class ListLengthPlugin extends Plugin {
    settings: ListLengthSettings;

    async onload() {
        await this.loadSettings();

        this.addSettingTab(new ListLengthSettingTab(this.app, this));
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}

class ListLengthSettingTab extends PluginSettingTab {
    plugin: ListLengthPlugin;

    constructor(app: App, plugin: ListLengthPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const {containerEl} = this;

        containerEl.empty();
    }
}
