function optionChanged(newSample) {
    buildMetadata(newSample);
  };
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();
  
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  };
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      console.log(data);
      // 3. Create a variable that holds the samples array. 
      var smp = data.samples;
      console.log(smp);
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var smparr = smp.filter(sampleObj => sampleObj.id == sample);
      console.log(smparr);
      //  5. Create a variable that holds the first sample in the array.
      var smpr = smparr[0];
      console.log(smpr);
    })};  
