# React Sibling Component Data Sharing

This project demonstrates a simple yet powerful pattern for sharing data between sibling components in React using the Context API and the useReducer hook. It includes an example with two input components that can either operate independently or synchronize their values based on a toggle switch.

## Overview

The application consists of two main input components that allow text input. A toggle switch controls whether the inputs are synchronized: when the toggle is on, changing the value in one input automatically updates the other to match, and when the toggle is off, each input maintains its own state independently.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/itsMohammedNayeem/sync-inputs.git
cd sync-inputs
npm install
npm run dev
```

## Components

The application consists of the following components:

- `App`: The main component that holds the state and provides a context to the input components.
- `Input_one` & `Input_two`: Sibling components that consume the context provided by the App component to share data.
- `Switch`: A toggle switch to enable or disable synchronization between the input components.
