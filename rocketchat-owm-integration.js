class Script {
    prepare_outgoing_request({ request }) {
        const lang = "de";
        const units = "metric";
        const appID = request.data.token;
        const trigger = request.data.trigger_word;
        var phrase = request.data.text.replace(trigger, '').trim();
        
        if (!phrase) {
            phrase = "Berlin,DE";
        }

        const makeUrl = encodeURI(request.url + "?lang="+lang+"&units="+units+"&appid="+appID+"&q="+phrase)
        request.headers['Content-Type'] = 'application/json';
        return {
            url: makeUrl,
            headers: request.headers,
            method: 'GET'
        };
    }

    process_outgoing_response({ request, response }) {

        const weather = JSON.parse(response.content);

        if (response.status_code == 200) {
            const icon_url = "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";

            var icon = "";
            if (weather.weather[0].icon.includes("01")) {
                icon += String.fromCodePoint(0x2600);
            } else if (weather.weather[0].icon.includes("02")) {
                icon += String.fromCodePoint(0x26C5);
            } else if (weather.weather[0].icon.includes("03")) {
                icon += String.fromCodePoint(0x2601);
            } else if (weather.weather[0].icon.includes("04")) {
                icon += String.fromCodePoint(0x1F325);
            } else if (weather.weather[0].icon.includes("09")) {
                icon += String.fromCodePoint(0x2614);
            } else if (weather.weather[0].icon.includes("10")) {
                icon += String.fromCodePoint(0x1F326);
            } else if (weather.weather[0].icon.includes("11")) {
                icon += String.fromCodePoint(0x26C8);
            } else if (weather.weather[0].icon.includes("13")) {
                icon += String.fromCodePoint(0x1F328);
            } else if (weather.weather[0].icon.includes("50")) {
                icon += String.fromCodePoint(0x1F32B);
            }

            var message = "**" + icon + " | " + weather.main.temp + " °C | " + weather.main.humidity + " %rH | " + weather.main.pressure + " hPa** \n";
            return {
                content: {
                    text: message,
                    username: weather.name,
                    icon_url: icon_url
                }
            };
        }
    }
}
