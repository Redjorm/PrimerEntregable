const getRandomBackground = array => {
  const backgroundRandom = Math.floor(Math.random() * (1, 4) + 1)
  return backgroundRandom
}

export default getRandomBackground