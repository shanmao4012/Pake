import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 780,
  width: 1200,
  fullscreen: false,
  resizable: true,
  hideTitleBar: false,
  alwaysOnTop: false,
  darkMode: false,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/31.0.1650.18 Mobile/11B554a Safari/8536.25,
  showSystemTray: false,
  multiArch: false,
  targets: 'deb',
  useLocalFile: false,
  systemTrayIcon: '',
  debug: false,
  inject: [],
  safeDomain: [],
  installerLanguage: 'zh-CN',
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://weread.qq.com',
  name: 'WeRead',
  safeDomain: ['weread.qq.com'],
  hideTitleBar: true,
};
