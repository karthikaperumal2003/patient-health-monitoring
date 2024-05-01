const graphContainer = document.getElementById("graph-container");

const iframesData = [
  {
    src: "https://thingspeak.com/channels/2512400/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&max=100&min=0&results=60&title=Heart+rate&type=line",
    title: "Heart Rate",
  },
  {
    src: "https://thingspeak.com/channels/2512400/widgets/851074",
    title: "Heart rate BPM",
  },
  {
    src: "https://thingspeak.com/channels/2512400/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&max=100&min=0&results=60&title=respiratory+rate&type=line",
    title: "Respiratory Rate Data",
  },
  {
    src: "https://thingspeak.com/channels/2512400/widgets/849414",
    title: "Respiratory rate BPM",
  },
  {
    src: "https://thingspeak.com/channels/2512400/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&max=100&min=0&results=60&title=temperature&type=line",
    title: "Temperature Data",
  },
  {
    src: "https://thingspeak.com/channels/2512400/widgets/847003",
    title: "Temperature Data",
  },
  {
    src: "https://thingspeak.com/channels/2512400/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=PIR++triggered&type=line",
    title: "PIR++ Triggered Data",
  },
];

function createIframe(iframeData) {
  const iframe = document.createElement("iframe");
  iframe.width = "450";
  iframe.height = "300";
  iframe.style.margin = "20px";
  iframe.style.border = "3px solid #ccc";
  iframe.src = iframeData.src;
  iframe.title = iframeData.title;
  graphContainer.appendChild(iframe);
}

iframesData.forEach(createIframe);
