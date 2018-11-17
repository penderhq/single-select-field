import React from 'react'
import {css} from 'emotion'

const OptionList = ({children}) => (
    <div
        className={css`
            position: relative;
            font-size: 13px;
            padding: 0;
            margin: 0;
            vertical-align: top;
            background: #fff;
            color: #000;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 100%;
            overflow: hidden;
        `}
    >
        <div
            className={css`
            position: relative;
            max-width: 100%;
        `}
        >
            <div
                className={css`
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex: 1 1 auto;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;
            overflow: hidden;
            max-width: 100%;
        `}
            >
                {children}
            </div>
        </div>
    </div>
)

export default OptionList