# HC++ Plugin Specifications

## Directory structure
Each plugin should have a` metadata.json` file coming alone with a `index.js` file. The directory structure should look like below:
```
plugins/demo_plugin/
├── index.js
└── metadata.json
```

## Metadata
```json
{
  "id":"(The ID of the plugin, should be the same as the directory name)",
  "name":"(The name of the plugin, like 'Demo Plugin')",
  "description":"(A brief description of the plugin about what does it do. Rich text is not allowed.)",
  "author":"(Your name here)",
  "contact":"(Any contact method, like an email address or an X handle)",
  "material_icon": "(Optional. Defaults to `extension`. Refer to https://www.mdui.org/en/docs/2/components/icon for available icons.)"
}

```

## Hook System
There isn't a document about HC++'s hook system... yet. As for now, you can refer to the source code of the existing plugins, or read the code yourself.

## Shared Libraries
For shared libraries that could be repeatly used in multiple plugins, they should be located in `/lib/`. Example: `/lib/mdui_2.1.4/`

## Adding It to the Plugin Index
Adding your plugin to the plugin index is necessary for it to be publicly listed. Simply modify `plugins/index.json`, adding your plugin's ID to the end of the array.
