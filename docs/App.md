# App.vue

This is the main Vue component of the application. It is responsible for rendering the game board, players, and sidebar.

## Template Structure

The template is divided into two main sections:

1. The first section contains the game board and player details. It uses the `Player` and `Board` components. Each `Player` component receives props for flag, image, name, and time. The `Board` component receives a prop for handling square selection. There's also a settings icon rendered using `GearsSVG`.

2. The second section contains the `Sidebar` component which receives notations as a prop.

## Script

The script imports the necessary components (`Board`, `Player`, `GearsSVG`, `Sidebar`) and create a type `Notation`.

## Props

- `Player` component:

  - `flag`: A string representing the path to the flag image.
  - `image`: A string representing the path to the player's image.
  - `name`: A string representing the player's name.
  - `time`: A string representing the player's time.
  - `is-player-turn`: A boolean indicating if it's this player's turn.

- `Board` component:

  - `on-square-select`: A function for handling the event when a square is selected.

- `Sidebar` component:
  - `notations`: An array of `Notation` objects.
