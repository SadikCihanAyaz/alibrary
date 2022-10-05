import React from 'react';
import FBButton from './src/components/FBButton';
import {View} from 'react-native';
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

  return (
    <View>
      <FBButton label="123" />
      <ITextInput
        name={'firstName'}
        text={'Şifre'}
        textVal={val => {
          console.log('val', val);
        }}
        defaultValue={''}
        control={control}
        error={errors.firstName as unknown as string}
        errorText={errors?.firstName?.message as unknown as string}
        placeHolder={''}
        required={false}
      />
      <IButton onPress={handleSubmit(onSubmit)} buttonTitle="Deneme" />
    </View>
  );
};

export default App;
