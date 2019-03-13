'use strict'

var notifier = new Notifier();
var data = {
    header: [],
    body: []
}

$(() => {
    makeResizableDiv('.setting-panel');
    makeResizableDiv('.table-panel');

    let settingFunctions = settingPanel('.setting-panel>.setting');

    infoMessages();
});

function settingPanel(div) {
    let setting = $(div);

    let stateButton = setting.find("button.state");
    stateButton.on("click", () => {
        try {
            switch (stateButton.text()) {
                case "Ejecutar":
                    stateButton.text("Parar");
                    break;
                case "Parar":
                    stateButton.text("Ejecutar");
                    break;
            }
        } catch (err) {
            stateButton.text("Ejecutar");
            notifier.error(err.message);
        }
    });

    let delimiterInput = setting.find("input[type='text'].delimiter");
    delimiterInput.on("change", (e) => {
        CONFIG.DELIMITER = delimiterInput.val();
    });

    let headerInput = setting.find("input[type='file']#data-header");
    headerInput.on("change", (e) => {
        let reader = new FileReader();
        reader.onload = function () {
            let header = reader.result.split(CONFIG.DELIMITER);
            header = header.map(element => element.replace("\n", ""));
            data.header = header;
            updateData();
        };
        reader.readAsText(event.target.files[0]);
    });

    let bodyInput = setting.find("input[type='file']#data-body");
    bodyInput.on("change", (e) => {
        let reader = new FileReader();
        reader.onload = function () {
            let body = reader.result.split("\n").map(line => line.split(CONFIG.DELIMITER));
            let max = Math.max.apply(null, body.map(line => line.length));
            body = body.filter(line => line.length == max);
            data.body = body;
            updateData();
        };
        reader.readAsText(event.target.files[0]);
    });

    return {};
}

function updateData() {
    let table = $(".table-panel>table");
    table.empty();

    let row = undefined;

    row = $("<tr></tr>");
    data.header.forEach(element => {
        row.append($("<th>" + element + "</th>"));
    });
    table.append(row);

    data.body.forEach(line => {
        row = $("<tr></tr>");
        line.forEach(element => {
            row.append($("<td>" + element + "</td>"));
        });
        table.append(row);
    });
}

function infoMessages() {
    let allInfoMessages = messages.info.uses.recursiveValues();
    setInterval(() => {
        notifier.info(allInfoMessages[
            Math.floor(Math.random() * allInfoMessages.length)
        ]);
    }, CONFIG.SHOW_MESSAGES_INTERVAL);
}