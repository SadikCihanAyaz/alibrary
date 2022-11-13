import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './style';
import {Controller} from 'react-hook-form';

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
  style?: any;
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
  } = props;

  return (
    <View style={[style?.container]}>
      {headerText ? (
        <View style={[style?.headerTextContainer]}>
          <Text style={[style?.headerText]}>{headerText}</Text>
        </View>
      ) : null}
      {props.errorText && required ? (
        <View style={[style?.errorTextContainer]}>
          <Text style={[style?.errorText]}>{props.errorText}</Text>
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
            <TextInput
              secureTextEntry={secureText}
              placeholder={placeHolder}
              style={[styles.textInputFocus, style?.textInput]}
              autoCapitalize="none"
              onChangeText={passwordText => {
                onChange(passwordText);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ITextInput;
