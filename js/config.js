'use strict'

var CONFIG = {
    DELIMITER: ",",
    DECISION: "Jugar",
    SHOW_MESSAGES_INTERVAL: 30000,
    NOT_DEFINED: "No definido",
    TREE_CHART: {
        container: ".tree",
        levelSeparation: 100,
        siblingSeparation: 50,
        subTeeSeparation: 50,
        rootOrientation: "NORTH",

        node: {
            HTMLclass: "node",
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