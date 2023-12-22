import type { IStorage } from "./storage";

class TabsService {
  private readonly tabsKey = "vitesicureTabIds";

  constructor(private readonly storage: IStorage) {}

  public async getTabs(): Promise<string[]> {
    return (await this.storage.get(this.tabsKey)) ?? [];
  }

  public async addTab(tabId: string) {
    const tabs = await this.getTabs();
    if (this.isTabIdPresent(tabId, tabs)) {
      return;
    }

    await this.storage.set(this.tabsKey, [...tabs, tabId]);
  }

  public async removeTab(tabId: string) {
    const tabs = await this.getTabs();
    if (!this.isTabIdPresent(tabId, tabs)) {
      return;
    }

    tabs.splice(tabs.indexOf(tabId), 1);
    await this.storage.set(this.tabsKey, tabs);
  }

  private isTabIdPresent(tabId: string, tabs: string[]) {
    return tabs.includes(tabId);
  }
}

export default TabsService;
