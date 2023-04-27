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

const SignIn = (props: {componentId: string}) => {
  const devices = useCameraDevices();
  const device = devices.front;

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
