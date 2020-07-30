import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../../Actions';

class List extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  renderDescription() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <View>
          <Text>{this.props.library.description}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          backgroundColor: 'green',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 6,
        }}>
        <View style={{margin: 25}}>
          <TouchableOpacity
            onPress={() => this.props.selectedlibrary(this.props.library.id)}>
            <Text>{this.props.library.title}</Text>
          </TouchableOpacity>
          {this.renderDescription()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {selectedLibraryId: state.selectedLibraryId};
};

export default connect(mapStateToProps, actions)(List);
