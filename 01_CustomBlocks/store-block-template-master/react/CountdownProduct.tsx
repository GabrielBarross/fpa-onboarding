import React , { useState } from 'react'
import { TimeSplit } from './typings/global'
import { tick } from './utils/time'
import { useQuery } from 'react-apollo'
import useProduct from 'vtex.product-context/useProduct'
import productReleaseDate from './graphql/productReleaseDate.graphql'

const CountdownProduct: StorefrontFunctionComponent= () => {

    const { product } = useProduct()
    const { data, loading, error } = useQuery(productReleaseDate, {
        variables: {
        slug: product?.linkText
    }, ssr: false })


    const [timeRemaining, setTime] = useState<TimeSplit>({
        hours: '00',
        minutes: '00',
        seconds: '00',
    })

    tick(data?.product?.releaseDate, setTime)

    if(!product){
        return(
            <div>
                <span>There is no Product Context</span>
            </div>
        )
    }
    if (loading) {
        return (
          <div>
            <span>Loading...</span>
          </div>
        )
      }
      if (error) {
        return (
          <div>
            <span>Erro!</span>
          </div>
        )
      } return(
            <div>
                <span>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</span>
            </div>
        )
      }


CountdownProduct.schema = {
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

export default CountdownProduct
