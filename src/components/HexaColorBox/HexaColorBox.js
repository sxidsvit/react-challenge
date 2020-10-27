import React, { useRef } from 'react'
import Style from 'style-it'

const HexaColorBox = ({ hexaColor }) => {
  const colorRef = useRef('')
  const badge = useRef('')
  const bgcolor = hexaColor()

  const clickHandler = () => {
    let hexCode = colorRef.current.innerText
    navigator.clipboard.writeText(hexCode)
    navigator.clipboard.readText()
      .then(rez => console.log('Copied to clipboard: ', rez))
    badge.current.classList.remove('copy')
    badge.current.classList.add('copied')

    setTimeout(() => {
      badge.current.classList.remove('copied')
      badge.current.classList.add('copy')
    }, 1000);

  }

  return (
    <Style>
      {`
       .wrapper__copy {
         display: flex;
         justify-content: center;
         align-items: center;
         position: relative;
         min-width: 3vw;
         max-height: 3vw;
         min-height: 3vw;
         {/* border-radius: 100%; */}
         /* background: rgba(74, 77, 251, .1); */
         text-align: center;
         color: #fff;
         margin: 10px;
       }

       .wrapper__copy:before {
         position: absolute;
         display: inline-block;
         min-width: 60px;
         height: 25px;
         top: -20px;
         left: 60px;
         right: 0;
         color: #fff;
         display: block;
         /* background: rgba(70, 67, 67, .55); */
         font-weight: 500;
         line-height: 25px;
         border-radius: 2px;
         font-size: 1rem;
       }

       .copy:hover:before {
         content: "Copy";
         padding: 10px 15px;
         border-radius: 3px;
         background: rgba(70, 67, 67, .55);
         font-weight: 500;
       }

       .copied:before {
         content: "Copied";
         background: #21bf73;
         padding: 10px 15px;
         border-radius: 3px;
         font-size: 1rem;
         font-weight: 500;
       }

       .hexa-color {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         text-align: center;
         width: 160px;
         height: 160px;
         margin: 5px;
         padding: 30px;
         background-color: bgcolor;
         border-radius: 10px;
         border: 2px solid #fff;
         color: rgb(239, 239, 239);
         font-weight: 500;
         font-size: 22px;
         font-family: "Montserrat";
       }

       .clipboard {
         cursor: pointer;
         fontSize: 28px;
         color: white;
         padding: 20px;       
        }

     `}

      <div className="hexa-color" style={{ backgroundColor: bgcolor }}>
        <small
          ref={colorRef}>
          {bgcolor}
        </small>
        <div
          ref={badge}
          className="wrapper__copy copy"
          onClick={clickHandler}
        >
          <i className="far fa-clipboard clipboard"></i>
        </div>
      </div>
    </Style>
  )
}

export default HexaColorBox