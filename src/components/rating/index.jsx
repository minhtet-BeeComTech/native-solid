import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'

import {StyledStar} from './style'

export const StarRating = props => {
  const { currentRating } = props
  const ref = useRef(null)

  useEffect(() => {
    setRating()
  })

  const hoverHandler = e => {
    const stars = e.target.parentElement.getElementsByClassName('star')
    const hoverValue = e.target.dataset.value
    Array.from(stars).forEach((star) => {
      star.style.color = hoverValue >= star.dataset.value ? '#FFC107' : '#ABABAB'
    })
  }

  const setRating = () => {
    if (ref.current) {
      console.log('ref.current', ref.current)
      // const stars = ref.current.getElementsByClassName('star')
      // Array.from(stars).forEach((star) => {
      //   star.style.color =
      //     currentRating >= star.dataset.value ? '#FFC107' : '#ABABAB'
      // })
    }
  }

  const starClickHandler = e => {
    let rating = e.target.dataset.value
    if (props.onClick) {
      props.onClick(parseInt(rating - currentRating) === 0 ? (rating - 1).toString() : rating)
    }
  }

  return (
    <View
      ref={ref}
      data-rating={currentRating}
    >
      {[...Array(+props.numberOfStars).keys()].map((n) => {
        return (
          <StyledStar
            key={n + 1}
            data-value={n + 1}
            onPress={starClickHandler}
          >
            &#9733;
          </StyledStar>
        )
      })}
    </View>
  )
}