import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Page.css'

function Page() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="msg">
                <div>

                    <img id="logga" src="src\assets\img\SCAB.jpg" alt="Företagslogga" />

                </div>

                <div className="card">
                    <h1>Hej Hej</h1>
                    <h2>Testord</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                        <br></br>
                        <br />Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Curabitur gravida arcu ac tortor dignissim convallis aenean et justo nec urna cursus finibus vivamus posuere sapien sed libero aliquet feugiat nulla facilisi integer eu ismod nunc vel lectus dictum placerat
                    </p>

                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/Page.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Testing 123 123 Testing
                </p>
            </div>


        </>
    )
}

export default Page
