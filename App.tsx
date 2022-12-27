import React from 'react';
import {useForm} from 'react-hook-form';
import {GestureResponderEvent} from 'react-native';
import CMP, {ITeams} from './src/components';
import IMG from './src/image';
import CMPDEMO from './src/demo';
import ICompetitive from './src/components/ICompetitive';

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

  const pressableTest = (event: GestureResponderEvent) => {
    console.log('pressableTest' + event);
    console.log(event);
  };

  return (
    <CMP.IBaseScreen loading={false} modal={false ? modalDemo1() : null}>
      <CMP.ITextInput
        testID="textInput1"
        name={'firstName'}
        headerText={'Password'}
        textVal={val => {
          console.log('value', val);
        }}
        errorMsg={errorMsg}
        control={control}
        error={errors.firstName as unknown as string}
        errorText={errors?.firstName?.message as unknown as string}
        placeholder={'Test Place Holder'}
        required={true}
      />
      <CMP.ITextInput
        testID="textInput2"
        name={'lastName'}
        headerText={'Last Name'}
        textVal={val => {
          console.log('value', val);
        }}
        errorMsg={errorMsg2}
        control={control}
        error={errors.lastName as unknown as string}
        errorText={errors?.lastName?.message as unknown as string}
        placeholder={'Test Place Holder'}
        required={true}
        secureTextEntry={true}
        icon={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <CMP.IButton
        onPress={handleSubmit(onSubmit)}
        buttonTitle="Test Button Title"
        testID="btnI"
        buttonStyle={{height: 45}}
      />
      <CMP.ILabelTicket
        testID="tes"
        text="Label Ticket"
        styleView={{marginTop: 10}}
        rightRound
        leftRound
        onPress={() => {
          console.log('onPress Label');
        }}
        imgUri={IMG.Cancel}
      />

      <CMP.IText style={{fontSize: 50}}>Deneme</CMP.IText>
      <CMP.IImage
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 40, height: 40}}
        testID={'testImg'}
      />
      <CMP.IFlatList
        testID={'flat'}
        numColumns={2}
        data={['Deneme Test', '2', '3', '4']}
        renderItem={({item, index}) => {
          return (
            <CMP.IButton
              buttonStyle={{width: '30%'}}
              testID={'test' + index}
              buttonTitle={String(item)}
              onPress={handleSubmit(onSubmit)}
            />
          );
        }}
      />

      <CMP.IPressable onPressIn={handleSubmit(onSubmit)} testID="testPressable">
        <CMP.IText>{'handleSubmit'}</CMP.IText>
      </CMP.IPressable>
      <CMP.IPressable
        style={{backgroundColor: 'red', alignSelf: 'baseline'}}
        onPressIn={pressableTest}
        testID="testPressable">
        <CMP.IText>{'own methods'}</CMP.IText>
      </CMP.IPressable>
      <CMP.IIconText
        testID={'iconTest'}
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        styleImage={{width: 25, height: 25}}
        text={'fenerbahce'}
      />
      <ITeams
        testID="testID"
        listKey={'teamName'}
        numColumns={3}
        onPress={item => console.log(item)}
        data={[
          {
            logo: IMG.Fenerbahce,
            team: 'Fenerbahce',
          },
          {
            logo: IMG.Galatasaray,
            team: 'Galatasaray',
          },
          {
            logo: IMG.Besiktas,
            team: 'Beşiktaş',
          },
          {
            logo: IMG.Cancel,
            team: 'Trabzonspor',
          },
          {
            logo: IMG.Cancel,
            team: 'Rize',
          },
          {
            logo: IMG.Cancel,
            team: 'Samsun',
          },
          {
            logo: IMG.Cancel,
            team: 'Çorum',
          },
          {
            logo: IMG.Cancel,
            team: 'Adana',
          },
          {
            logo: IMG.Cancel,
            team: 'Fatih',
          },
          {
            logo: IMG.Cancel,
            team: 'Başakşehir',
          },
        ]}
      />
      <ICompetitive
        testID="testId2"
        homeTeam={{
          name: 'Fenerbahçe',
          logo: IMG.Besiktas,
        }}
        guestTeam={{
          name: 'Galatasaray',
          logo: IMG.Fenerbahce,
        }}
        date={'23.06.2022'}
        hours={'17.00 am'}
        place={'Fenerbahçe Şükrü Saracoglu Stadyum'}
        backgroundImage={IMG.Pitch}
      />
    </CMP.IBaseScreen>
  );
};

export default App;
