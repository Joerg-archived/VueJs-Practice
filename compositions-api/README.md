# Compositions API

## What & Why?

- It's an alternative to the Options API. It uses `setup()` or `<script setup>` respectively to expose logic/data to the template.
- It's a function-based solution that allows you to keep <b>logically related code together</b>.

## Data & Reactivity

Data can be manages as ref()s (individual values or objects) or reactive() objects.
Reactivity is a key concept - refs and reactive objects are reactive, their nested values are not.

## Methods, Computed, Watchers

- Methods become regular functions defined in `setup()` or `<script setup>`.
- Computed properties and watchers are defined with imported functions (from vue)
