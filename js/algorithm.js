"use strict"

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
                val: "Djokovic, Novak",
                href: "http://www.atpworldtour.com/Tennis/Players/Top-Players/Novak-Djokovic.aspx"
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