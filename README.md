# OpenWeatherMap Integration for Rocket.Chat
This is a very simple integration which makes use of the free OpenWeatherMap.org API to retrieve current weather data.

## Prerequisites
* You need an API-Key from OpenWeatherMap.org, sign up [here](https://home.openweathermap.org/users/sign_up) and create as many keys as you want.

## Setup
* Go to _'Integrations'_ in your Rocket.Chat-Admin-Panel and create a new _'Outgoing Webhook'_
* Select 'Message sent' as trigger and specify keyword(s), e.g. `!weather`
* Enter `all_public_channels,all_private_groups,all_direct_messages` as _'Channel'_ to make it work everywhere
* Insert `https://api.openweathermap.org/data/2.5/weather` as _'URL'_
* Insert your API Key as _'Token'_
* Copy&Paste the above JavaScript-File into the 'Script' field
* Set Integration and Script to enabled
* Save changes!

## Usage
* If anyone sends `!weather <city>` the rocket.cat should respond with the current weather conditions in that particular city (if it exists to OWMs databases).
* Feel free to modify the Code to your needs. You may find it useful to tweak things like the default city, the presentation or the weather data used. 

Refer to https://openweathermap.org/current for further information on how to use the API. Have Fun!
