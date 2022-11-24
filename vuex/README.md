# Vuex
## What is Vuex?
- library for managing global state (across multiple components)
  - i.e when changing the state, (shown) data should change, too
  - e.g. user auth status, shopping cart items

## Why Vuex?
Problems without Vuex:
- <b>Fat Components:</b> App.vue (or similar components contain lots of data and logic)
- <b>Unpredictable:</b> It's not always obvious where data (state) gets changed in which way (we have to analyze each component separately)
- <b>Error-prone:</b> Accidental or missed state updates are possible (difficult overview over all states)

With Vuex we can detach the state management from the components. With that, we can follow a more predictable management/flow and clearly define these flows, which leads to less errors.

## Installation
```
npm install --save vuex@next
```

## Note
The defacto state management library is [Pinia](https://pinia.vuejs.org/) now. This is referred as the "Vuex 5".