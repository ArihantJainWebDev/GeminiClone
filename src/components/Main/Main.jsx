import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user icon" />
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" key="guide">
                                <p>Explore the universe of Gemini with our comprehensive guides.</p>
                                <img src={assets.compass_icon} alt="compass icon" />
                            </div>
                            <div className="card" key="tips">
                                <p>Get insights and tips on using Gemini effectively.</p>
                                <img src={assets.bulb_icon} alt="bulb icon" />
                            </div>
                            <div className="card" key="support">
                                <p>Reach out to our support team for any queries.</p>
                                <img src={assets.message_icon} alt="message icon" />
                            </div>
                            <div className="card" key="updates">
                                <p>Stay updated with the latest features and updates.</p>
                                <img src={assets.code_icon} alt="code icon" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="gemini icon" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery icon" />
                            <img src={assets.mic_icon} alt="mic icon" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send icon" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Discover the full potential of Gemini. We offer a wide range of resources to help you get the most out of our platform. Enjoy a seamless experience and excellent support.
                    </p>
                </div>
            </div>
        </div>
    )
}

Main.propTypes = {
    onSent: PropTypes.func,
    recentPrompt: PropTypes.string,
    showResult: PropTypes.bool,
    loading: PropTypes.bool,
    resultData: PropTypes.string,
    setInput: PropTypes.func,
    input: PropTypes.string
}

export default Main
