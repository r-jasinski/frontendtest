# SideBar.vue

This Vue component represents the sidebar of the application. It is responsible for rendering the notations and scrolling the move list into view when a new move is made.

## Template Structure

The template structure is not included in the provided code snippet.

## Props

- `notations`: An array that contains the notations. It is required.

## Watchers

- `notations`: This watcher is triggered when a new move is made (i.e., when the `notations` prop changes). It calls the `scrollToElement` method to scroll the move list into view.

## Methods

- `scrollToElement()`: This method uses the `scrollIntoView` method of the `HTMLElement` interface to scroll the move list into view. The `behavior` option is set to 'smooth', so the scrolling is done smoothly rather than instantly.

## Styles

The sidebar has a height of 85vh, a width of 100%, and a background color of gray-900. It uses flexbox to align its children in a column and align them in the center. It also has a border radius of 8px, a font size of 12px, and a muted text color.
