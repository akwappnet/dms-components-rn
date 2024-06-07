import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import DmsDropdownPicker from './DmsDropdown';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { Dmslabel } from './Dmslabel';

const DropdownWithCamera = ({
  items,
  onSelect,
  placeholder,
  isCamera = false,
  defaultValue = null,
  defaultValueByIndex = null,
  onImagesChange,
  images,
}) => {
  const [selectedImages, setSelectedImages] = useState(images || '');
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <>
      <View style={styles.container}>
        <DmsDropdownPicker
          defaultValue={defaultValue}
          defaultValueByIndex={defaultValueByIndex}
          isCamera={isCamera}
          items={items}
          placeholder={placeholder}
          onSelect={onSelect}
        />
        <ScrollView horizontal style={styles.imageContainer}>
          {selectedImages ? (
            selectedImages.split(', ').map((uri, index) => (
              <View key={index} style={styles.imageWrapper}>
                <View style={styles.subImageContainer}>
                  {uri && <Image source={{ uri }} style={styles.image} />}
                  <View style={styles.iconWrapper}>
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
                </View>
              </View>
            ))
          ) : (
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cameraIcon: {
    marginLeft: 0,
  },
  dropdownContainer: {
    width: wp('10%'),
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
    marginLeft: 10,
  },
  imageWrapper: {
    position: 'relative',
    margin: 0,
  },
  subImageContainer: {
    position: 'relative',
    // width: wp("28%"),
    // height: hp("15%"),
    paddingVertical: 10,
  },
  image: {
    width: wp('20%'),
    height: hp('9%'),
    borderRadius: 10,
    marginHorizontal: 0,
  },
  iconWrapper: {
    position: 'absolute',
    top: -2,
    right: -5,
    zIndex: 1,
  },
  iconStyle: {
    height: widthPercentageToDP('10%'),
    width: widthPercentageToDP('12%'),
    tintColor: '#FFF',
  },
  closeIconStyle: {
    height: widthPercentageToDP('4%'),
    width: widthPercentageToDP('4%'),
  },
  removeIcon: {
    borderRadius: 12,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default DropdownWithCamera;
