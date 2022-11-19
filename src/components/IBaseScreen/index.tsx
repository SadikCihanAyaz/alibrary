import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import CMP from '../../components';

interface Props {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}

const IBaseScreen: React.FC<Props> = props => {
  const {children} = props;
  return (
    <CMP.IView {...props}>
      <CMP.IScrollView>
        <CMP.IKeyboardAvoidingView enabled>
          {children}
        </CMP.IKeyboardAvoidingView>
      </CMP.IScrollView>
    </CMP.IView>
  );
};

export default IBaseScreen;
