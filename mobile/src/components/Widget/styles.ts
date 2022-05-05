import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.brand,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    width: 48,
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
  },

  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },

  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  }
});
