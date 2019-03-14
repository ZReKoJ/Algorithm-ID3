'use strict'

var CONFIG = {
    DELIMITER: ",",
    DECISION: "Jugar",
    SHOW_MESSAGES_INTERVAL: 30000,
    TREE_CHART: {
        container: ".tree",
        levelSeparation: 20,
        siblingSeparation: 15,
        subTeeSeparation: 15,
        rootOrientation: "NORTH",

        node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
        },
        connectors: {
            type: "straight",
            style: {
                "stroke-width": 2,
                "stroke": "#ccc"
            }
        }
    }
}