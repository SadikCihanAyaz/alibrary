import React from 'react';
import {Dimensions, ViewProps} from 'react-native';
import CMP from '../../components';
import styleLocal from './style';

type HomeTeam = {
  name: string;
  logo: string;
};
type GuestTeam = {
  name: string;
  logo: string;
};

interface Props {
  testID: string;
  homeTeam: HomeTeam;
  guestTeam: GuestTeam;
  date: string;
  hours: string;
  place: string;
  backgroundImage: string;
}

const ICompetitive: React.FC<Props> = props => {
  const {testID, homeTeam, guestTeam, date, hours, place, backgroundImage} =
    props;

  const devicewidth = Dimensions.get('window').width;

  return (
    <CMP.IImageBackground
      testID={testID}
      source={{
        uri: backgroundImage,
      }}
      style={{
        width: devicewidth,
        height: devicewidth / 2,
      }}>
      <CMP.IIconText
        testID={testID + '_iconTextHome'}
        source={{uri: homeTeam.logo}}
        text={homeTeam.name}
        styleView={[
          styleLocal.homeView as ViewProps,
          {
            top: devicewidth / 10,
            left: devicewidth / 5,
          },
        ]}
      />
      <CMP.IIconText
        testID={testID + '_iconTextGuest'}
        source={{uri: guestTeam.logo}}
        text={guestTeam.name}
        styleView={[
          styleLocal.guestView as ViewProps,
          {
            top: devicewidth / 10,
            right: devicewidth / 5,
          },
        ]}
      />

      <CMP.IView
        style={[
          styleLocal.bottomView as ViewProps,
          {
            width: devicewidth,
          },
        ]}>
        <CMP.IText style={styleLocal.text}>
          {date} {'-'} {hours}
        </CMP.IText>
        <CMP.IText style={styleLocal.text}>{place}</CMP.IText>
      </CMP.IView>
    </CMP.IImageBackground>
  );
};

export default ICompetitive;
