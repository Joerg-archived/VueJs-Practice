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