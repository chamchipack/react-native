// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ImageBackground,
// } from 'react-native';

// function Reservation() {
//   return (
//     <View style={styles.container}>
//       <View style={{marginBottom: 10, marginLeft: 4}}>
//         <Text style={{fontSize: 16, fontWeight: 'bold'}}>나의 예약현황</Text>
//       </View>

//       <ImageBackground
//         source={require('../../../image/ticket2.png')}
//         style={styles.image}
//         resizeMode="cover">
//         <View style={styles.body}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               height: 50,
//             }}>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderColor: '#dfdfdf',
//                 width: 50,
//                 height: '100%',
//                 borderRadius: 10,
//                 backgroundColor: '#fff',
//               }}
//             />
//             <View style={{marginLeft: 10}}>
//               <Text style={styles.storeName}>스타벅스 강남점</Text>
//               <Text style={styles.storeAddress}>
//                 경기도 성남시 수정구 성남대로1237번길 8-21 201호
//               </Text>
//             </View>
//           </View>

//           <View style={styles.bottomRow}>
//             <Text style={styles.dateText}>2025. 01. 31 (월) 14:00</Text>
//             <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
//               <Text style={styles.chipText}>예약 상세</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 15,
//     paddingBottom: 10,
//     paddingTop: 10,
//     height: 220,
//     marginBottom: 30,
//   },
//   image: {
//     flex: 1,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   body: {
//     padding: 15,
//     height: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     justifyContent: 'space-between',
//   },
//   storeName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#4c4d4c',
//   },
//   storeAddress: {
//     fontSize: 10,
//     color: 'black',
//     marginTop: 4,
//   },
//   cakeText: {
//     fontSize: 12,
//     color: '#b1b5b4',
//     marginTop: 10,
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   dateText: {
//     fontSize: 12,
//     color: '#4c4d4c',
//   },
//   chip: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   chipText: {
//     color: '#333',
//     fontSize: 12,
//   },
// });

// export default Reservation;

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';

function Reservation() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10, marginLeft: 4}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>나의 예약현황</Text>
      </View>

      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{
              width: '70%',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.storeName}>스타벅스 강남점</Text>
              <Text style={styles.storeAddress}>
                경기도 성남시 수정구 성남대로1237번길 8-21 201호
              </Text>
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.dateText}>2025. 01. 31 (월) 14:00</Text>
              <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
                <Text style={styles.chipText}>예약 상세</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#dfdfdf',
              width: 90,
              height: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <Image
              source={require('../../../image/cake.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
    height: 140,
    marginBottom: 30,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  body: {
    padding: 15,
    height: '100%',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    borderRadius: 10,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1C0D12',
  },
  storeAddress: {
    fontSize: 10,
    color: 'black',
    marginTop: 4,
  },
  cakeText: {
    fontSize: 12,
    color: '#b1b5b4',
    marginTop: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 12,
    color: '#4c4d4c',
  },
  chip: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 8,
    backgroundColor: '#F2E8EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    color: '#1C0D12',
    fontSize: 12,
  },
});

export default Reservation;
