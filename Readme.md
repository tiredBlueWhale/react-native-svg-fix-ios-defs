##### Install Steps 
1. `git clone --recursive https://github.com/tiredBlueWhale/react-native-svg-fix-ios-defs.git`
2. `cd ./react-native-svg-fix-ios-defs.git`
3. `cd ./react-native-svg && yarn link && cd ..`
4. `yarn link react-native-svg`
5. `yarn install`
6. `cd ios && pod install && cd ..`

##### Development
`yarn build`

##### Already Cloned
```
git submodule update --init
# if there are nested submodules:
git submodule update --init --recursive
```

##### Pull All Changes & Submodules
`git pull --recurse-submodules`
