import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors';

export default function BusinessAboutMe({ business }) {

  const [isReadMode, setIsReadMode] = useState(false);


  return business && (
    <View>
        <Heading text={'About Me'} />
        <Text style={{ fontFamily: 'outfit', color: Colors.GRAY, fontSize: 16, lineHeight: 28 }} numberOfLines={ isReadMode ? 20 : 5} > {business.about} </Text>
        <TouchableOpacity onPress={() => setIsReadMode(!isReadMode)}>
            <Text style={{color: Colors.PRIMARY, fontSize: 16, fontFamily: 'outfit'}}> {isReadMode ? 'Read Less' : 'Read More' } </Text>
        </TouchableOpacity>
    </View>
  )
}