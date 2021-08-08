class ConcentredCircle {
    constructor(parentSelector, parentBg, maxDiameter, minDiameter, maxThick, minThick, r, g, b, animDuration) {
        this.parent = document.querySelector(parentSelector);

        this.maxDiameter = maxDiameter;
        this.minDiameter = minDiameter;
        this.elementWidth = this.getRandomNumber(minDiameter, maxDiameter);
        this.elemenHeight = this.getRandomNumber(minDiameter, maxDiameter);
        this.elementThick=this.getRandomNumber(minThick, maxThick);

        this.r=this.getRandomNumberRGB(r);
        this.g=this.getRandomNumberRGB(g);
        this.b=this.getRandomNumberRGB(b);
        this.parentBg=parentBg;

        this.duration=this.getRandomDuration(animDuration);

        this.getRandomNumber(); 
        this.getRandomNumberRGB(); 
        
    }

    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    getRandomNumberRGB(color) {
        let differentColor=Math.round(Math.random() * (color*1.2 - color*0.8) + color*0.8);
        if (differentColor>255){differentColor=255};
        return differentColor;
    }

    getRandomDuration(duration) {
        let differentDuration=Math.round(Math.random() * (duration*1.5 - duration*0.5) + duration*0.5);
        return differentDuration;
    }

    render() {
        const element = document.createElement('div');
        element.style=`
            width: ${this.elementWidth}px;
            height: ${this.elemenHeight}px;
            border: ${this.elementThick}px solid rgb(${this.r}, ${this.g}, ${this.b});
            border-radius: 50%;
            box-shadow: 6px 4px 10px 4px rgba(${this.r}, ${this.g}, ${this.b}, 0.8);
            animation: circle_rotate ${this.duration}ms linear infinite;
        `;
       
        // this.parent.style.background='rgb(128, 69, 115)';
        // this.parent.style.background='rgb(5, 59, 105)';
        // this.parent.style.background='rgb(92, 175, 97)';
        this.parent.style.background=this.parentBg;
        this.parent.append(element);
        console.log(this.r, this.g, this.b);
    }
};

class WholeConcentratedCircle {
    constructor (parentSelector, parentWidth, parentHeight, parentBg){
        this.parentSelector=parentSelector;
        this.parentBg=parentBg;
        this.parentWidth=parentWidth;
        this.parentHeight=parentHeight;

    }
    render(){
        const parent=document.createElement('div');
        parent.classList.add(this.parentSelector);

        parent.style=`
        width: ${this.parentWidth}px;
        height: ${this.parentHeight}px;
        background: ${this.parentBg};
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        `;
        
        document.body.append(parent);
    }
    
};

new WholeConcentratedCircle("container_test", 1000, 1000, 'rgb(92, 175, 97)').render();

// Blue
// for(let i=0; i<20; i++){
//     new ConcentredCircle(".container", 600, 900, 1, 5, 91, 232, 226, 20000).render();
// }

// for(let i=0; i<16; i++){
//     new ConcentredCircle(".container", 400, 600, 1, 4, 9, 127, 127, 15000).render();
// }

// for(let i=0; i<15; i++){
//     new ConcentredCircle(".container", 100, 450, 1, 3, 49, 137, 186, 10000).render();
// }

// for(let i=0; i<10; i++){
//     new ConcentredCircle(".container", 900, 1100, 1, 5, 17, 184, 252, 16000).render();
// }

// for(let i=0; i<12; i++){
//     new ConcentredCircle(".container", 700, 1500, 1, 5, 255, 255, 255, 12000).render();
// }

// Mauve
// for(let i=0; i<15; i++){
//     new ConcentredCircle(".container", 100, 450, 1, 3, 231, 169, 219, 10000).render();
// }

// for(let i=0; i<16; i++){
//     new ConcentredCircle(".container", 400, 600, 1, 4, 239, 222, 100, 15000).render();
// }

// for(let i=0; i<20; i++){
//     new ConcentredCircle(".container", 600, 900, 1, 5, 95, 111, 129, 20000).render();
// }

// for(let i=0; i<10; i++){
//     new ConcentredCircle(".container", 900, 1100, 1, 5, 182, 204, 228, 16000).render();
// }

// for(let i=0; i<12; i++){
//     new ConcentredCircle(".container", 700, 1500, 1, 5, 255, 255, 255, 12000).render();
// }

//Green
for(let i=0; i<15; i++){
    new ConcentredCircle(".container", 'rgb(92, 175, 97)', 100, 450, 1, 3, 121, 203, 93, 10000).render();
}

for(let i=0; i<16; i++){
    new ConcentredCircle(".container", 'rgb(92, 175, 97)',  400, 600, 1, 4, 174, 225, 141, 15000).render();
}

for(let i=0; i<20; i++){
    new ConcentredCircle(".container", 'rgb(92, 175, 97)',  600, 900, 1, 5, 227, 236, 101, 20000).render();
}

for(let i=0; i<10; i++){
    new ConcentredCircle(".container", 'rgb(92, 175, 97)',  900, 1100, 1, 5, 237, 192, 79, 16000).render();
}

for(let i=0; i<12; i++){
    new ConcentredCircle(".container", 'rgb(92, 175, 97)',  700, 1500, 1, 5, 255, 255, 255, 12000).render();
}


