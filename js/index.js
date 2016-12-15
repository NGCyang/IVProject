// var data = {
//     "411mania.com": [
//         {
//             corp: ["Apple Inc."],
//             id: "5776a1103a8ffe29560aa054",
//             time: new Date("2016-07-01 16:57:38 UTC"),
//             topic: [
//                 {
//                     group: "Rumors",
//                     type: "Speculation"
//                 },
//                 {
//                     group: "Financing Actions",
//                     type: "Financial Purchase"
//                 }
//             ],
//             firstMention: false
//         },
//         {
//             corp: ["Starz"],
//             id: "5776a6643a8ffe29560aa15a",
//             time: new Date("2016-07-01 17:20:19 UTC"),
//             topic: [
//                 {
//                     group: "Mergers and Acquisitions",
//                     type: "Acquisition"
//                 }
//             ],
//             firstMention: false
//         },
//         {
//             corp: ["Pearson  Plc"],
//             id: "5776c29d3a8ffe29560aa72a",
//             time: new Date("2016-07-01 19:20:44 UTC"),
//             topic: [
//                 {
//                     group: "Product Development",
//                     type: "Product Launch"
//                 },
//                 {
//                     group: "Business Concerns",
//                     type: "Disagreements"
//                 }
//             ],
//             firstMention: false
//         },
//         {
//             corp: ["Twitter  Inc."],
//             id: "577ec7943a8ffe29560b8663",
//             time: new Date("2016-07-07 21:20:18 UTC"),
//             topic: [
//                 {
//                     group: "Company Earnings",
//                     type: "Financial Ratings"
//                 }
//             ],
//             firstMention: false
//         },
//     ],
//     "www.thefinancialexpress-bd.com": [
//         {
//             corp: ["Microsoft Corporation"],
//             id: "5775b29f3a8ffe29560a87ba",
//             time: new Date(2016, 7, 1, 0, 0, 22),
//             topic: [
//                 {
//                     group: "Financing Actions",
//                     type: "Financial Risk"
//                 }
//             ],
//             firstMention: false
//         }
//     ],

//     "patch.com": [
//         {
//             corp: ["Noodles & Company"],
//             id: "5775b32b3a8ffe29560a87bd",
//             time: new Date(2016, 7, 1, 0, 2, 40),
//             topic: [
//                 {
//                     group: "Criminal Actions",
//                     type: "Breach"
//                 }
//             ],
//             firstMention: false
//         }
//     ]
// };

