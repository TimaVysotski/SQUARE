interface SquareColorsProps {
  GRADIENT: Array<string>;
  BUTTON_PLAY: string;
  BUTTON_PAUSE: string;
  CONTENT_PRIMARY: string;
  CARD_PRIMARY: string;
  CARD_SECONDARY: string;
  LABEL_PRIMARY: string;
  LABEL_SECONDARY: string;
  SHADOW: string;
  SHADOW_DEFAULT: string;
  SHADOW_PLAY: string;
}

const colors: SquareColorsProps = {
  GRADIENT: ['#5433FF', '#20BDFF'],
  BUTTON_PLAY: '#34C759',
  BUTTON_PAUSE: '#FF0000',
  CONTENT_PRIMARY: '#FFFFFF',
  CARD_PRIMARY: '#FFFFFF',
  CARD_SECONDARY: '#F2F2F2',
  LABEL_PRIMARY: '#FFFFFF',
  LABEL_SECONDARY: '#000000',
  SHADOW: '0px 5px 6px #D3D3D3',
  SHADOW_DEFAULT: '0 0 0 #D3D3D3',
  SHADOW_PLAY: '0px 5px 6px #66CD00',
};

export default colors;
