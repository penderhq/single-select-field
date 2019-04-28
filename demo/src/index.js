import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import SingleSelectField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'
injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

const FIELD_OPTIONS = [
    {
        id: 'opt1',
        colorId: 'blue.base',
        name: 'Blue'
    },
    {
        id: 'opt2',
        colorId: 'green.base',
        name: 'Green'
    },
    {
        id: 'opt3',
        colorId: 'red.base',
        name: 'Red'
    },
    {
        id: 'opt4',
        colorId: 'yellow.base',
        name: 'Yellow'
    },
    {
        id: 'opt5',
        colorId: 'indigo.base',
        name: 'Indigo'
    },
    {
        id: 'opt6',
        colorId: 'purple.base',
        name: 'Purple'
    }
]

const FIELD_OPTIONS_B = [
    {
        id: 'opt7',
        colorId: 'charcoal.base',
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

class Demo extends Component {

    state = {
        optionId: 'opt5'
    }

    render() {
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>With selected option and editor role</Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                    onChange={({optionId}) => this.setState({optionId})}
                />
            </Box>
            <Paragraph>With selected option and read only role</Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>
                Without selected option and read only role
            </Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionId={null}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>
                With very long option name and read only role
            </Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionId={'opt7'}
                    coloredOptions={true}
                    options={FIELD_OPTIONS_B}
                />
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>With selected option and read only role</Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>Without selected option and read only role</Paragraph>
            <Box
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionId={null}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>With selected option and read only role</Paragraph>
            <Box>
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
            <Paragraph>Without selected option and read only role</Paragraph>
            <Box
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionId={null}
                    coloredOptions={true}
                    options={FIELD_OPTIONS}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
