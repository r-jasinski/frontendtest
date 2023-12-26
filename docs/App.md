# App.vue

This is the main Vue component of the application. It is responsible for rendering the game board, players, and sidebar.

## Template Structure

The template is divided into two main sections:

1. The first section contains the game board and player details. It uses the `PlayerTag` and `ChessBoard` components. Each `PlayerTag` component receives props for flag, image, name, and time. The `ChessBoard` component receives a prop for handling square selection. There's also a settings icon rendered using `GearsSVG`.

2. The second section contains the `SideBar` component which receives notations as a prop.

## Script

The script imports the necessary components (`ChessBoard`, `PlayerTag`, `GearsSVG`, `SideBar`) and create a type `Notation`.

## Props

- `PlayerTag` component:

  - `flag`: A string representing the path to the flag image.
  - `image`: A string representing the path to the player's image.
  - `name`: A string representing the player's name.
  - `time`: A string representing the player's time.
  - `is-player-turn`: A boolean indicating if it's this player's turn.

- `ChessBoard` component:

  - `on-square-select`: A function for handling the event when a square is selected.

- `SideBar` component:
  - `notations`: An array of `Notation` objects.
