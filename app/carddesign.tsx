import React, { useRef, useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';

const generateRandomCardNumber = () => {
  return Array.from({ length: 4 }, () =>
    Math.floor(1000 + Math.random() * 9000).toString()
  );
};

const generateRandomExpiry = () => {
  const month = ('0' + Math.ceil(Math.random() * 12)).slice(-2);
  const year = Math.floor(26 + Math.random() * 5); // e.g., 26 to 30
  return `${month}/20${year}`;
};

const generateRandomCVV = () => {
  return Math.floor(100 + Math.random() * 900).toString();
};

const Ginie = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cvvVisible, setCvvVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  // Generate data once when component mounts
  const { cardNumbers, expiry, cvv } = useMemo(() => ({
    cardNumbers: generateRandomCardNumber(),
    expiry: generateRandomExpiry(),
    cvv: generateRandomCVV(),
  }), []);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const iconColor = isFlipped ? 'white' : 'red';
  const buttonLabel = isFlipped ? 'Freeze' : 'Unfreeze';

  const handleCopy = async () => {
    const full = `${cardNumbers.join(' ')} | Exp: ${expiry} | CVV: ${cvv}`;
    await Clipboard.setStringAsync(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCVV = () => {
    setCvvVisible(!cvvVisible);
  };

  return (
    <View style={{
      flex: 1,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#1a1a1a',
    }}>

      {/* Card Container */}
      <View style={{
        width: 186,
        height: 296,
        position: 'relative',
        marginRight: 20,
      }}>

        {/* FRONT SIDE */}
        <Animated.View
          style={{
            height: 296,
            width: 186,
            backgroundColor: '#092635',
            transform: [{ rotateY: frontInterpolate }],
            position: 'absolute',
            backfaceVisibility: 'hidden',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <Image
            source={require('../app/icons/carddesign.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          />
        </Animated.View>

        {/* BACK SIDE */}
        <Animated.View
          style={{
            height: 296,
            width: 186,
            backgroundColor: '#000',
            transform: [{ rotateY: backInterpolate }],
            position: 'absolute',
            backfaceVisibility: 'hidden',
            borderRadius: 10,
            padding: 16,
            justifyContent: 'space-between',
            shadowColor: '#ffffff',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          {/* Card Number */}
          <View>
            <View style={{flexDirection:'row', gap:55}}>
                <Image source={require('../app/icons/yolologo.png')}/>
                <Image source={require('../app/icons/yesbanklogo.png')}/>
            </View>
            {cardNumbers.map((num, index) => (
              <Text key={index} style={{ color: 'white', fontSize: 16, letterSpacing: 2, fontWeight: 'bold', marginTop: index === 0 ? 0 : 2 }}>
                {num}
              </Text>
            ))}
          </View>

          {/* Expiry and CVV */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ color: 'gray', fontSize: 10 }}>expiry</Text>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>{expiry}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: 'gray', fontSize: 10 }}>cvv</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', letterSpacing: 2 }}>
                  {cvvVisible ? cvv : '***'}
                </Text>
                <TouchableOpacity onPress={toggleCVV}>
                  <FontAwesome name={cvvVisible ? 'eye' : 'eye-slash'} size={24} color="red" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Copy Details */}
          <TouchableOpacity
            onPress={handleCopy}
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27 }}
          >
            <FontAwesome name="copy" size={14} color="red" />
            <Text style={{ color: copied ? 'lightgreen' : 'red', fontSize: 12, marginLeft: 5 }}>
              {copied ? 'copied!' : 'copy details'}
            </Text>
          </TouchableOpacity>

          {/* RuPay PREPAID */}
          <View style={{ alignItems: 'flex-start' }}>
            <Image
              source={require('../app/icons/rupaylogo.png')}
              style={{ width: 150, height: 100, resizeMode: 'contain', marginLeft: 35, marginTop: 3 }}
            />
          </View>
        </Animated.View>
      </View>

      {/* Flip Button */}
      <View>
        <TouchableOpacity
            style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 110,
            }}
            onPress={flipCard}
            >
            <FontAwesome name="snowflake-o" size={25} color={iconColor} />
            <Text style={{ color: iconColor, fontSize: 12 }}>{buttonLabel}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Ginie;
