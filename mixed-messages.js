
const mixedm = () => {
    let dadjokenum = Math.floor(Math.random() * 9) 
    
    switch (dadjokenum) {
        case 0:
            return "I only know 25 letters of the alphabet. I don't know y";
        case 1:
            return "Why is peter pan always flying? Because he neverlands!"
        case 2:
            return "Whats brown and sticky? A stick!"
        case 3:
            return "I was wondering why the frisbee was getting closer, and then it hit me"
        case 4:
            return "What did the janitor say when he jumped out of the closet? Supplies!";
        case 5:
            return "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!";
        case 6:
            return "Why don't eggs tell jokes? They'd crack each other up.";
        case 7:
            return "Did you hear the rumor about butter? Well, I'm not going to spread it!";
        case 8:
            return "Why did Billy get fired from the banana factory? He kept throwing away the bent ones."
        case 9:
            return "This graveyard looks overcrowded. People must be dying to get in.";
        default: 
            return "How do you make seven even? Take away the s";
    }
}
document.getElementById("placewhere").innerText = mixedm()
