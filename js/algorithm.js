"use strict"

class Node {
    constructor(name) {
        this.text = {
            name: name,
            desc: ""
        }

        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class Algorithm {
    constructor(data) {
        // Check if all rows has the same length, included header
        if (!data.body
            .map(line => line.length)
            .every(element => element == data.header.length)
        ) {
            throw new Error(messages.error.incorrectData);
        }

        this.data = data;
    }

    getData() {
        let dataset = {};

        this.data.header.forEach((element, i) => {
            dataset[element] = [];
            for (let j = 0; j < this.data.body.length; j++) {
                dataset[element].push(String(this.data.body[j][i]));
            }
        });

        return dataset;
    }

    execute(dataset, value) {
        if (Object.keys(dataset).length <= 1) {
            return new Node(CONFIG.NOT_DEFINED);
        }

        if (dataset[value].every(element => element == dataset[value][0])) {
            return new Node(dataset[value][0]);
        }

        let merit = Object.keys(dataset)
            .filter(
                data => data != value
            )
            .map(
                data => new Merit(data, dataset[data], dataset[value])
            )
            .sort((a, b) => a.calculate() < b.calculate() ? -1 : 1)[0];

        let node = new Node(merit.name);
        merit.attributeSet.forEach(header => {
            let data = this.remove(dataset, merit.name, header);
            let childNode = this.execute(data, value);
            childNode.text.desc = header;
            node.addChild(childNode);
        });

        return node;
    }

    remove(dataset, attributeKey, attributeValue) {
        let data = {};

        Object.keys(dataset)
            .filter(
                key => key != attributeKey
            )
            .forEach(key => {
                data[key] = [];
                for (let i = 0; i < dataset[key].length; i++) {
                    if (dataset[attributeKey][i] == attributeValue) {
                        data[key].push(dataset[key][i]);
                    }
                }
            });

        return data;
    }
}

class Merit {
    constructor(name, attribute, decision) {
        this.name = name;
        this.attribute = attribute;
        this.decision = decision;
        this.attributeSet = Array.from(new Set(this.attribute));
        this.decisionSet = Array.from(new Set(this.decision));

        if (this.decisionSet.length != 2) {
            throw new Error(messages.error.decisionLength2);
        }

        this.N = this.attribute.length;
    }

    calculate() {
        this.value = this.attributeSet.reduce(
            (ac, element) => {
                let pair = {}
                this.decisionSet.forEach(decision => {
                    pair[decision] = 0;
                });
                let count = this.attribute.reduce((acc, attr, index) => {
                    if (element == attr) {
                        pair[this.decision[index]]++;
                        return acc + 1;
                    }
                    return acc;
                }, 0);
                return ac + ((count / this.N) * this.infor(pair[this.decisionSet[0]] / count, pair[this.decisionSet[1]] / count));
            }, 0);
        return this.value;
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