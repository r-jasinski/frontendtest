# PlayerTag.vue

This Vue component represents a player in the game. It is responsible for rendering the player's image, flag, name, and time.

## Template Structure

The template contains a div with two main sections:

1. The first section contains the player's image, name, and flag. The image and flag are rendered using `img` elements with their `src` bound to the `image` and `flag` props respectively. The name is rendered using a `span` element with its content bound to the `name` prop.

2. The second section contains a clock icon and the player's time. The clock icon is rendered using the `ClockSVG` component. The time is rendered using a `span` element with its content bound to the `time` prop. The `class` of this section is bound to an array that includes 'clock' and an object that adds 'inactive' if `isPlayerTurn` is false.

## Props

- `flag`: A string representing the path to the flag image. It is required.
- `image`: A string representing the path to the player's image. It is required.
- `isPlayerTurn`: A boolean indicating if it's this player's turn. It defaults to false.
- `name`: A string representing the player's name. It is required.
- `time`: A string representing the player's time. It is required.

## Components

- `ClockSVG`: This component is used to display a clock icon.
