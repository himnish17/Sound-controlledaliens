function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NKPZeKEuL/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error , results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label")
    }
}