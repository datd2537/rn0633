module.exports = {
    moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "node_modules/(?!(react-native"
        + "|react-navigation-tabs"
        + "|react-native-splash-screen"
        + "|react-native-screens"
        + "|react-native-reanimated"
        + ")/)",
    ],
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!react-native|react-navigation)/"
    ]
}