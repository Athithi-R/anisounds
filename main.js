

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HbOVr_yH0/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
} 

function gotResults(error, results){
    if(error){
        console.error(error);
    }
     else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can here - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+ "%"; 
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+", "+random_number_g+", "+random_number_b+")";

        img = document.getElementById("Dog");
        img1 = document.getElementById("Cat");
        img2= document.getElementById("Bee");
        img3 = document.getElementById("Cow");

        if (results[0].label == "Dog")
     {
        img.src = 'dog.gif';
        img1.src = "cat.jpg";
        img2.src = "bee.jpg";
        img3.src = "cow.jpg";
     } else if (results[0].label == "Cat"){
        img.src = 'dog.jpg';
        img1.src = "catgif.gif";
        img2.src = "bee.jpg";
        img3.src = "cow.jpg";
     } else if (results[0].label == "Bee"){
        img.src = 'dog.jpg';
        img1.src = "cat.jpg";
        img2.src = "beegif.jpg";
        img3.src = "cow.jpg";
     } else{
        img.src = 'dog.jpg';
        img1.src = "cat.jpg";
        img2.src = "bee.jpg";
        img3.src = "cowgif.gif";
     }
    }
 
}