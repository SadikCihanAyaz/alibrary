import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styleLocal from './style';
import CMP from '../../components';

interface Props {
  children?: React.ReactNode;
  styleBaseScreen?: StyleProp<ViewStyle> | undefined;
  styleLoading?: StyleProp<ViewStyle> | undefined;
  loading?: boolean;
  modal?: React.ReactNode;
  modalStyle?: StyleProp<ViewStyle> | undefined;
}

const IBaseScreen: React.FC<Props> = props => {
  const {children, styleBaseScreen, styleLoading, loading, modal, modalStyle} =
    props;

  return (
    <CMP.IView
      style={[
        styleLocal.container,
        styleLocal.containerDefaultColor,
        modal ? styleLocal.containerModalOpacity : null,
        styleBaseScreen,
      ]}>
      {loading && !modal ? (
        <CMP.ILoading styleLoading={[styleLoading]} />
      ) : null}
      {modal ? (
        <CMP.IModal
          animationType="slide"
          transparent={true}
          visible={true}
          style={[styleLocal.modalView, modalStyle]}>
          {loading ? (
            <CMP.ILoading styleLoading={[styleLocal.modalLoading]} />
          ) : null}
          {modal}
        </CMP.IModal>
      ) : null}

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
