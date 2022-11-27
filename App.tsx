import React from 'react';
import ITextInput from './src/components/ITextInput';
import {useForm} from 'react-hook-form';
import IButton from './src/components/IButton';
import {IText} from './src/components';
import CMP from './src/components';
import CMPDEMO from './src/demo';

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
    if (value?.length < 1) {
      return 'message 5';
    } else if (value?.length < 6) {
      return 'message 6';
    } else {
      return true;
    }
  };

  const errorMsg2 = (value: any) => {
    console.log('data' + value);
    if (value?.length < 1) {
      return 'message 5';
    } else if (value?.length < 6) {
      return 'message 6';
    } else {
      return true;
    }
  };

  const modalDemo1 = () => {
    return <CMPDEMO.IModalDemo1 />;
  };

  return (
    <CMP.IBaseScreen loading={true} modal={modalDemo1()}>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
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
      <ITextInput
        name={'lastName'}
        headerText={'Last Name'}
        textVal={val => {
          console.log('value', val);
        }}
        errorMsg={errorMsg2}
        control={control}
        error={errors.lastName as unknown as string}
        errorText={errors?.lastName?.message as unknown as string}
        placeHolder={'Test Place Holder'}
        required={true}
        secureText={false}
      />
      <IButton
        onPress={handleSubmit(onSubmit)}
        buttonTitle="Test Button Title"
        testID="btnI"
      />
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
      <IText style={{fontSize: 50}}>Deneme</IText>
    </CMP.IBaseScreen>
  );
};

export default App;