var data = {"www.latimes.com": [{"topic": [{"type": "Tragedy", "group": "Business Concerns"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c4713a8ffe55b90031db", "time": {"$date": 1451607149000}}], "www.juniorminingnetwork.com": [{"topic": [{"type": "Announcement", "group": "General Business Actions"}, {"type": "Agreement", "group": "Contracts"}], "first_mention": false, "corp": ["Royal Gold  Inc."], "id": "5685c4993a8ffe55b90031e5", "time": {"$date": 1451607189000}}, {"topic": [{"type": "Announcement", "group": "General Business Actions"}, {"type": "Resignation", "group": "Employment Actions"}], "first_mention": false, "corp": ["Resource Capital Corp."], "id": "5685c4993a8ffe55b90031e6", "time": {"$date": 1451607189000}}], "www.itcblog.com": [{"topic": [{"type": "Violation", "group": "Criminal Actions"}, {"type": "Fraud", "group": "Criminal Actions"}], "first_mention": true, "corp": ["ITC Holdings Corp."], "id": "5685c3443a8ffe55b90031d0", "time": {"$date": 1451606850000}}], "slickdeals.net": [{"topic": [{"type": "Man-made Disaster", "group": "Disaster"}], "first_mention": true, "corp": ["SanDisk Corporation"], "id": "5685c4c13a8ffe55b90031e9", "time": {"$date": 1451607229000}}], "newsmilitary.com": [{"topic": [{"type": "Man-made Disaster", "group": "Disaster"}, {"type": "Violation", "group": "Criminal Actions"}], "first_mention": false, "corp": ["Monsanto Company"], "id": "5685c2cc3a8ffe55b90031cb", "time": {"$date": 1451606723000}}], "www.sachem.ca": [{"topic": [{"type": "Mistakes", "group": "Business Concerns"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c18b3a8ffe55b90031c1", "time": {"$date": 1451606407000}}], "appleinsider.com": [{"topic": [{"type": "Announcement", "group": "General Business Actions"}], "first_mention": false, "corp": ["Apple Inc."], "id": "5685c2e03a8ffe55b90031cd", "time": {"$date": 1451606745000}}], "sfpropertymanagement.wordpress.com": [{"topic": [{"type": "Government Agency", "group": "Government"}], "first_mention": false, "corp": ["Microsoft Corporation"], "id": "5685c4713a8ffe55b90031da", "time": {"$date": 1451607147000}}], "www.caribbeantrakker.com": [{"topic": [{"type": "Announcement", "group": "General Business Actions"}], "first_mention": false, "corp": ["Target Corporation"], "id": "5685c4d63a8ffe55b90031f3", "time": {"$date": 1451607233000}}], "www.vizioned.com": [{"topic": [{"type": "Government Agency", "group": "Government"}], "first_mention": false, "corp": ["Microsoft Corporation"], "id": "5685c45d3a8ffe55b90031d8", "time": {"$date": 1451607127000}}], "www.patriotledger.com": [{"topic": [{"type": "Mistakes", "group": "Business Concerns"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c4993a8ffe55b90031e3", "time": {"$date": 1451607189000}}], "www.techmeme.com": [{"topic": [{"type": "Lawsuit", "group": "Legal Actions"}, {"type": "Shareholders", "group": "Corporate Governance"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c3bc3a8ffe55b90031d3", "time": {"$date": 1451606958000}}], "www.peoplesworld.org": [{"topic": [{"type": "Wage", "group": "Employment Actions"}], "first_mention": false, "corp": ["Gap  Inc. (The)"], "id": "5685c4c13a8ffe55b90031eb", "time": {"$date": 1451607230000}}], "www.mediaite.com": [{"topic": [{"type": "Wage", "group": "Employment Actions"}], "first_mention": false, "corp": ["Gap  Inc. (The)"], "id": "5685c4c13a8ffe55b90031f2", "time": {"$date": 1451607233000}}], "reclaimourrepublic.wordpress.com": [{"topic": [{"type": "Man-made Disaster", "group": "Disaster"}], "first_mention": false, "corp": ["Target Corporation"], "id": "5685c45d3a8ffe55b90031d7", "time": {"$date": 1451607126000}}], "www.digitaljournal.com": [{"topic": [{"type": "Financial Results", "group": "Company Earnings"}, {"type": "Management Decision", "group": "Corporate Governance"}], "first_mention": false, "corp": ["PROTOSTAR I Ltd"], "id": "5685c4993a8ffe55b90031dd", "time": {"$date": 1451607187000}}, {"topic": [{"type": "Announcement", "group": "General Business Actions"}], "first_mention": false, "corp": ["BlackRock  Inc."], "id": "5685c4993a8ffe55b90031de", "time": {"$date": 1451607187000}}], "www.wdaz.com": [{"topic": [{"type": "Crime", "group": "Criminal Actions"}], "first_mention": false, "corp": ["Caseys General Stores  Inc."], "id": "5685c3443a8ffe55b90031d1", "time": {"$date": 1451606849000}}], "insurancenewsnet.com": [{"topic": [{"type": "Tragedy", "group": "Business Concerns"}], "first_mention": false, "corp": ["Target Corporation"], "id": "5685c4c13a8ffe55b90031ef", "time": {"$date": 1451607231000}}], "www.solonews.net": [{"topic": [{"type": "Tragedy", "group": "Business Concerns"}, {"type": "Violation", "group": "Criminal Actions"}], "first_mention": false, "corp": ["McDonald's Corporation"], "id": "5685c4993a8ffe55b90031e4", "time": {"$date": 1451607189000}}, {"topic": [{"type": "Mistakes", "group": "Business Concerns"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c4c13a8ffe55b90031e7", "time": {"$date": 1451607229000}}, {"topic": [{"type": "Agreement", "group": "Contracts"}], "first_mention": false, "corp": ["AT&T Inc."], "id": "5685c4c13a8ffe55b90031e8", "time": {"$date": 1451607229000}}], "devices.measurementmedianetwork.com": [{"topic": [{"type": "Mistakes", "group": "Business Concerns"}], "first_mention": false, "corp": ["Facebook  Inc."], "id": "5685c22b3a8ffe55b90031c7", "time": {"$date": 1451606555000}}], "www.americanbankingnews.com": [{"topic": [{"type": "Reorganization", "group": "Corporate Governance"}], "first_mention": false, "corp": ["Nike  Inc."], "id": "5685c18b3a8ffe55b90031c2", "time": {"$date": 1451606407000}}, {"topic": [{"type": "Reorganization", "group": "Corporate Governance"}], "first_mention": false, "corp": ["Old Point Financial Corporation"], "id": "5685c18b3a8ffe55b90031c3", "time": {"$date": 1451606407000}}], "seanwalker.com": [{"topic": [{"type": "Financial Purchase", "group": "Financing Actions"}, {"type": "Financial Ratings", "group": "Company Earnings"}], "first_mention": false, "corp": ["Seagate Technology."], "id": "5685c2673a8ffe55b90031c8", "time": {"$date": 1451606621000}}], "www.ad-hoc-news.de": [{"topic": [{"type": "Payments", "group": "Financing Actions"}], "first_mention": true, "corp": ["Cowen Group  Inc."], "id": "5685c4c13a8ffe55b90031ea", "time": {"$date": 1451607229000}}], "www.xvid.it": [{"topic": [{"type": "Intellectual Property", "group": "Product Development"}, {"type": "Speculation", "group": "Rumors"}], "first_mention": false, "corp": ["Apple Inc."], "id": "5685c3bc3a8ffe55b90031d4", "time": {"$date": 1451606958000}}, {"topic": [{"type": "Acquisition", "group": "Mergers and Acquisitions"}], "first_mention": false, "corp": ["AT&T Inc."], "id": "5685c3bc3a8ffe55b90031d5", "time": {"$date": 1451606958000}}], "kenmay.net": [{"topic": [{"type": "Breach", "group": "Criminal Actions"}, {"type": "Financial Risk", "group": "Financing Actions"}], "first_mention": false, "corp": ["Microsoft Corporation"], "id": "5685c2f43a8ffe55b90031ce", "time": {"$date": 1451606765000}}], "urbanchristiannews.com": [{"topic": [{"type": "Government Agency", "group": "Government"}], "first_mention": false, "corp": ["Microsoft Corporation"], "id": "5685c3443a8ffe55b90031cf", "time": {"$date": 1451606848000}}], "www.rustorian.com": [{"topic": [{"type": "Strategy", "group": "Corporate Governance"}], "first_mention": true, "corp": ["Mosaic Company (The)"], "id": "5685c4993a8ffe55b90031e0", "time": {"$date": 1451607188000}}], "www.tickerreport.com": [{"topic": [{"type": "Financial Results", "group": "Company Earnings"}], "first_mention": true, "corp": ["CNB Financial Corporation"], "id": "5685c4c13a8ffe55b90031ec", "time": {"$date": 1451607230000}}, {"topic": [{"type": "Financial Ratings", "group": "Company Earnings"}], "first_mention": false, "corp": ["Talmer Bancorp  Inc."], "id": "5685c4c13a8ffe55b90031ed", "time": {"$date": 1451607230000}}, {"topic": [{"type": "Financial Results", "group": "Company Earnings"}], "first_mention": false, "corp": ["Pharmerica Corporation"], "id": "5685c4c13a8ffe55b90031ee", "time": {"$date": 1451607231000}}], "fansided.com": [{"topic": [{"type": "Tragedy", "group": "Business Concerns"}, {"type": "Announcement", "group": "General Business Actions"}], "first_mention": false, "corp": ["Orange"], "id": "5685c1ef3a8ffe55b90031c4", "time": {"$date": 1451606491000}}], "www.onenewspage.com": [{"topic": [{"type": "Tragedy", "group": "Business Concerns"}], "first_mention": false, "corp": ["AMC Networks Inc."], "id": "5685c4993a8ffe55b90031df", "time": {"$date": 1451607188000}}], "dailymed.nlm.nih.gov": [{"topic": [{"type": "Speculation", "group": "Rumors"}], "first_mention": true, "corp": ["PROTOSTAR I Ltd"], "id": "5685c4d63a8ffe55b90031f4", "time": {"$date": 1451607251000}}], "community.kinaxis.com": [{"topic": [{"type": "Partnership", "group": "Contracts"}], "first_mention": true, "corp": ["Gap  Inc. (The)"], "id": "5685c36c3a8ffe55b90031d2", "time": {"$date": 1451606871000}}], "www.falkirkherald.co.uk": [{"topic": [{"type": "Accomplishment", "group": "General Business Actions"}], "first_mention": false, "corp": ["McDonald's Corporation"], "id": "5685c4c13a8ffe55b90031f1", "time": {"$date": 1451607231000}}], "chillreport.com": [{"topic": [{"type": "Disturbance", "group": "Business Concerns"}], "first_mention": false, "corp": ["Netflix  Inc."], "id": "5685c2173a8ffe55b90031c5", "time": {"$date": 1451606533000}}], "www.thecouponingcouple.com": [{"topic": [{"type": "Agreement", "group": "Contracts"}], "first_mention": false, "corp": ["Target Corporation"], "id": "5685c2a43a8ffe55b90031c9", "time": {"$date": 1451606683000}}], "pjmedia.com": [{"topic": [{"type": "Man-made Disaster", "group": "Disaster"}], "first_mention": false, "corp": ["Amazon.com  Inc."], "id": "5685c3f83a8ffe55b90031d6", "time": {"$date": 1451607020000}}], "www.digitalproducer.com": [{"topic": [{"type": "Announcement", "group": "General Business Actions"}], "first_mention": false, "corp": ["Sotheby's"], "id": "5685c4993a8ffe55b90031e1", "time": {"$date": 1451607188000}}, {"topic": [{"type": "Lawsuit", "group": "Legal Actions"}, {"type": "Litigation", "group": "Legal Actions"}], "first_mention": false, "corp": ["Flotek Industries  Inc."], "id": "5685c4993a8ffe55b90031e2", "time": {"$date": 1451607188000}}], "www.wsnewspublishers.com": [{"topic": [{"type": "Partnership", "group": "Contracts"}], "first_mention": true, "corp": ["Enterprise Products Partners L.P.", "Synergy Resources Corporation"], "id": "5685c4c13a8ffe55b90031f0", "time": {"$date": 1451607231000}}]};

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
    width: 20,
    height: 20
};

var pageloaded = false;

var initial = function () {
    console.log("page loaded!");
    chart = d3.select("#chart");
    websiteCard = document.getElementById("websiteCard");

    chartWidth = document.getElementById("chart").clientWidth;
    chartHeight = document.getElementById("chart").clientHeight;
    // analyse data
    var websiteObjects = {}
    var topicObjects = {};
    var corpObjects = {};
    for (var i in data) {
        websiteObjects[i] = null;
        for (var j = 0; j < data[i].length; j++) {
            var article = data[i][j];
            for (var k = 0; k < article.topic.length; k++) {
                if (!topicObjects[article.topic[k].group])
                    topicObjects[article.topic[k].group] = {};
                topicObjects[article.topic[k].group][article.topic[k].type] = null;
            }
            for (var k = 0; k < article.corp.length; k++) {
                corpObjects[article.corp[k]] = null;
            }
            var tempDate = new Date(article.time["$date"]);
            if (minTime === null) minTime = tempDate;
            else if (minTime > tempDate) minTime = tempDate;
            if (maxTime === null) maxTime = tempDate;
            else if (maxTime < tempDate) maxTime = tempDate;
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
                if (pageloaded) render();
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
            input.setAttribute("index", i);
            input.onchange = function (event) {
                if (event.target.checked) {
                    filter.topics[topics[event.target.getAttribute("index")].groupname] = {};
                    var values = topics[event.target.getAttribute("index")].value;
                    for (var j = 0; j < values.length; j++) {
                        filter.topics[topics[event.target.getAttribute("index")].groupname][values[j]] = null;
                    }
                } else {
                    delete filter.topics[topics[event.target.getAttribute("index")].groupname];
                }
                var thisGroup = document.getElementById("div_group_" + topics[event.target.getAttribute("index")].groupname);
                var typeInputs = thisGroup.getElementsByTagName("input");
                for (var j = 0; j < typeInputs.length; j++) {
                    if (filter.topics[topics[event.target.getAttribute("index")].groupname] !== undefined &&
                        filter.topics[topics[event.target.getAttribute("index")].groupname][topics[typeInputs[j].getAttribute("groupIndex")].value[typeInputs[j].getAttribute("typeIndex")]] !== undefined) {
                        typeInputs[j].checked = true;
                    } else {
                        typeInputs[j].checked = false;
                    }
                }
                if (pageloaded) render();
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
                    if (pageloaded) render();
                }
                var typeLabel = document.createElement("label");
                typeLabel.innerText = v.value[j];
                typeLabel.setAttribute("for", typeInput.getAttribute("id"));
                typeDiv.appendChild(typeInput);
                typeDiv.appendChild(typeLabel);
                typesDiv.appendChild(typeDiv);
            }
            typesDiv.style.paddingLeft = "25px";
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
                if (pageloaded) render();
            }
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            return div;
        });
    for (var i = 0; i < websites.length; i++) {
        document.getElementById(websites[i]).click();
    }
    for (var i = 0; i < topics.length; i++) {
        document.getElementById(topics[i].groupname).click();
    }
    for (var i = 0; i < corps.length; i++) {
        document.getElementById(corps[i]).click();
    }

    // initial time
    maxTime = new Date(maxTime.getTime() + 24 * 60 * 60 * 1000);
    document.getElementById("date_filter_input_from").value = toDateString(minTime);
    document.getElementById("date_filter_input_to").value = toDateString(maxTime);
    filter.time.from = new Date(toDateString(minTime));
    filter.time.to = new Date(toDateString(maxTime));

    // initial autocomplete
    $("input#autocomplete-text-website").autocomplete({
        data: websiteObjects
    });
    $("input#autocomplete-text-topic").autocomplete({
        data: topicObjects
    });
    $("input#autocomplete-text-corp").autocomplete({
        data: corpObjects
    });

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
    render();
}

var onMouseEnter = function (item) {
    var floatInfo = document.getElementById("float_info");
    var wrapper = document.createElement("div");
    for (var i = 0; i < item.topic.length; i++) {
        var group = document.createElement("div");
        group.innerHTML = "Topic Group" + (i + 1) + ": " + item.topic[i].group;
        var type = document.createElement("div");
        type.innerHTML = "Topic Type" + (i + 1) + ": " + item.topic[i].type;
        wrapper.appendChild(group);
        wrapper.appendChild(type);
    }
    for (var i = 0; i < item.corp.length; i++) {
        var corp = document.createElement("div");
        corp.innerHTML = "Corporation" + (i + 1) + ": " + item.corp[i];
        wrapper.appendChild(corp);
    }
    var time = document.createElement("div");
    time.innerHTML = "Time: " + item.time.toUTCString();
    wrapper.appendChild(time);
    floatInfo.replaceChild(wrapper, floatInfo.children[0]);
}

var render = function () {
    var colorScale = d3.scale.category20();
    var xScale = d3.time.scale.utc().range([0, chartWidth - chartMargin.left - chartMargin.right - 30]);
    xScale.domain([filter.time.from, filter.time.to]);
    console.log(filter);
    var yScale = d3.scale.linear().range([chartHeight / 6 - chartMargin.top - chartMargin.bottom - 10, 5]);
    yScale.domain([0, 5]);

    var websiteDivs = chart.selectAll("div.websiteRect").data(filter.websites);
    websiteDivs.enter()
        .append("div")
        .attr("class", "websiteRect")
        .style("left", chartMargin.left + "px")
        .style("top", function (v, i) {
            return i * (chartHeight / 4 + chartMargin.bottom) + chartMargin.top + "px";
        })
        .style("width", chartWidth - chartMargin.left - chartMargin.right - 10 + "px")
        .style("height", chartHeight / 4 - chartMargin.top - chartMargin.bottom + "px")
        .append("svg")
        .attr("width", chartWidth - chartMargin.left - chartMargin.right - 10)
        .attr("height", chartHeight / 4 - chartMargin.top - chartMargin.bottom - 10);
    websiteDivs.exit().remove();
    var websiteItems = document.getElementsByClassName("websiteRect");
    for (var i = 0; i < websiteItems.length; i++) {
        var websiteSVG = d3.select(websiteItems[i]).select("svg");

        var articleRects = websiteSVG.selectAll("rect").data(data[filter.websites[i]].filter(function (item) {
            // filter data
            var flag = true;
            // filter time
            if (new Date(item.time["$date"]) > filter.time.to || new Date(item.time["$date"]) < filter.time.from) flag = false;

            // filter topics
            for (var i = 0; i < item.topic.length && flag; i++) {
                if (filter.topics[item.topic[i].group] === undefined || filter.topics[item.topic[i].group][item.topic[i].type] === undefined) flag = false;
            }
            // filter corporations
            for (var i = 0; i < item.corp.length && flag; i++) {
                if (filter.corporations[item.corp[i]] === undefined) flag = false;
            }
            return flag;
        }));
        articleRects.enter()
            .append("rect")
            .attr("x", function (v, i) {
                return xScale(new Date(toDateString(new Date(v.time["$date"]))));
            })
            .attr("y", function (v, i) {
                var result = yScale(Math.floor((new Date(v.time["$date"])).getUTCHours() / 4));
                return result;
            })
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("width", itemSize.width)
            .attr("height", itemSize.height)
            .attr("fill", function (v, i) {
                return colorScale(v.id);
            })
            .on("mouseenter", function (v, i) {
                onMouseEnter(v);
                d3.event.target.style.stroke = "#66ccff";
                d3.select("#float_info").style({
                    visibility: "visible",
                    transform: "translate(" + d3.event.clientX + "px, " + d3.event.clientY + "px)",
                    WebkitTransform: "translate(" + d3.event.clientX + "px, " + d3.event.clientY + "px)",
                    opacity: 1
                });
            })
            .on("mouseleave", function (v, i) {
                d3.event.target.style.stroke = null;
                d3.select("#float_info").style({
                    visibility: "hidden",
                    opacity: 0
                });
            });
        articleRects.exit().remove();
    }
}
