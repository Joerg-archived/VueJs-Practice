## Component communication overview
Components build 'parent-child' relations between calling each other in the template.
App.vue is the root of the calling hierarchy.
Components are used to build UIs by combining them

### Props (parent => child)
`props` are used to pass data from a parent to a child component. Props should be defined in advance (by a list or possibly with greater detail, e.g. type, required, validators).

### Custom events (child => parent)
Custom events are emitted via $emit to trigger a method in a parent component where data can be carried in the custom events which can be used in the called method (i.e. in the parent component).

### Provide-Inject
If you have a lot of "pass-through" components where props/custom events are only passed to the child/ parent component, you could use provide/inject to countermeasure this. Provide data in a parent, inject it into a child component.

## Deep Dive features
### Registration
Components can be registered globally (in `main.js`) or locally in the respective component. Base elements may be registered globally whereas components only used by single parent components, should be registered locally there, i.e. prefer local registration.
### Slots
Slots can be used to add a placeholder for dynamic HTML code.
Multiple, named slots (i.e. which can be referenced by the caller directly) are possible, default fallbacks can also be provided. Scoped slots allow advanced use cases where the attributes of the child component can be provided to the parent using the slots to create html content more dynamically.
### Dynamic components
Components can be swapped dynamically via the built-in `component`.
Component caching can als be activated via the built-in `keep-alive`.
### Teleport & Style guide
DOM structure can be manipulated by vue via 'teleport' (e.g. if you want to teleport your alert element to the root) while keeping the component hierarchy as it was.
Consider following the [Style-Guide](https://vuejs.org/style-guide/) if you build your app within a team to keep your code clean and understandable.