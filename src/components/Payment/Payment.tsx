import React, {useEffect, useRef, useState} from 'react';
/* 아임포트 결제모듈을 불러옵니다. */
import IMP from 'iamport-react-native';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

/* 로딩 컴포넌트를 불러옵니다. */
function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#964F66" />
      <Text style={styles.text}>잠시만 기다려주세요...</Text>
    </View>
  );
}

export function Payment({navigation}) {
  const [datas, setData] = useState('');
  /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
  function callback(response) {
    const {imp_success} = response;

    setData(JSON.stringify(response));
    console.log(response);
    if (imp_success === 'false') {
      console.log('FALSE');
      return navigation.goBack();
    } else {
      console.log('TRUE');
      return navigation.navigate('Profile');
    }
  }

  // tlgdacomxpay
  // uplus
  // imp80078681
  const data = {
    pg: 'uplus',
    pay_method: 'card',
    name: '아임포트 결제데이터 분석',
    merchant_uid: `tlgdacomxpay_123`,
    amount: '100',
    buyer_name: '홍길동',
    buyer_tel: '01012345678',
    buyer_email: 'example@naver.com',
    buyer_addr: '서울시 강남구 신사동 661-16',
    buyer_postcode: '06018',
    app_scheme: 'chamchiapp',
    // [Deprecated v1.0.3]: m_redirect_url
  };

  return (
    <>
      <IMP.Payment
        userCode={'imp80078681'} // 가맹점 식별코드
        //   tierCode={'AAA'} // 티어 코드: agency 기능 사용자에 한함
        loading={LoadingScreen()} // 로딩 컴포넌트
        data={data} // 결제 데이터
        callback={callback} // 결제 종료 후 콜백
      />
      {data && <Text>{datas}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   circle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#00f',
//   },
// });

export default Payment;
