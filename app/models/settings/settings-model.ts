import i18next from "i18next";
import { Instance, types, SnapshotOut } from "mobx-state-tree";
import { config } from "../../config/config";

export const SettingsModel = types
  .model({
    darkMode: types.optional(types.boolean, true),
    language: types.optional(types.string, config.i18n.default),
  })
  .actions((self) => ({
    toggleDarkMode: (value: boolean) => {
      self.darkMode = !self.darkMode;
    },
  }))
  .actions((self) => ({
    setDefaultLang: (value: string) => {
      self.language = value;
      i18next.changeLanguage(value);
    },
  }));

// according to the official mobx-state-tree doc, using the following
// interface is much more optimized for the typescript compiler
// https://mobx-state-tree.js.org/tips/typescript#using-a-mst-type-at-design-time
export interface ISettings extends Instance<typeof SettingsModel> {}
export interface ISettingsSnapshot extends SnapshotOut<typeof SettingsModel> {}
