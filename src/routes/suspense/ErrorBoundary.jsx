import React from 'react';
import {Text, View} from 'react-native';

class ErrorBoundary extends React.Component {
  state = {hasError: false};
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <View className='w-full h-full'>
          <Text>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
