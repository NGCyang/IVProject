var data = [
    {
        website: "411mania.com",
        articles: [
            {
                corp: ["Apple Inc."],
                id: "5776a1103a8ffe29560aa054",
                time: new Date("2016-07-01 16:57:38 UTC"),
                topic: [
                    {
                        group: "Rumors",
                        type: "Speculation"
                    },
                    {
                        group: "Financing Actions",
                        type: "Financial Purchase"
                    }
                ],
                firstMention: false
            },
            {
                corp: ["Starz"],
                id: "5776a6643a8ffe29560aa15a",
                time: new Date("2016-07-01 17:20:19 UTC"),
                topic: [
                    {
                        group: "Mergers and Acquisitions",
                        type: "Acquisition"
                    }
                ],
                firstMention: false
            },
            {
                corp: ["Pearson  Plc"],
                id: "5776c29d3a8ffe29560aa72a",
                time: new Date("2016-07-01 19:20:44 UTC"),
                topic: [
                    {
                        group: "Product Development",
                        type: "Product Launch"
                    },
                    {
                        group: "Business Concerns",
                        type: "Disagreements"
                    }
                ],
                firstMention: false
            },
            {
                corp: ["Twitter  Inc."],
                id: "577ec7943a8ffe29560b8663",
                time: new Date("2016-07-07 21:20:18 UTC"),
                topic: [
                    {
                        group: "Company Earnings",
                        type: "Financial Ratings"
                    }
                ],
                firstMention: false
            },
        ]
    },
    {
        website: "www.thefinancialexpress-bd.com",
        articles: [
            {
                corp: ["Microsoft Corporation"],
                id: "5775b29f3a8ffe29560a87ba",
                time: new Date(2016, 7, 1, 0, 0, 22),
                topic: [
                    {
                        group: "Financing Actions",
                        type: "Financial Risk"
                    }
                ],
                firstMention: false
            }
        ]
    },
    {
        website: "patch.com",
        articles: [
            {
                corp: ["Noodles & Company"],
                id: "5775b32b3a8ffe29560a87bd",
                time: new Date(2016, 7, 1, 0, 2, 40),
                topic: [
                    {
                        group: "Criminal Actions",
                        type: "Breach"
                    }
                ],
                firstMention: false
            }
        ]
    }
];

var filter = {
    time: {
        from: null,
        to: null
    },
    websites: {},
    topics: {
    },
    corporations: {}
}

var websites = ["test.test"];
var topics = [
    {
        groupname: "test",
        value: ["type1", "type2"]
    }
];
var corps = ["TEST INC."];

var websiteCard;

var chart;
var chartWidth = 0, chartHeight = 0;
var chartMargin = {
    left: 10,
    right: 10,
    top: 5,
    bottom: 5
};
var itemSize = {
    width: 5,
    height: 5
};

var getCSV = function (path) {
    var tempData = [];
    d3.csv(path, function (error, result) {
        console.log(error);
    });
    console.log(tempData);
    return tempData;
}

