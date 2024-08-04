import { makeInstaller } from '@yzy-element/utils';
import components from './components';
import '@yzy-element/theme/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const installer = makeInstaller(components);

export * from '../components';
export default installer;