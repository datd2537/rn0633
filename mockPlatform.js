jest.mock('./node_modules/react-native/Libraries/Utilities/Platform', () => {
    const Platform = require.requireActual('./node_modules/react-native/Libraries/Utilities/Platform');
    Platform.OS = 'android';
    return Platform;
});