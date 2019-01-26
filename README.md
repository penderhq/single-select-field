# ![SingleSelectField](https://user-images.githubusercontent.com/44801418/48109944-25097900-e27c-11e8-83ed-be6379428ced.png) SingleSelectField

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/single-select-field.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for selecting a single option from a list.	

## Getting started

````
npm install @cmds/single-select-field --save
````

````jsx harmony
<SingleSelectField
    id={'fld1'}
    contextId={'recordGalleryCard'}
    roleId={'readOnly'}
    optionId={'opt5'}
    options={{
        options: ['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6'],
        optionsById: {
            'opt1': {
                id: 'opt1',
                colorId: 'blue.base',
                name: 'Blue'
            },
            'opt2': {
                id: 'opt2',
                colorId: 'green.base',
                name: 'Green'
            },
            'opt3': {
                id: 'opt3',
                colorId: 'red.base',
                name: 'Red'
            },
            'opt4': {
                id: 'opt4',
                colorId: 'yellow.base',
                name: 'Yellow'
            },
            'opt5': {
                id: 'opt5',
                colorId: 'indigo.base',
                name: 'Indigo'
            },
            'opt6': {
                id: 'opt6',
                colorId: 'purple.base',
                name: 'Purple'
            }
        }
    }}
    onChange={({id, optionId}) => {
       // do something 
    }}
/>
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| options | Object | ✓ | Object that holds each option by it's id. Each option should have an `id`, `name`, `colorId` (optional) |
| optionOrder | Array | ✓ | Should reference all options in the preferred order |
| coloredOptions | Boolean | ✓ | Enables coloring for options |
| optionId | String | | Selected option |
| onChange | Function |  | Callback invoked whenever an option get's selected: `({id: string, optionId: string}): void` |

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/single-select-field.svg
[npm]: https://www.npmjs.org/package/@cmds/single-select-field
