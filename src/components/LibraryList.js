import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as Actions from '../Actions';
import List from '../components/common/List';

class LibraryList extends Component {
  renderItem(library) {
    return <List library={library.item} />;
  }

  render() {
    return (
      <View style={{backgroundColor: 'pink'}}>
        <FlatList
          data={this.props.libraries}
          renderItem={this.renderItem}
          keyExtractor={(library) => library.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps, Actions)(LibraryList);
