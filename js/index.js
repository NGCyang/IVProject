var data = {
    "411mania.com": [
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
    ],
    "www.thefinancialexpress-bd.com": [
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
    ],

    "patch.com": [
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
};

var filter = {
    time: {
        from: null,
        to: null
    },
    websites: [],
    topics: {
    },
    corporations: {}
}

var websites = [];
var topics = [
    
];
var corps = [];
var minTime = null;
var maxTime = null;

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
    width: 10,
    height: 8
};

var pageloaded = false;

var initial = function () {
    console.log("page loaded!");
    chart = d3.select("#chart");
    websiteCard = document.getElementById("websiteCard");

    chartWidth = document.getElementById("chart").clientWidth;
    chartHeight = document.getElementById("chart").clientHeight;

    // analyse data
    var topicObjects = {};
    var corpObjects = {};
    for (var i in data) {
        for (var j = 0; j < data[i].length; j++) {
            var article = data[i][j];
            for (var k = 0; k < article.topic.length; k++) {
                if (!topicObjects[article.topic[k].group])
                    topicObjects[article.topic[k].group] = {};
                topicObjects[article.topic[k].group][article.topic[k].type] = 1;
            }
            for (var k = 0; k < article.corp.length; k++) {
                corpObjects[article.corp[k]] = 1;
            }
            if (minTime == null) minTime = article.time;
            else if (minTime > article.time) minTime = article.time;
            if (maxTime == null) maxTime = article.time;
            else if (maxTime < article.time) maxTime = article.time;
        }
        // initialize websites type array
        websites.push(i);
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
                    filter.websites.push(event.target.id);
                } else {
                    filter.websites.splice(filter.websites.indexOf(event.target.id), 1);
                }
                if(pageloaded) render();
            }
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            input.click();
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
            input.setAttribute("index", i);
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
                if(pageloaded) render();
            };
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
                    if(pageloaded) render();
                }
                var typeLabel = document.createElement("label");
                typeLabel.innerText = v.value[j];
                typeLabel.setAttribute("for", typeInput.getAttribute("id"));
                typeDiv.appendChild(typeInput);
                typeDiv.appendChild(typeLabel);
                typesDiv.appendChild(typeDiv);
            }
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
                if(pageloaded) render();
            }
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            input.click();
            return div;
        });
    for (var i = 0; i < topics.length; i++) {
        document.getElementById(topics[i].groupname).click();
    }

    // initial time
    document.getElementById("date_filter_input_from").value = toDateString(minTime);
    document.getElementById("date_filter_input_to").value = toDateString(maxTime);
    filter.time.from = new Date(toDateString(minTime));
    filter.time.to = new Date(toDateString(maxTime));
    // console.log(filter);
    pageloaded = true;
    render();
}
var toDateString = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return year + "-" + month + "-" + day;
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
    var xScale = d3.time.scale.utc().range([0, chartWidth - chartMargin.left - chartMargin.right - 30]);
    xScale.ticks(d3.time.day.utc, 1);
    xScale.domain([filter.time.from, filter.time.to]);
    console.log(filter);
    // console.log(xScale(new Date("Jul 06 2016 00:57:38 GMT+0800")));
    var yScale = d3.time.scale().range([164 - chartMargin.top - chartMargin.bottom - 10, 0]);
    yScale.ticks(d3.time.hours, 4);
    yScale.domain([0, 23]);
    // console.log(yScale(23));

    var websiteDivs = chart.selectAll("div.websiteRect").data(filter.websites);
    websiteDivs.enter()
        .append("div")
            .attr("class", "websiteRect")
            .style("left", chartMargin.left + "px")
            .style("top", function (v, i) {
                return i * (164 + chartMargin.bottom) + chartMargin.top + "px";
            })
            .style("width", chartWidth - chartMargin.left - chartMargin.right - 10 + "px")
            .style("height", 164 - chartMargin.top - chartMargin.bottom + "px")
            .append("svg")
                .attr("width", chartWidth - chartMargin.left - chartMargin.right - 10)
                .attr("height", 164 - chartMargin.top - chartMargin.bottom - 10);
    websiteDivs.exit().remove();
    var websiteItems = document.getElementsByClassName("websiteRect");
    for(var i = 0; i < websiteItems.length; i ++){
        var websiteSVG = d3.select(websiteItems[i]).select("svg");
        
        var articleRects = websiteSVG.selectAll("rect").data(data[filter.websites[i]])
        articleRects.enter()
            .append("rect")
                .attr("x", function(v, i){
                    return xScale(new Date(toDateString(v.time)));
                })
                .attr("y", function(v, i){
                    var result = yScale(v.time.getUTCHours());
                    console.log(result);
                    return result;
                })
                .attr("width", itemSize.width)
                .attr("height", itemSize.height)
                .attr("fill", function(v, i){
                    return colorScale(v.id);
                })
        articleRects.exit().remove();
    }
}
