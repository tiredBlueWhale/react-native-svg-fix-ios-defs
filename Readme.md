##### Install Steps 
1. `git clone --recursive https://github.com/tiredBlueWhale/react-native-svg.git`
2. `cd ./react-native-svg && yarn link && cd ..`
3. `yarn link react-native-svg`
4. `yarn install`
5. `cd ios && pod install && cd ..`

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