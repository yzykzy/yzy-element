import { makeInstaller } from '@yzy-element/utils';
import components from './components';
import '@yzy-element/theme/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import printLogo from './printLogo';


printLogo()

library.add(fas);
const installer = makeInstaller(components);

export * from '@yzy-element/components';
export default installer;