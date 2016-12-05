var data = [
    {
        corp: ["Twitter  Inc."],
        id: "5775b29f3a8ffe29560a87b9",
        time: {
            year: 2016,
            month: 7,
            day: 1,
            hour: 0,
            minute: 0,
            second: 16
        },
        topic: [
            {
                group: "Legal Actions",
                type: "Allegation"
            }
        ],
        website: "radionowindy.com"
    },
    {
        corp: ["Microsoft Corporation"],
        id: "5775b29f3a8ffe29560a87ba",
        time: {
            year: 2016,
            month: 7,
            day: 1,
            hour: 0,
            minute: 0,
            second: 22
        },
        topic: [
            {
                group: "Financing Actions",
                type: "Financial Risk"
            }
        ],
        website: "www.thefinancialexpress-bd.com"
    },
    {
        corp: ["Noodles & Company"],
        id: "5775b32b3a8ffe29560a87bd",
        time: {
            year: 2016,
            month: 7,
            day: 1,
            hour: 0,
            minute: 2,
            second: 40
        },
        topic: [
            {
                group: "Criminal Actions",
                type: "Breach"
            }
        ],
        website: "patch.com"
    }
];

var websites = ["test.test"];
var topics = [
    {
        groupname: "test",
        value: ["type1", "type2"]
    }
];
var corps = ["TEST INC."];

var websiteCard;

var initial = function () {
    console.log("page loaded!");
    websiteCard = document.getElementById("websiteCard");
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    // analyse data
    var websiteObjects = {};
    var topicObjects = {};
    var corpObjects = {};
    for (var i = 0; i < data.length; i++) {
        websiteObjects[data[i].website] = null;

        for (var j = 0; j < data[i].topic.length; j++) {
            if (!topicObjects[data[i].topic[j].group])
                topicObjects[data[i].topic[j].group] = {};
            topicObjects[data[i].topic[j].group][data[i].topic[j].type] = null;
        }

        for (var j = 0; j < data[i].corp.length; j++) {
            corpObjects[data[i].corp[j]] = null;
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
            input.setAttribute("id", "website_" + i);
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
            input.setAttribute("id", "topic_group_" + i);
            var label = document.createElement("label");
            label.innerText = v.groupname;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);

            var typesDiv = document.createElement("div");
            for (var i = 0; i < v.value.length; i++) {
                var typeDiv = document.createElement("div");
                var typeInput = document.createElement("input");
                typeInput.setAttribute("class", "filled-in");
                typeInput.setAttribute("type", "checkbox");
                typeInput.setAttribute("id", "topic_type_" + i);
                var typeLabel = document.createElement("label");
                typeLabel.innerText = v.value[i];
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
            input.setAttribute("id", "corp_" + i);
            var label = document.createElement("label");
            label.innerText = v;
            label.setAttribute("for", input.getAttribute("id"));
            div.appendChild(input);
            div.appendChild(label);
            var test = document.createElement("div");
            return div;
        });
}