var initial = function () {
    getCSV("./backtest_students_sample.csv");
    console.log("page loaded!");
    chart = d3.select("#chart");
    websiteCard = document.getElementById("websiteCard");

    chartWidth = document.getElementById("chart").clientWidth;
    chartHeight = document.getElementById("chart").clientHeight;

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    // analyse data
    var websiteObjects = {};
    var topicObjects = {};
    var corpObjects = {};
    for (var i = 0; i < data.length; i++) {
        websiteObjects[data[i].website] = 1;
        for (var j = 0; j < data[i].articles.length; j++) {
            var article = data[i].articles[j];
            for (var k = 0; k < article.topic.length; k++) {
                if (!topicObjects[article.topic[k].group])
                    topicObjects[article.topic[k].group] = {};
                topicObjects[article.topic[k].group][article.topic[k].type] = 1;
            }
            for (var k = 0; k < article.corp.length; k++) {
                corpObjects[article.corp[k]] = 1;
            }
        }




    }
    // initialize websites type array
    for (var name in websiteObjects) {
        websites.push(name);
    }
    // initialize topic type array
    for (var name in topicObjects) {
        var topicTypes = [];
        for (var subname in topicObjects[name]) {
            topicTypes.push(subname);
        }
        topics.push({
            groupname: name,
            value: topicTypes
        });
    }
    // initialize corporation type array
    for (var name in corpObjects) {
        corps.push(name);
    }

    // read websites
    var websiteContext = d3.select("#websiteSelection").append("div");
    websiteContext.selectAll("div")
        .data(websites)
        .enter()
        .append(function (v, i) {
            var div = document.createElement("div");
            var input = document.createElement("input");
            input.setAttribute("class", "filled-in");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", v);
            input.onchange = function (event) {
                if (event.target.checked) {
                    filter.websites[event.target.id] = 1;
                } else {
                    delete filter.websites[event.target.id];
                }
            }
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            return div;
        });

    // read topics
    var topicsContext = d3.select("#topicsSelection");
    topicsContext.selectAll("div")
        .data(topics)
        .enter()
        .append(function (v, i) {
            var div = document.createElement("div");
            var input = document.createElement("input");
            input.setAttribute("class", "filled-in");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", v.groupname);
            input.setAttribute("index", i)
            input.onchange = function (event) {
                if (event.target.checked) {
                    filter.topics[topics[event.target.getAttribute("index")].groupname] = {};
                    var values = topics[event.target.getAttribute("index")].value;
                    for (var j = 0; j < values.length; j++) {
                        filter.topics[topics[event.target.getAttribute("index")].groupname][values[j]] = 1;
                    }
                } else {
                    delete filter.topics[topics[event.target.getAttribute("index")].groupname];
                }
                var thisGroup = document.getElementById("div_group_" + topics[event.target.getAttribute("index")].groupname);
                var typeInputs = thisGroup.getElementsByTagName("input");
                for (var j = 0; j < typeInputs.length; j++) {
                    if (filter.topics[topics[event.target.getAttribute("index")].groupname] &&
                        filter.topics[topics[event.target.getAttribute("index")].groupname][topics[typeInputs[j].getAttribute("groupIndex")].value[typeInputs[j].getAttribute("typeIndex")]]) {
                        typeInputs[j].checked = true;
                    } else {
                        typeInputs[j].checked = false;
                    }
                }
            };
            var children = [];
            var label = document.createElement("label");
            label.innerText = v.groupname;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);

            var typesDiv = document.createElement("div");
            typesDiv.id = "div_group_" + v.groupname;
            for (var j = 0; j < v.value.length; j++) {
                var typeDiv = document.createElement("div");
                var typeInput = document.createElement("input");
                typeInput.setAttribute("class", "filled-in");
                typeInput.setAttribute("type", "checkbox");
                typeInput.setAttribute("id", v.value[j]);
                typeInput.setAttribute("groupIndex", i);
                typeInput.setAttribute("typeIndex", j);
                typeInput.onchange = function (event) {
                    if (event.target.checked) {
                        if (!filter.topics[topics[event.target.getAttribute("groupIndex")].groupname]) {
                            filter.topics[topics[event.target.getAttribute("groupIndex")].groupname] = {};
                        }
                        filter.topics[topics[event.target.getAttribute("groupIndex")].groupname][topics[event.target.getAttribute("groupIndex")].value[event.target.getAttribute("typeIndex")]]
                            = 1;
                    } else {
                        delete filter.topics[topics[event.target.getAttribute("groupIndex")].groupname][topics[event.target.getAttribute("groupIndex")].value[event.target.getAttribute("typeIndex")]];
                    }
                    var groupInput = document.getElementById(topics[event.target.getAttribute("groupIndex")].groupname);
                    if (Object.keys(filter.topics[topics[event.target.getAttribute("groupIndex")].groupname]).length
                        == topics[event.target.getAttribute("groupIndex")].value.length) {
                        groupInput.checked = true;
                    } else {
                        groupInput.checked = false;
                    }
                }
                children.push(typeInput);
                var typeLabel = document.createElement("label");
                typeLabel.innerText = v.value[j];
                typeLabel.setAttribute("for", typeInput.getAttribute("id"));
                typeDiv.appendChild(typeInput);
                typeDiv.appendChild(typeLabel);
                typesDiv.appendChild(typeDiv);
            }
            input.setAttribute("children", children);
            typesDiv.style.paddingLeft = "20px";
            div.appendChild(typesDiv);
            return div;
        });

    // read corps
    var corpsContext = d3.select("#corpsSelection");
    corpsContext.selectAll("div")
        .data(corps)
        .enter()
        .append(function (v, i) {
            var div = document.createElement("div");
            var input = document.createElement("input");
            input.setAttribute("class", "filled-in");
            input.setAttribute("type", "checkbox");
            input.setAttribute("id", v);
            input.onchange = function (event) {
                if (event.target.checked) {
                    filter.corporations[event.target.id] = 1;
                } else {
                    delete filter.corporations[event.target.id];
                }
            }
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            return div;
        });
    render();
}

var onTimeChange = function (event) {
    var value = event.target.value;
    var date = new Date(value);
    if (event.target.id == "date_filter_input_from") {
        filter.time.from = date;
    } else if (event.target.id == "date_filter_input_to") {
        filter.time.to = date;
    }
}

var render = function () {
    var colorScale = d3.scale.category20();
    var xScale = d3.scale.linear().range(0, chartWidth - chartMargin.left - chartMargin.right);
    var websiteRects = chart.selectAll("div.websiteRect").data(data)
        .enter()
        .append("div")
        .attr("class", "websiteRect")
        .style("left", chartMargin.left + "px")
        .style("top", function (v, i) {
            return i * (96 + chartMargin.bottom) + chartMargin.top + "px";
        })
        .style("width", chartWidth - chartMargin.left - chartMargin.right + "px")
        .style("height", 96 - chartMargin.top - chartMargin.bottom + "px")
        .selectAll("div.ariticleRect").data(function (v, i) {
            return v.articles;
        })
        .enter()
        .append("div")
        .attr("class", "articleRect")
        .style("left", function (v, i) {
            return i * itemSize.width + 2 + "px";
        })
        .style("top", function (v, i) {
            return "0px";
        })
        .style("width", itemSize.width + "px")
        .style("height", itemSize.height + "px")
        .style("background-color", function (v, i) {
            return colorScale(v.id);
        })

}
