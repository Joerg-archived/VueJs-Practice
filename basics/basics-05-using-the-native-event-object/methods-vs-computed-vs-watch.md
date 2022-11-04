## Methods
Use with event binding or data binding.
When using it for databinding, it gets re-executed each time vue rerenders the page (i.e. when an element changes).
In this use case you should consider computed properties.
=> Use methods for events or data that really needs to be reevaluated all the time an element changes on the page.

## Computed
Use with databinding. Computed properties are only re-evaluated if one of their "used values" changes.

# Watch
Watches aren't directly used in templates. Watches allow you to run any code in reaction to some changed date (e.g send http request).
=> Use watches for any non-data update you want to make.