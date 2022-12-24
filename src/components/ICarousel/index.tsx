import React from 'react';
import {StyleProp, ViewStyle, ScrollView} from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const ICarousel: React.FC<Props> = props => {
  const {children, style} = props;

  return (
    <ScrollView
      style={style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default ICarousel;
