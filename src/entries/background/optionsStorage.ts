import OptionsSync from "webext-options-sync";

const optionsStorage = new OptionsSync({
  defaults: {
    showPathBox: true,
  },
  migrations: [OptionsSync.migrations.removeUnused],
  logging: true,
});

export default optionsStorage;
