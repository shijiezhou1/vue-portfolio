<img width="120" src="https://vuejs.org/images/logo.png" alt="Vue LOGO"/>


# vue-live

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue-live (user Guide)

### 1. Deploy project to your github
```
npm install --save-dev vue-gh-pages
```
https://www.npmjs.com/package/vue-gh-pages

### 2. Add the following to the script section of your package.json:
```
"deploy": "node ./node_modules/vue-gh-pages/index.js -p"
```

### 3. Add homepage field to your package.json file:
```
"homepage": "https://github.com/myusername/my-app"
```

### 4. Now when you're ready to push to github, run:

```
npm run deploy
```

### 5. Update direction 

```
touch vue.config.js
```

echo all contents to => vue.config.js

```
module.exports = {
    baseUrl: "./",
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // when using the entry-only string format,
      // template is inferred to be `public/subpage.html`
      // and falls back to `public/index.html` if not found.
      // Output filename is inferred to be `subpage.html`.
      // subpage: 'src/subpage/main.js'
    }
};
```

<img width="120" src="https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png" alt="Vue bootstrap LOGO"/>

# Style 

```
npm i bootstrap-vue
# With Yarn:
yarn add bootstrap-vue
```

### Add to src/main.js

```
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

```

```
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
```

### 