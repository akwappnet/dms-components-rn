import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DmsCheckBox from './DmsCheckBox';
import { Dmslabel } from './Dmslabel';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';

const DmsTextWithImage = ({
  text,
  onCheckboxChange,
  initialCheck,
  images,
  onImagesChange,
}) => {
  const [isChecked, setIsChecked] = useState(initialCheck || false);
  const [selectedImages, setSelectedImages] = useState(images || '');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckChange = (newCheckState) => {
    setIsChecked(newCheckState);
    onCheckboxChange(newCheckState);
  };
  useEffect(() => {
    if (images) {
      setSelectedImages(images);
    }
  }, [images]);

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Camera opened successfully');
        const newUri = response.assets[0].uri;
        const updatedUris = selectedImages
          ? `${selectedImages}, ${newUri}`
          : newUri;
        setSelectedImages(updatedUris);
        onImagesChange(updatedUris);
        setIsModalVisible(false);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 0,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const newUris = response.assets.map((asset) => asset.uri).join(', ');
        let updatedUris = selectedImages
          ? `${selectedImages}, ${newUris}`
          : newUris;
        updatedUris = updatedUris.replace(/(^\s*,)|(,\s*$)/g, '').trim();
        setSelectedImages(updatedUris);
        onImagesChange(updatedUris);
        setIsModalVisible(false);
      }
    });
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const removeImage = (uri) => {
    const updatedUrisArray = selectedImages
      .split(', ')
      .filter((imageUri) => imageUri !== uri);
    const updatedUris = updatedUrisArray.join(', ');
    setSelectedImages(updatedUris);
    onImagesChange(updatedUris);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          paddingLeft: 10,
          paddingVertical: 5,
          flex: 10,
        }}
      >
        <DmsCheckBox
          initialCheck={initialCheck}
          onCheckChange={handleCheckChange}
        />
        <Dmslabel
          {...{
            Textstr: text,
            fontSize: 18,
            color: '#000000',
            marginBottom: 0,
            textAlign: 'left',
            marginTop: 0,
          }}
        />
      </View>
      <View style={{ flex: 2.9 }}>
        <ScrollView horizontal style={styles.imageContainer}>
          {selectedImages
            ? selectedImages.split(', ').map((uri, index) => (
                <View key={index} style={styles.imageWrapper}>
                  {uri && <Image source={{ uri }} style={styles.image} />}
                  <TouchableOpacity
                    style={styles.removeIcon}
                    onPress={() => removeImage(uri)}
                  >
                    <Image
                      source={require('../../Images/close.png')}
                      style={styles.closeIconStyle}
                    />
                  </TouchableOpacity>
                </View>
              ))
            : isChecked && (
                <View style={styles.imageWrapper}>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={[
                      styles.image,
                      {
                        backgroundColor: '#007bff',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}
                  >
                    <Image
                      source={require('../../Images/camera.png')}
                      style={styles.iconStyle}
                    />
                  </TouchableOpacity>
                </View>
              )}
        </ScrollView>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => openCamera()}
            style={styles.modeloptions}
          >
            <Dmslabel
              {...{
                Textstr: 'Take Photo',
                fontSize: 16,
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: 0,
                textAlign: 'center',
                marginTop: 0,
              }}
            ></Dmslabel>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openGallery()}
            style={[styles.modeloptions, { marginTop: 10 }]}
          >
            <Dmslabel
              {...{
                Textstr: 'Choose from Gallery',
                fontSize: 16,
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: 0,
                textAlign: 'center',
                marginTop: 0,
              }}
            ></Dmslabel>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModal}
            style={[styles.modeloptions, { marginTop: 10 }]}
          >
            <Dmslabel
              {...{
                Textstr: 'Cancel',
                fontSize: 16,
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: 0,
                textAlign: 'center',
                marginTop: 0,
              }}
            ></Dmslabel>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    left: wp('2%'),
  },
  text: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '400',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modeloptions: {
    width: wp('87%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  imageContainer: {
    height: hp('9%'),
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: wp('20%'),
    height: hp('9%'),
    borderRadius: 10,
  },
  removeIcon: {
    borderRadius: 12,
    position: 'absolute',
    top: -2,
    right: -4,
    backgroundColor: '#FFF',
  },
  closeIconStyle: {
    height: widthPercentageToDP('4%'),
    width: widthPercentageToDP('4%'),
  },
  iconStyle: {
    height: widthPercentageToDP('10%'),
    width: widthPercentageToDP('12%'),
    tintColor: '#FFF',
  },
});

export default DmsTextWithImage;
