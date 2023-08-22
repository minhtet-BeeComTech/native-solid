import { Animated } from 'react-native'
import _ from 'underscore'

const Rating = rating => {

  // if (rating == 0) { return null }

  // let stars = []

  // for (let i = 1; i <= 5; i++) {
  //   if (i <= rating) {
  //     stars.push(require('@asset/icon/full-star.svg'))
  //   } else if (i <= Math.ceil(rating)) {
  //     stars.push(require('@asset/icon/half-star.svg'))
  //   } else {
  //     stars.push(require('@asset/icon/empty-star.svg'))
  //   }
  // }

  // return (
  //   stars?.map((x, i) => (
  //     <img src={x} alt='star' key={i} />
  //   ))
  // )
}

const moneyFormat = amount => {
  let money = Number(amount).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  return money
}

const groupBy = (data, key) => {
  return data.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

const uniqueArray = (data, key) => {
  return [
    ...new Map(
      data.map(x => [key(x), x])
    ).values()
  ]
}

const getUiText = (dict, entry, lang = 'en') => {
  return dict?.length > 0 && _.find(dict, item => _.keys(item)[0] === entry)?.[entry][lang === 'en' ? 'english_name' : 'myanmar_name']
}

const addCheckDefault = (data, key) => {
  let tmp = data.map(x => ({ ...x, [key]: false }))
  return tmp
}

const checkChange = (checkListItem, type, data) => {
  const changedCheckbox = checkListItem.find(x => x[type] === data)
  changedCheckbox.check = !changedCheckbox.check
  return checkListItem
}

const getCheckId = (data, type) => {
  let temp = []
  data.map((x) => { if (x.check === true) return temp.push(x[type]) })
  return temp
}

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  }
}

export {
  Rating,
  moneyFormat,
  groupBy,
  uniqueArray,
  getUiText,
  addCheckDefault,
  checkChange,
  getCheckId,
  forSlide
}