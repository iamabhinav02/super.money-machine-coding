import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const saveToStorage = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const loadFromStorage = (key: string, defaultValue: any) => {
  const json = storage.getString(key);
  return json ? JSON.parse(json) : defaultValue;
};

export const deleteStorage = () => {
  storage.clearAll();
}