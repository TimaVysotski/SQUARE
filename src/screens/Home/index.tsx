import Slider from '@react-native-community/slider';
import React, { ReactElement, useState } from 'react';
import { Switch } from 'react-native';
import categoryErrorDescription from '../../components/alerts/error';
import i18n from '../../config';
import Button from '../../container/components/button';
import StyledSwitchView from '../../container/components/input/Switch';
import Label from '../../container/components/text/Label';
import Card from '../../container/components/view/Card';
import Container from '../../container/components/view/Container';
import Content from '../../container/components/view/Content';
import CustomView from '../../container/components/view/CustomView';
import startPlayCommands, { configureTimeOut } from '../../services/player';
import { useStore } from '../../store';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import sizes from '../../theme/sizes';

const Home = (): ReactElement => {
  const { playStore } = useStore();
  const [isColores, setIsColores] = useState(true);
  const [isFigures, setIsFigures] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [commandsAmount, setCommandsAmount] = useState(1);
  const [playbackIntervals, setPlaybackIntervals] = useState(0.5);
  const [isPlay, setIsPlay] = useState(false);

  const onStop = (): void => {
    setIsPlay(!isPlay);
    playStore.setPlay(false);
  };

  const onPlay = (): void => {
    if (!isColores && !isFigures && !isNumbers) {
      categoryErrorDescription();
    } else {
      setIsPlay(!isPlay);
      playStore.setPlay(true);
      const timeOut = configureTimeOut(commandsAmount, playbackIntervals);
      startPlayCommands(commandsAmount, isColores, isFigures, isNumbers);
      (function loops(): void {
        if (playStore.getPlay) {
          setTimeout(() => {
            if (playStore.getPlay) {
              startPlayCommands(commandsAmount, isColores, isFigures, isNumbers);
            }
            loops();
          }, timeOut);
        }
      }());
    }
  };

  return (
    <Container>
      <Content flex={1}>
        <Label
          mt={2}
          ml={3}
          text={i18n.t('appName')}
          fontSize={fonts.HEADER_LABEL}
        />
        <CustomView>
          <Card flex={4} color={colors.CARD_SECONDARY} mt={2} mb ml={3} mr={3}>
            <CustomView mt mb>
              <CustomView
                mt
                mb
                ml={3}
                mr={3}
                color={colors.CARD_PRIMARY}
                shadow={colors.SHADOW}
                borderRadius={sizes.baseBorderRadius}
              >
                <StyledSwitchView
                  mt
                  mb
                  mr
                  ml
                >
                  <CustomView
                    ml
                    mr
                    flex={4}
                  >
                    <Label
                      text={i18n.t('switchLabels.colors')}
                      fontSize={fonts.SWITCH_LABEL}
                      color={colors.LABEL_SECONDARY}
                    />
                  </CustomView>
                  <CustomView
                    ml
                    mr
                    flex={2}
                  >
                    <Switch
                      value={isColores}
                      style={{ alignSelf: 'flex-end' }}
                      onValueChange={(value): void => setIsColores(value)}
                    />
                  </CustomView>
                </StyledSwitchView>
              </CustomView>
              <CustomView
                mt
                mb
                ml={3}
                mr={3}
                color={colors.CARD_PRIMARY}
                shadow={colors.SHADOW}
                borderRadius={sizes.baseBorderRadius}
              >
                <StyledSwitchView
                  mt
                  mb
                  mr
                  ml
                >
                  <CustomView
                    ml
                    mr
                    flex={4}
                  >
                    <Label
                      text={i18n.t('switchLabels.figures')}
                      fontSize={fonts.SWITCH_LABEL}
                      color={colors.LABEL_SECONDARY}
                    />
                  </CustomView>
                  <CustomView
                    ml
                    mr
                    flex={2}
                  >
                    <Switch
                      value={isFigures}
                      onValueChange={(value): void => setIsFigures(value)}
                      style={{ alignSelf: 'flex-end' }}
                    />
                  </CustomView>
                </StyledSwitchView>
              </CustomView>
              <CustomView
                mt
                mb
                ml={3}
                mr={3}
                color={colors.CARD_PRIMARY}
                shadow={colors.SHADOW}
                borderRadius={sizes.baseBorderRadius}
              >
                <StyledSwitchView
                  mt
                  mb
                  mr
                  ml
                >
                  <CustomView
                    ml
                    mr
                    flex={4}
                  >
                    <Label
                      text={i18n.t('switchLabels.numbers')}
                      fontSize={fonts.SWITCH_LABEL}
                      color={colors.LABEL_SECONDARY}
                    />
                  </CustomView>
                  <CustomView
                    ml
                    mr
                    flex={2}
                  >
                    <Switch
                      value={isNumbers}
                      onValueChange={(value): void => setIsNumbers(value)}
                      style={{ alignSelf: 'flex-end' }}
                    />
                  </CustomView>
                </StyledSwitchView>
              </CustomView>
            </CustomView>
          </Card>
          <Card
            mt
            mb
            ml={3}
            mr={3}
            flex={2}
            color={colors.CARD_SECONDARY}
          >
            <CustomView
              mt={2}
              mb={2}
              ml={3}
              mr={3}
              color={colors.CARD_PRIMARY}
              shadow={colors.SHADOW}
              borderRadius={sizes.baseBorderRadius}
            >
              <CustomView
                mr={2}
                ml={2}
              >
                <Label
                  text={i18n.t('sliderLabels.commandsAmount', { amount: commandsAmount })}
                  fontSize={fonts.SLIDER_LABEL}
                  textAlign="center"
                  color={colors.LABEL_SECONDARY}
                />
              </CustomView>
              <CustomView
                mr={2}
                ml={2}
                flex={2}
              >
                <Slider
                  onValueChange={(value): void => setCommandsAmount(value)}
                  minimumValue={1}
                  maximumValue={4}
                  step={1}
                />
              </CustomView>
            </CustomView>
          </Card>
          <Card
            mt
            mb
            ml={3}
            mr={3}
            flex={2}
            color={colors.CARD_SECONDARY}
          >
            <CustomView
              mt={2}
              mb={2}
              ml={3}
              mr={3}
              color={colors.CARD_PRIMARY}
              shadow={colors.SHADOW}
              borderRadius={sizes.baseBorderRadius}
            >
              <CustomView
                mr={2}
                ml={2}
              >
                <Label
                  text={i18n.t('sliderLabels.playbackIntervals', { speed: playbackIntervals.toFixed(2) })}
                  fontSize={fonts.SLIDER_LABEL}
                  textAlign="center"
                  color={colors.LABEL_SECONDARY}
                />
              </CustomView>
              <CustomView
                mr={2}
                ml={2}
                flex={2}
              >
                <Slider
                  onValueChange={(value): void => setPlaybackIntervals(value)}
                  minimumValue={0.5}
                  maximumValue={5}
                  step={0.5}
                />
              </CustomView>
            </CustomView>
          </Card>
          <Card
            mt
            mb={2}
            ml={3}
            mr={3}
            flex={1}
            color={colors.CARD_SECONDARY}
          >
            {isPlay
              ? (
                <CustomView
                  mt
                  mb
                  shadow={colors.SHADOW}
                >
                  <Button
                    text={i18n.t('button.stop')}
                    buttonColor={colors.BUTTON_PAUSE}
                    onPress={onStop}
                    color={colors.LABEL_SECONDARY}
                    fontSize={fonts.BUTTON_LABEL}
                  />
                </CustomView>
              )
              : (
                <CustomView
                  mt
                  mb
                  shadow={colors.SHADOW}
                >
                  <Button
                    text={i18n.t('button.play')}
                    buttonColor={colors.BUTTON_PLAY}
                    onPress={onPlay}
                    color={colors.LABEL_SECONDARY}
                    fontSize={fonts.BUTTON_LABEL}
                  />
                </CustomView>
              )}
          </Card>
        </CustomView>
      </Content>
    </Container>
  );
};

export default Home;
