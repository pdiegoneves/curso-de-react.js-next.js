import { useContext } from 'react'

//eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext)
  const {
    contextState: { body },
    setContextState,
  } = theContext
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  )
}
