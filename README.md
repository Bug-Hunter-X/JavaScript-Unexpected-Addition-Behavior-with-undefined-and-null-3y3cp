# JavaScript Unexpected Addition Behavior with undefined and null

This repository demonstrates unexpected behavior in JavaScript when performing addition with `undefined` and `null` values.  The behavior may be counter-intuitive to developers unfamiliar with JavaScript's type coercion rules.

## Bug Description

The `+` operator behaves differently when used with `undefined` and `null`. Specifically, adding `undefined` results in `NaN`, while adding `null` treats it as 0.

## How to reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., Node.js or a browser's console).

## Solution

The solution involves explicitly handling `undefined` and `null` values before performing addition to avoid unexpected results.

See the `bugSolution.js` file for a corrected version.

## Contributing

Contributions are welcome.  Please open an issue or submit a pull request.