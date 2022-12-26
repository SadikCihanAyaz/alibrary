import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import CMP from '../../components';
import style from './style';

interface Props {
  testID: string;
  styleView?: StyleProp<ViewStyle>;
  styleImage?: StyleProp<ImageStyle>;
  styleText?: StyleProp<TextStyle>;
  source?: ImageSourcePropType;
  text?: string;
}

const IIconText: React.FC<Props> = props => {
  const {testID, styleView, styleImage, styleText, source, text} = props;

  return (
    <CMP.IView testID={testID} style={[style.view as ViewStyle, styleView]}>
      <CMP.IImage
        testID={testID + '_image'}
        source={source}
        style={[style.image, styleImage]}
      />
      <CMP.IText testID={testID + '_text'} style={[style.text, styleText]}>
        {text}
      </CMP.IText>
    </CMP.IView>
  );
};

export default IIconText;
