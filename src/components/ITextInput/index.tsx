import React, {useState} from 'react';
import {TextInput, View, Text, ImageSourcePropType} from 'react-native';
import styles from './style';
import {Controller} from 'react-hook-form';
import CMP from '../../components';

/*
  const errorMsg = (value: any) => {
    console.log('data' + value);
    if (value.length < 1) {
      return 'message 5';
    } else if (value.length < 6) {
      return 'message 6';
    } else {
      return true;
    }
  };

  return (
    <View>
      <ITextInput
        name={'firstName'}
        headerText={'Password'}
        textVal={val => {
          console.log('value', val);
        }}
        errorMsg={errorMsg}
        control={control}
        error={errors.firstName as unknown as string}
        errorText={errors?.firstName?.message as unknown as string}
        placeHolder={'Test Place Holder'}
        required={true}
        secureText={false}
      />
    </View>
  );
  */

interface Props {
  name: string;
  headerText?: string;
  control: any;
  placeHolder?: string;
  secureText?: boolean;
  required?: boolean;
  error: string;
  errorText: string;
  errorMsg: any;
  textVal: (text: string) => void;
  onFocus?: (type: boolean) => void | undefined;
  style?: any;
  icon?: ImageSourcePropType;
}
const ITextInput: React.FC<Props> = props => {
  const {
    name,
    control,
    placeHolder,
    secureText = false,
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
      styles.textInputPadding,
    ];

    const iconStyle = icon ? [styles.textInputImage] : null;

    return [focusStyle, iconStyle];
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
            <CMP.IView style={styles.imageTextInputViewStyle}>
              {icon ? (
                <CMP.IImage
                  source={icon}
                  style={[styles.iconStyle, styles.iconSize]}
                  testID={'testImg'}
                />
              ) : null}

              <TextInput
                secureTextEntry={secureText}
                placeholder={placeHolder}
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
