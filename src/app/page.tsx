import type { Metadata, NextPage } from "next"
import Chat from "./components/Chat"

const description = `An app that reminds you of your memories or finds similar ones`

export const metadata: Metadata = {
  title: "Memory App",
  description
}

const Home: NextPage = () => {
  return (
    <div className="app">
        <div className="app-header">
          <div className="profile-picture">🧠</div>
          <div className="info-container">
            <h1>Ania's Memories</h1>
            <p>Ask me anything</p>
          </div>
        </div>
        <Chat/>
    </div>
  )
}

export default Home
