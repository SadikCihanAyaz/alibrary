import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ImageSourcePropType,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './style';
import {Controller} from 'react-hook-form';
import CMP from '../../components';

interface Props extends TextInputProps {
  name: string;
  headerText?: string;
  testID: string;
  control: any;
  required?: boolean;
  error: string;
  errorText: string;
  errorMsg: any;
  textVal: (text: string) => void;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  style?: StyleProp<ViewStyle> | any | undefined;
  icon?: ImageSourcePropType;
}
const ITextInput: React.FC<Props> = props => {
  const {
    testID,
    name,
    control,
    required = false,
    headerText,
    style,
    icon,
  } = props;
  const [isFocus, setIsFocus] = useState(false);

  const textInputStyle = () => {
    const focusStyle = [
      isFocus
        ? [styles.textInputFocus, style?.textInputFocus]
        : props.errorText
        ? [styles.textInputError, style?.textInputError]
        : [styles.textInput, style?.textInput],
    ];

    const iconStyle = icon ? [styles.textInputImage] : null;

    const otherTextInputStyle = [
      styles.textInputPadding,
      style?.otherTextInput,
    ];

    return [focusStyle, iconStyle, otherTextInputStyle];
  };

  return (
    <View style={[style?.container]}>
      {headerText ? (
        <View style={[style?.headerTextContainer]}>
          <Text style={[styles.headerText, style?.headerText]}>
            {headerText}
          </Text>
        </View>
      ) : null}
      {props.errorText && required ? (
        <View style={[style?.errorTextContainer]}>
          <Text style={[styles.headerTextError, style?.errorText]}>
            {props.errorText}
          </Text>
        </View>
      ) : null}
      <View style={[style?.bodyContainer]}>
        <Controller
          name={name}
          control={control}
          rules={{
            validate: value => props.errorMsg(value),
          }}
          render={({field: {onChange}}) => (
            <CMP.IView
              testID={testID + '_imageTextInputView'}
              style={[
                styles.imageTextInputViewStyle,
                style?.imageTextInputView,
              ]}>
              {icon ? (
                <CMP.IImage
                  testID={testID + '_image'}
                  source={icon}
                  style={[styles.iconStyle, styles.iconSize, style?.icon]}
                />
              ) : null}

              <TextInput
                {...props}
                testID={testID + '_textInput'}
                style={textInputStyle()}
                autoCapitalize="none"
                onChangeText={passwordText => {
                  onChange(passwordText);
                }}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
              />
            </CMP.IView>
          )}
        />
      </View>
    </View>
  );
};

export default ITextInput;
