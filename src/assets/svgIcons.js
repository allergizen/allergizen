import Svg, { Path } from "react-native-svg";

export const CrossIcon = (props) => (
    <Svg width={25} height={25} fill='#c00' viewBox='0 0 32 32' {...props}>
       <Path d='M18.8 16l5.5-5.5c.8-.8.8-2 0-2.8-.3-.4-.8-.7-1.3-.7a2 2 0 00-1.4.6L16 13.2l-5.5-5.5c-.8-.8-2.1-.8-2.8 0-.4.3-.7.8-.7 1.4s.2 1 .6 1.4l5.5 5.5-5.5 5.5c-.3.4-.6.9-.6 1.5 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5 5.5 5.5c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L18.8 16z'/>
    </Svg>
)
 
export const CheckIcon = (props) => (
    <Svg viewBox='0 0 24 24' width={25} height={25} {...props}>
       <Path
          fill='none'
          stroke='#73d216'
          strokeLinecap='round'
          strokeWidth='2'
          d='M5 12l5 5 9-9'
       />
    </Svg>
)
 
export const QuestionIcon = (props) => (
    <Svg
       fill="#edd400"
       stroke="#edd400"
       viewBox="-64 0 512 512"
       width={25}
       height={25}
       {...props}
    >
       <Path d="M202 0C122 0 71 33 30 91c-7 11-5 25 5 33l43 33c11 7 25 6 33-5 26-31 44-49 83-49 31 0 69 20 69 50 0 22-19 34-49 51-35 20-82 44-82 106v10c0 13 11 24 24 24h72c13 0 24-11 24-24v-6c0-43 126-44 126-160C378 66 287 0 202 0zm-10 373a69 69 0 100 139 69 69 0 000-139z"/>
    </Svg>
)