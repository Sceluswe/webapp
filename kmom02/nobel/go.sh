# Script that packages my mithril code into app.js using a npm script in a json file.
# Then it recompiles my cordova project.
if [[ $1 && $1 == "1" ]]; then
    (cd ./www; npm start) && (cordova emulate android)
else
    (cd ./www; npm start) && (cordova emulate browser)
fi
