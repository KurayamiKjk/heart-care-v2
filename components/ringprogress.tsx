import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import SVG, {Circle} from 'react-native-svg'
import Animated, {useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated'
import { icons } from '@/constants/icons';




interface Props {
  radius?: number;
  color?: string;
  strokeWidth?: number
  progress: number
  iconcolor?: string
}

const ringprogress = ({radius = 100 , color = "#EE0F55", strokeWidth = 30, progress, iconcolor = "#000000"}: Props) => {

    const innerRadius = radius - strokeWidth/2
    const circumference = 2 * Math.PI * innerRadius

    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    const fill = useSharedValue(0)

    useEffect(()=>{
        fill.value = withTiming(progress, {duration: 2000})
    }, [progress])


    const animatedProps = useAnimatedProps(()=>({
        strokeDasharray:[circumference * fill.value/100, circumference]
    }))


  return (
    <View
     style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>

        <SVG>
            <Circle
             cx={radius} cy={radius} r={innerRadius} strokeWidth={strokeWidth} stroke={color} fill="none" opacity={0.2}
            />
            <AnimatedCircle
            animatedProps={animatedProps}
             cx={radius} 
             cy={radius} 
             r={innerRadius} 
             strokeWidth={strokeWidth} 
             stroke={color} fill="none" 
             strokeLinecap='round' 
             rotation="-90" 
             originX={radius} 
             originY={radius}
             
            />
        </SVG>
        <Image source={icons.right} className='self-center absolute' style={{width: strokeWidth * 0.8, height: strokeWidth * 0.8}} tintColor={iconcolor}></Image>
    </View>

  )
}

export default ringprogress