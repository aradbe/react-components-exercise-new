import Spam from "./Spam"

const Spamalot = () => {
  const spamList = []

  for (let i = 0; i < 500; i++) {
    spamList.push(<Spam key={i} />)
  }

  return spamList
}

export default Spamalot