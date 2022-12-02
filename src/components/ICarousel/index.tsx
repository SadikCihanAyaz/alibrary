import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import CMP from '../../components';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const ICarousel: React.FC<Props> = props => {
  const {children, style} = props;

  return (
    <CMP.IScrollView
      style={style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {children}
    </CMP.IScrollView>
  );
};

export default ICarousel;
