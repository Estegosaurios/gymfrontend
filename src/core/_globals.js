import Vue from 'vue'
import upperfirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Require in a base component context
const requireComponent = require.context( // eslint-disable-line no-undef
  '.', false, /V[A-Z][\w-]+\.vue$/
);

requireComponent.keys().forEach(fileName => {

  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of element
  const componentName = upperfirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  );

  // Register component globally
  Vue.component(componentName, componentConfig.default || componentConfig);
});