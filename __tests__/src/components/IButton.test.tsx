import React from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import IButton from '../../../src/components/IButton';

const renderIButton = (props?: any) => {
  return (
    <IButton
      testID="btnID"
      buttonTitle={props.buttonTitle}
      onPress={props.onPress}
    />
  );
};

describe('IButton test', () => {
  test('yyy', () => {
    const props = {
      buttonTitle: 'buttonTitle',
      onPress: () => {
        console.log('btn work');
      },
    };
    const {getByTestId} = render(renderIButton(props));
    const test = getByTestId('btnID');
    fireEvent.press(test);
    console.log(test.props);
  });
});
