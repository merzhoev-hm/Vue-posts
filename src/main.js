import "./index.css";

import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import router from "./router/router";
import directives from "./directives";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(autoAnimatePlugin);
app.use(router);

app.mount("#app");
