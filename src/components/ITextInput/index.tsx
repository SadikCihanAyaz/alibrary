import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './style';
import {Controller} from 'react-hook-form';

interface Props {
  name: string;
  text: string;
  control: any;
  placeHolder: string;
  required: boolean;
  defaultValue: string;
  error: string;
  errorText: string;
  textVal: (text: string) => void;
}
const ITextInput: React.FC<Props> = props => {
  const {name, control, placeHolder, defaultValue} = props;

  const errorMsg = () => {
    if (props.errorText === '0') {
      return 'message 1';
    }
    if (props.errorText === '1') {
      return 'message 2';
    }
  };

  return (
    <View>
      <View>
        <Text>{props.text}</Text>
      </View>
      {props.errorText ? (
        <View>
          <Text>{errorMsg()}</Text>
        </View>
      ) : null}
      <View>
        <Controller
          name={name}
          defaultValue={defaultValue}
          control={control}
          rules={{
            validate: value => {
              if (value.length === 0) {
                console.log('work 0');
                return '0';
              } else if (value.length < 6) {
                console.log('work 6');
                return '1';
              } else {
                return true;
              }
            },
          }}
          render={({field: {onChange}}) => (
            <TextInput
              secureTextEntry={true}
              placeholder={placeHolder}
              style={styles.textInputFocus}
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
