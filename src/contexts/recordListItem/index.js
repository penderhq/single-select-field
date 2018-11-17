import React from 'react'
import OptionList from './../../OptionList'
import Option from './../../Option'

export default class SingleSelectField extends React.Component {

    render() {

        const {optionId, options} = this.props

        const option = options[optionId]

        if (!option) {
            return null
        }

        return (
            <OptionList>
                <Option
                    option={option}
                />
            </OptionList>
        )
    }
}