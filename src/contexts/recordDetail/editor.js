import React from 'react'
import colors from '@cmds/colors'
import {css} from 'emotion'
import Select from '@cmds/select'

const defaultColor = {
    backgroundColor: 'black',
    color: 'white'
}

export default class SingleSelectField extends React.Component {

    render() {

        const {options, optionId} = this.props

        return (
            <Select
                value={optionId}
                options={options}
                clearable={true}
                optionRenderer={this.optionRenderer}
                onChange={this.handleChange}
            />
        )
    }

    optionRenderer = ({option}) => {

        const color = colors[option.colorId] || defaultColor

        return (
            <div
                className={css`
                    background-color: ${color.backgroundColor};
                    color: ${color.color};
                    min-width: 18px;
                    height: 18px;
                    font-size: 13px;
                    font-weight: 400;
                    max-width: 100%;
                    align-items: center;
                    display: inline-flex;
                    padding-left: 8px;
                    padding-right: 8px;
                    line-height: 1.5;
                    -webkit-print-color-adjust: exact;
                    border-radius: 9999px;
                    flex: 0 0 auto;
                `}
            >
                {option.name}
            </div>
        )
    }

    handleChange = ({value}) => {

        this.props.onChange({
            id: this.props.id,
            optionId: value
        })
    }
}