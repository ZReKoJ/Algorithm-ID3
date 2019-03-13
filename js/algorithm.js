"use strict"

class Algorithm {
    constructor(data, value) {
        // Check if all rows has the same length, included header
        if (!data.body
            .map(line => line.length)
            .every(element => element == data.header.length)
        ) {
            throw new Error(messages.error.incorrectData);
        }

        this.data = {};

        data.header.forEach((element, i) => {
            this.data[element] = [];
            for (let j = 0; j < data.body.length; j++) {
                this.data[element].push(data.body[j][i]);
            }
        });

        this.execute(this.data, value);
    }

    execute(dataset, value) {
        let merit = new Merit(["uno", "varios", "uno", "varios", "uno", "uno"], ["+", "-", "+", "-", "+", "-"]);
        console.log(merit.calculate());
    }
}

class Merit {
    constructor(attribute, decision) {
        this.attribute = attribute;
        this.decision = decision;
        this.attributeHeader = Array.from(new Set(this.attribute));
        this.decisionHeader = Array.from(new Set(this.decision));

        this.N = this.attribute.length;
    }

    calculate() {
        return this.attributeHeader.reduce(
            (ac, element) => {
                let pair = {}
                this.decisionHeader.forEach(decision => {
                    pair[decision] = 0;
                });
                let count = this.attribute.reduce((acc, attr, index) => {
                    if (element == attr) {
                        pair[this.decision[index]]++;
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                return ac + ((count / this.N) * this.infor(pair[this.decisionHeader[0]] / count, pair[this.decisionHeader[1]] / count));
            }, 0);
    }

    infor(p, n) {
        let pValue = 0,
            nValue = 0;
        if (p != 0) {
            pValue = -p * Math.log2(p);
        }
        if (n != 0) {
            nValue = -n * Math.log2(n);
        }
        return pValue + nValue;
    }
}

var simple_chart_config = {
    chart: {
        container: ".tree",
        levelSeparation: 20,
        siblingSeparation: 15,
        subTeeSeparation: 15,
        rootOrientation: "WEST",

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
    },

    nodeStructure: {
        text: {
            name: {
                val: "Djokovic, Novak"
            },
            desc: "dkadjw"
        },
        HTMLclass: "winner",
        children: [{
                text: {
                    name: "Djokovic, Novak",
                    desc: "4-6, 6-2, 6-2"
                },
                children: [{
                        text: {
                            name: "Djokovic, Novak",
                            desc: "4-6, 6-1, 6-4"
                        },
                        children: [{
                                text: {
                                    name: "Djokovic, Novak",
                                    desc: "4-6, 6-1, 6-4"
                                },
                                children: [{
                                        text: {
                                            name: "Djokovic, Novak",
                                            title: 1
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Bye",
                                            title: 2
                                        }
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Youzhny, Mikhail",
                                    desc: "6-4, 6-0"
                                },
                                children: [{
                                        text: {
                                            name: "Youzhny, Mikhail",
                                            title: 3
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Gimeno-Traver, Daniel",
                                            title: 4
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Monaco, Juan",
                            desc: "6-0, 3-6, 6-3"
                        },
                        children: [{
                                text: {
                                    name: "Gulbis, Ernests",
                                    desc: "4-6, 6-2, 6-3"
                                },
                                children: [{
                                        text: {
                                            name: "Gulbis, Ernests",
                                            title: 5
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Isner, John",
                                            title: 6
                                        }
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Monaco, Juan",
                                    desc: "6-4, 6-0"
                                },
                                children: [{
                                        text: {
                                            name: "Klizan, Martin",
                                            title: 7
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Monaco, Juan",
                                            title: 8
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: {
                    name: "Nieminen, Jarkko",
                    desc: "6-3, 1-6, 7-6(3)"
                },
                children: [{
                        text: {
                            name: "Nieminen, Jarkko",
                            desc: "4-6, 6-1, 6-4"
                        },
                        children: [{
                                text: {
                                    name: "Raonic, Milos",
                                    desc: "6-1, 6-4"
                                },
                                children: [{
                                        text: {
                                            name: "Raonic, Milos",
                                            title: 9
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Benneteau, Julien",
                                            title: 10
                                        }
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Nieminen, Jarkko",
                                    desc: "6-1, 6-2"
                                },
                                children: [{
                                        text: {
                                            name: "Nieminen, Jarkko",
                                            title: 11
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Troicki, Viktor",
                                            title: 12
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: {
                            name: "Del Potro, Juan Martin",
                            desc: "6-2, 6-4"
                        },
                        children: [{
                                text: {
                                    name: "Dolgopolov, Alexandr",
                                    desc: "4-6, 6-2, 6-3"
                                },
                                children: [{
                                        text: {
                                            name: "Dolgopolov, Alexandr",
                                            title: 13
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Tomic, Bernard",
                                            title: 14
                                        }
                                    }
                                ]
                            },
                            {
                                text: {
                                    name: "Del Potro, Juan Martin",
                                    desc: "6-4, 6-0"
                                },
                                children: [{
                                        text: {
                                            name: "Bye",
                                            title: 15
                                        }
                                    },
                                    {
                                        text: {
                                            name: "Del Potro, Juan Martin",
                                            title: 16
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};