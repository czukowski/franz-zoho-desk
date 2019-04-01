Zoho Desk integration for Franz
===============================

This is a development version.

For now, it will only display a badge with a number of notifications.

Improvements considered:

 1. Display a badge for indirect notifications when there are tickets labeled 'new' in the current view.
 2. Customize a display of desktop notifications from Zoho Desk.
 3. Do something about the icons (the PNG does not meet the recommended size and there's no SVG icon).

Installation
------------

1. To install a new integration for the first time, download the integration folder e.g. `franz-zoho-desk`.
2. Open the Franz Plugins folder on your machine (note that this `dev` directory may not exist yet, and you must create it):
  * Mac: `~/Library/Application Support/Franz/recipes/dev/`
  * Windows: `%appdata%/Franz/recipes/dev/`
  * Linux: `~/.config/Franz/recipes/dev`
3. Copy the `franz-zoho-desk` folder into the plugins directory
4. Reload Franz

How to develop, test and deploy recipes
---------------------------------------

[Read the documentation](https://github.com/meetfranz/plugins)

License
-------

This work is released under the MIT License. See LICENSE.md for details.
