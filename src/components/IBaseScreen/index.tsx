import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styleLocal from './style';
import CMP from '../../components';

interface Props {
  children?: any;
  styleBaseScreen?: StyleProp<ViewStyle> | undefined;
  styleLoading?: StyleProp<ViewStyle> | undefined;
  loading?: boolean;
}

const IBaseScreen: React.FC<Props> = props => {
  const {children, styleBaseScreen, styleLoading, loading} = props;

  return (
    <CMP.IView
      style={[
        styleLocal.container,
        loading
          ? styleLocal.containerGrayColor
          : styleLocal.containerDefaultColor,
        styleBaseScreen,
      ]}>
      {loading ? <CMP.ILoading styleLoading={[styleLoading]} /> : null}
      <CMP.ISafeAreaView>
        <CMP.IScrollView keyboardShouldPersistTaps="handled">
          <CMP.IKeyboardAvoidingView enabled>
            {children}
          </CMP.IKeyboardAvoidingView>
        </CMP.IScrollView>
      </CMP.ISafeAreaView>
    </CMP.IView>
  );
};

export default IBaseScreen;
