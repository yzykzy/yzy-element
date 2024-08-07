import type { App, Plugin } from 'vue';
import { each } from 'lodash-es'
import { provideGlobalConfig, type ConfigProviderProps } from '@yzy-element/components';


export function makeInstaller(components: Plugin[]) {
  const installer = (app: App, opts?: ConfigProviderProps) => {

    each(components, (c) => app.use(c));
    if (opts) {
      provideGlobalConfig(opts, app, true)
    }
  }

  return installer as Plugin;
}


export default makeInstaller;