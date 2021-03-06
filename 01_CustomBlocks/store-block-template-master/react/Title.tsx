import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

interface TitleProps {
    title: string
}

const CSS_HANDLES = ['title']

const Title: StorefrontFunctionComponent<TitleProps> = ({title}) => {

    const titleText = title || <FormattedMessage id="countdown.title" />
    const handles = useCssHandles(CSS_HANDLES)

    return(
        <h1 className={`${handles.title} t-heading-2 fw3 w-100 c-muted-1 db tc `}>{titleText}</h1>
    )
}

Title.schema = {
    title: 'editor.countdown-title.title',
    description: 'editor.countdown-title.description',
    type: 'object',
    properties: {
      title: {
        title: "Título",
        type: "string",
        default: null
      }
    },
}


export default Title