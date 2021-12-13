import React , { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

interface CountdownProps {
  title: string
  targetDate: string
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
const CSS_HANDLES = ['countdownBox', 'countdown', 'title']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({title , targetDate = DEFAULT_TARGET_DATE}) => {

  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  tick(targetDate, setTime)

  const handles = useCssHandles(CSS_HANDLES)

  const titleText = title || <FormattedMessage id="countdown.title" />

  return ( 
    <div className={`${handles.countdownBox} c-muted-1 db tc`}>
      <h1 className={`${handles.title}`}>{titleText}</h1>
      <p className={`${handles.countdown}`}>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</p>
    </div>
  )}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: "Título",
      type: "string",
      default: null
    },
    targetDate: {
      title: "Data Final",
      description: "Data Final do Countdown de teste",
      type: "string", 
      default: null
    }
  },
}

export default Countdown
