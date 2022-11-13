import React from 'react';
import {ScrollView, View} from 'react-native';
import ITextInput from './src/components/ITextInput';
import {useForm} from 'react-hook-form';
import IButton from './src/components/IButton';

type FormValues = {
  firstName: string;
  lastName: string;
};

const App = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

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
      <ScrollView>
        <ITextInput
          name={'firstName'}
          headerText={'Password'}
          textVal={val => {
            console.log('value', val);
          }}
          style={{container: {marginTop: 410}}}
          errorMsg={errorMsg}
          control={control}
          error={errors.firstName as unknown as string}
          errorText={errors?.firstName?.message as unknown as string}
          placeHolder={'Test Place Holder'}
          required={true}
          secureText={false}
        />
        <IButton
          onPress={handleSubmit(onSubmit)}
          buttonTitle="Test Button Title"
          testID="btnI"
        />
      </ScrollView>
    </View>
  );
};

export default App;
