// source: 
// http://www.atpworldtour.com/Share/Event-Draws.aspx?EventId=410&Year=2013

var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    20,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "EAST",

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
            name: {val: "科判分二"}
        },
        children: [
            {
                text: {
                    name: "初皈敬頌及略述本論之重要",
                    desc: ""
                }
            },
            {
                text: {
                    name: "次開為四門",
                    desc: ""
                },
                children: [
                    {
                        text: {
                            name: "甲一 為顯其法根源淨故開示造者殊勝",
                            desc: ""
                        }
                    },
                    {
                        text: {
                            name: "甲二 令於教授起敬重故開示其法殊勝",
                            desc: ""
                        }
                    },{
                        text: {
                            name: "甲三 如何說聞二種殊勝相應正法",
                            desc: ""
                        }
                    },{
                        text: {
                            name: "甲四 如何正以教授引導學徒之次第",
                            desc: ""
                        }
                    }
                ]
            }
        ]
    }
};
