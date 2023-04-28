import {DrawerLayout} from 'navigation/drawer-layout';
import {scanFaces} from 'plugins/face-detector/processor';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {storage} from 'store/config';
import {useAppDispatch} from 'store/hooks';
import {initActions} from 'store/slices/initSlice';

const SignIn = (props: {componentId: string}) => {
  const devices = useCameraDevices();
  const device = devices.front;
  const dispatch = useAppDispatch();

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const scannedFaces = scanFaces(frame);
    console.log(scannedFaces);
  }, []);

  return (
    <View style={styles.container}>
      {/* {device && (
        <Camera
          frameProcessor={frameProcessor}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessorFps={5}
        />
      )} */}

      <Button
        title="SignIn"
        onPress={() => {
          storage.set(
            'user.token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          );
          // dispatch(initActions.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
          Navigation.setRoot({
            root: DrawerLayout,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default SignIn;
