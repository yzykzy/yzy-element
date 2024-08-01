import { makeInstaller } from '@yzy-element/utils';
import components from './components';
import '@yzy-element/theme/index.css';
const installer = makeInstaller(components);

export * from '@yzy-element/components';
export default installer;