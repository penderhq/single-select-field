import React from 'react'
import OptionList from './../../OptionList'
import Option from './../../Option'
import defaultEmptyRenderer from '../../defaultEmptyRenderer';

export default class SingleSelectField extends React.Component {

    render() {

        const {optionId, options} = this.props

        const option = options.find(option => {
            return option.id === optionId
        })

        if (!option) {
            return defaultEmptyRenderer()
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