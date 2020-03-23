import { Alert } from 'react-native';
import i18n from '../../config';

const categoryErrorDescription = (): void => {
  Alert.alert(i18n.t('alert.error'), i18n.t('alert.categoryErrorDescription'));
};

export default categoryErrorDescription;
