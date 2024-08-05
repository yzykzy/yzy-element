import type { App } from 'vue';
import { ElementPlusContainer } from 'vitepress-preview-component';
import DefaultTheme from 'vitepress/theme';
import YzyElement from 'yzy-element';

import "vitepress-preview-component/style.css";
import 'yzy-element/dist/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(YzyElement)
  }
}