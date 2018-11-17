import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import SingleSelectField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

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

const FIELD_OPTIONS = {
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
    },
    'opt7': {
        id: 'opt7',
        colorId: 'charcoal.base',
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>SingleSelectField Demo</h1>
            <p>Used for selecting a single option from a list.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying selected options in a record detail.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        optionId={'opt5'}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h5>
                Without selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        optionId={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h5>
                With very long option name
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        optionId={'opt7'}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying selected options in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        optionId={'opt5'}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h5>
                Without selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        optionId={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h3>
                RecordListItem context
            </h3>
            <p>Used for displaying selected options in a record list item.</p>
            <h4>
                Read only role
            </h4>
            <h5>
                With selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        optionId={'opt5'}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
            <h5>
                Without selected option
            </h5>
            <Viewport>
                <div
                    className={css`
                        width: 240px;
                        height: 22px;
                        background-color: #fff;
                    `}
                >
                    <SingleSelectField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        optionId={null}
                        coloredOptions={true}
                        optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                        options={FIELD_OPTIONS}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
