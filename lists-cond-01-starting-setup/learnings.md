## Lists
- v-for can be used with arrays, objects (key-value-pairs) and ranges of integers
## v-for variations
- Never use v-if and v-for on the same element
- You can extract values, indexes and keys using v-for

## Keys
Vue re-uses DOM elements to optimize performance, this could lead to inconsistent states / bugs if you don't have an unique identifier defined with `:key`.