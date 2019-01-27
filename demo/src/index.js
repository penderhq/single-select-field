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

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

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
        return <div>
            <h1>SingleSelectField Demo</h1>
            <p>Used for selecting a single option from a list.</p>
            <h2>With selected option</h2>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <div
                className={css`
                    width: 240px;
                    height: 35px;
                    display: flex;
                `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    optionOrder={['opt6', 'opt1', 'opt2', 'opt3', 'opt4', 'opt5']}
                    options={FIELD_OPTIONS}
                    onChange={({optionId}) => this.setState({optionId})}
                />
            </div>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
                `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    optionId={this.state.optionId}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <h2>
                Without selected option
            </h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                    width: 240px;
                    height: 22px;
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
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
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
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6']}
                    options={FIELD_OPTIONS}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
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
            <h2>
                With very long option name
            </h2>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <SingleSelectField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    optionId={'opt7'}
                    coloredOptions={true}
                    optionOrder={['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7']}
                    options={FIELD_OPTIONS_B}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
