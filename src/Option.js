import React from 'react'
import {css} from 'emotion'
import get from 'lodash/get'
import colors from '@pndr/colors'

const Option = ({option}) => (
    <div
        className={css`
            min-width: 18px;
            height: 18px;
            font-size: 13px;
            font-weight: 400;
            background-color: ${get(colors, [option.colorId, 'backgroundColor'])};
            color: ${get(colors, [option.colorId, 'color'])};
            margin-right: 4px;
            border-radius: 9999px;
            line-height: 1.5;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            padding-left: 8px;
            padding-right: 8px;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -webkit-print-color-adjust: exact;
        `}
    >
        <div
            className={css`
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex: 1 1 auto;
                min-width: 0;
                min-height: 0;
            `}
        >

        </div>
        {option.name}
    </div>
)

export default Option