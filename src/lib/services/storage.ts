import OptionsSync, { type Options } from "webext-options-sync";

export interface IStorage {
  getAll(): Promise<any>;
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
}

class OptionsSyncStorage implements IStorage {
  private static instance: OptionsSyncStorage;
  private storage: OptionsSync<{}>;

  private constructor() {
    this.storage = new OptionsSync({
      defaults: {
        showPathBox: true,
        debugMode: false,
      },
      migrations: [OptionsSync.migrations.removeUnused],
      logging: true,
    });
  }

  public async getAll(): Promise<Options> {
    return await this.storage.getAll();
  }

  public async get(key: string): Promise<any> {
    const all = await this.getAll();

    let item = all[key];

    if (typeof item === "string") {
      try {
        item = JSON.parse(item);
      } catch (error) {}
    }

    return item;
  }

  public async set(key: string, value: any): Promise<void> {
    await this.storage.set({ [key]: JSON.stringify(value) });
  }

  public static getInstance(): IStorage {
    if (!OptionsSyncStorage.instance) {
      OptionsSyncStorage.instance = new OptionsSyncStorage();
    }
    return OptionsSyncStorage.instance;
  }
}

export default OptionsSyncStorage;
