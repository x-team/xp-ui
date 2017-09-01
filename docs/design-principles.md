# Design principles

## Pure components

Where possible, our components should by declared in the `class extends PureComponent` form.

Note that at the time of writing, "functional components" don't have the same benefits as `PureComponent` when it comes to preventing unnecessary re-renders.

## Prop signatures

The output of a pure component must be _a function of the props_. So each component should only be passed the props they need.

## Flowtype

Every component should declare a type for its props: https://flow.org/en/docs/react/components/

## Test baseline

At a minimum, every component should have a jest snapshot test. If the component performs some render-logic (eg. toggle output based on a prop) we should have at least 1 snapshot per outcome.
