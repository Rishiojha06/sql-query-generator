import { use, useState } from 'react'
import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
function App() {
  const [queryDescription, setQueryDescription] = useState("")
  console.log(queryDescription)

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt='' className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form action="" onSubmit={(event) => event.preventDefault()}>
        <input type="text" name='query-description' placeholder='Describe your query' onChange={(event) => setQueryDescription(event.target.value)} />
        <input type="submit" value="Submit query" />
      </form>
    </main>
  )
}

export default App
