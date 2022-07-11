https://teachablemachine.withgoogle.com/models/88a4ROlx6/.json

function start()  {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/88a4ROlx6/.json',modelready);
    
    }
    
    function modelready(){
    classifier.classify(gotresults);
    
    }
    
    function gotresults(error,results) {
     if (error) {
        console.log(error);
     } else {
        console.log(results);
     }
    
    
    }