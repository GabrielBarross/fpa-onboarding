import React , { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'
import { useCssHandles } from 'vtex.css-handles'

interface CountdownProps {
  targetDate: string
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
const CSS_HANDLES = ['countdownBox', 'countdown', 'title']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate = DEFAULT_TARGET_DATE}) => {

  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  tick(targetDate, setTime)

  const handles = useCssHandles(CSS_HANDLES)


  return ( 
    <div className={`${handles.countdownBox} c-muted-1 db tc`}>
      <p className={`${handles.countdown}`}>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</p>
    </div>
  )}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: "Data Final",
      description: "Data Final do Countdown de teste",
      type: "string", 
      default: null
    }
  },
}

export default Countdown
