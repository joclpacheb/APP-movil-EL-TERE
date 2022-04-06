import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text } from 'galio-framework';

import Icon from './Icon';
import { argonTheme } from '../constants';

class DropDown extends React.Component {
  state = {
    value: 'Seleccione una opción',
  }

  handleOnSelect = (index, value) => {
    const { onSelect } = this.props;

    this.setState({ value: value });
    onSelect && onSelect(index, value);
  }

  render() {
    const { onSelect, iconName, iconNameLeft, iconFamily, iconSize, iconColor, color, textStyle, style, ...props } = this.props;

    const modalStyles = [
      styles.qty,
      color && { backgroundColor: color },
      style
    ];

    const textStyles = [
      styles.text,
      textStyle
    ];

    return (
      <ModalDropdown
        style={modalStyles}
        onSelect={this.handleOnSelect}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={{ paddingLeft: 20, fontSize: 16 }}
        {...props}>
        <Block flex row middle space="between">
          <Icon name={iconNameLeft || "diamond"} family={iconFamily || "ArgonExtra"} size={iconSize || 16} color={argonTheme.COLORS.ICON} />
          <Text size={14} style={textStyles}>{this.state.value}</Text>
          <Icon name={iconName || "nav-down"} family={iconFamily || "ArgonExtra"} size={iconSize || 10} color={iconColor || argonTheme.COLORS.PRIMARY} />
        </Block>
      </ModalDropdown>
    )
  }
}

DropDown.propTypes = {
  onSelect: PropTypes.func,
  iconName: PropTypes.string,
  iconFamily: PropTypes.string,
  iconSize: PropTypes.number,
  color: PropTypes.string,
  textStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  qty: {
    marginVertical: 8,
    backgroundColor: argonTheme.COLORS.WHITE,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: argonTheme.COLORS.PRIMARY,
    borderWidth: 2,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
  },
  text: {
    color: argonTheme.COLORS.MUTED,
    fontWeight: '600',
    textAlign: 'left',
    flex: 1,
    paddingLeft: 10

  },
  dropdown: {
    marginTop: 8,
    marginLeft: -16,
    width: 300,
    borderWidth: 1,
  },
});

export default DropDown;
