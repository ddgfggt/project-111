Webcam.set({
    width:350,
    height:300
});
Webcam.attach("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image'src="+data_uri+">";
    })
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wuaoYbAOC/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
prediction_1="";
prediction_2="";
function speak(){
    var s=window.speechSynthesis;
    speak1="the first prediction is "+prediction_1;
    speak2="the second prediction is "+prediction_2;
utterThis=new SpeechSynthesisUtterance(speak1+speak2);
s.speak(utterThis);
}