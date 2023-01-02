import React from 'react';
import {ImageProps, TextProps, ViewProps} from 'react-native';
import CMP from '../../components';
import IMG from '../../image';
import styleLocal from './style';
import {TicketType} from '../../types/';

interface Props {
  testID: string;
  styleView?: ViewProps;
  ticket: TicketType;
  onPress: (ticket: TicketType) => void;
}

const ITicket: React.FC<Props> = props => {
  const {testID, styleView, ticket, onPress} = props;

  function onPressBtn() {
    onPress(ticket);
  }

  return (
    <CMP.IView
      testID={testID}
      style={[styleLocal.container, styleView] as ViewProps}>
      <CMP.IView style={[styleLocal.topView] as ViewProps}>
        <CMP.IView style={[styleLocal.topTicketTypeView] as ViewProps}>
          <CMP.IText style={[styleLocal.topTicketTypeText] as TextProps}>
            {ticket?.category}
          </CMP.IText>
        </CMP.IView>
        <CMP.IView style={[styleLocal.topTicketPriceView] as ViewProps}>
          <CMP.IText style={[styleLocal.topTicketTypeText] as TextProps}>
            {ticket?.priceText}
          </CMP.IText>
          <CMP.IText style={[styleLocal.topTicketPriceText1] as TextProps}>
            {ticket?.price}
            {ticket?.priceCurrency}
          </CMP.IText>
        </CMP.IView>
      </CMP.IView>
      <CMP.IView style={[styleLocal.centerView] as ViewProps}>
        <CMP.IImage
          testID={testID + 'img'}
          source={{uri: IMG.Info}}
          style={[styleLocal.imageInfo] as ImageProps}
        />
      </CMP.IView>
      <CMP.IView style={[styleLocal.bottomView] as ViewProps}>
        <CMP.IView style={[styleLocal.labelTicketView] as ViewProps}>
          <CMP.ILabelTicket
            testID={testID + 'labelTicket'}
            text={ticket?.remainTicketCount}
            rightRound
          />
        </CMP.IView>
        <CMP.IView style={[styleLocal.bottomBuyView] as ViewProps}>
          <CMP.IButton
            onPress={onPressBtn}
            buttonTitle={ticket?.buyTitle}
            testID={testID + 'buy'}
            buttonStyle={[styleLocal.buyButtonViewStyle] as ViewProps}
            buttonTextStyle={[styleLocal.butButtonTextStyle] as TextProps}
          />
        </CMP.IView>
      </CMP.IView>
    </CMP.IView>
  );
};

export default ITicket;
