import React from 'react';
import {useForm} from 'react-hook-form';
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

    if (value?.length === undefined) {
      return 'cannot be empty';
    }

    if (value?.length < 3 && value?.length > 0) {
      return 'message 5';
    } else if (value?.length < 6) {
      return 'message 6';
    } else {
      return true;
    }
  };

  const errorMsg2 = (value: any) => {
    console.log('data' + value);

    if (value?.length === undefined) {
      return 'cannot be empty';
    }

    if (value?.length < 3 && value?.length > 0) {
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
    <CMP.IBaseScreen loading={false} modal={false ? modalDemo1() : null}>
      <CMP.ITextInput
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
      <CMP.ITextInput
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
        secureText={true}
        icon={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <CMP.IButton
        onPress={handleSubmit(onSubmit)}
        buttonTitle="Test Button Title"
        testID="btnI"
      />

      <CMP.IText style={{fontSize: 50}}>Deneme</CMP.IText>
      <CMP.IImage
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 40, height: 40}}
        testID={'testImg'}
      />
      <CMP.ICarousel style={{}}>
        <CMP.IButton
          onPress={handleSubmit(onSubmit)}
          buttonTitle="Test Button Title"
          testID="btnI"
        />
        <CMP.IButton
          onPress={handleSubmit(onSubmit)}
          buttonTitle="Test Button Title"
          buttonStyle={{backgroundColor: '#fff'}}
          buttonTextStyle={{color: '#7BB3FE'}}
          testID="btnI"
        />
        <CMP.IButton
          onPress={handleSubmit(onSubmit)}
          buttonTitle="Test Button Title"
          testID="btnI"
        />
        <CMP.IButton
          onPress={handleSubmit(onSubmit)}
          buttonTitle="Test Button Title"
          testID="btnI"
        />
      </CMP.ICarousel>
    </CMP.IBaseScreen>
  );
};

export default App;
