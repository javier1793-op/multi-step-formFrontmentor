import '../scss/confirm.scss'
import Thank from '../img/icon-thank-you.svg'

const Confirm = () => {
  return (
    <>
        <div className="contentConfirm">
           <img src={Thank} alt="confirm" />
           <h1 className='titleConfirm'>Thank you!</h1>
           <p className='textConfirm'>
            Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel
            free to email us at support@loremgaming.com.
           </p>
        </div>
    </>
  )
}

export default Confirm