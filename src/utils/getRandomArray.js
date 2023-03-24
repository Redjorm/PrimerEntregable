const getRandomArray = array => {
  const indexRandom = Math.floor(Math.random(1) * array.length)
  return array[indexRandom]
}

export default getRandomArray