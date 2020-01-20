
/************************************************************************** */
// definition of the sides
/* export class Triangle {
  constructor(s1,s2,s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
    
  }

   kind (){
   const noWay = (s1, s2, s3)=>{
    // sides can't be zero
    if( s1 === 0 || s2 === 0 || s3 === 0){
      return true;
      //stricly 0
    }
    //sides can't be negative
    else if(s1 < 0 || s2 < 0 || s3 < 0){
      return true;
    }
    // sum of 2 sides <= 3rd side
    if(s1 + s2 <= s3){
      return true;
    }
    //same to other sides
    else if( s1 + s3 <= s2){
      return true;
    }
    else if(s2 + s3 <= s1){
      return true;
    }
    //otherwise
    return false;
    // how could it be with async/await? so I can catch the errors
   };

    const equilateral = (s1, s2, s3)=>{
      //all sides equals
      if (s1 === s2 && s1 === s3){
        console.log(`true`);
        return true;
        
      }
      console.log(`false`);
      return false;
    };

    const isosceles =(s1, s2, s3)=>{
      // 2 equal sides
      if( s1 === s2 || s1 === s3 || s2 === s3){
        console.log(`true`);
        return true;
      }
      console.log(`false`);
      return false;
    };

    const scalene = (s1, s2, s3) =>{
      // no equal sides
      if(s1 === s2) { return false;}
      if(s1 === s3) { return false;}
      if(s2 === s3) { return false;}
      else {
        console.log(`scalene`);
        return true;}
    };

    if(noWay(this.s1, this.s2, this.s3)){
      throw error `Numbers don't match the rules`;
    }
    else if(equilateral(this.s1, this.s2, this.s3)){
      console.log( `This is an eqilateral triangle`);
      return `equilateral`;
    }
    else if(isosceles(this.s1, this.s2, this.s3)){
      console.log( `This is an isosceles triangle`);
      return `isosceles`;
    }
    else if(scalene(this.s1, this.s2, this.s3)){
      console.log( `This is an scalene triangle`);
      return `scalene`
    };
   };
  
}; */
/*****************************************************************************************/
/* export class Triangle {
  constructor(a, b, c) {
     this.a = a;
     this.b = b;
     this.c = c;
   }

kind(side1, side2, side3) {
if( side1 === 0 || side2 === 0 || side3 === 0){
    return'Need positive numbers';
  }else if( side1 < 0 || side2 < 0 || side3 < 0){
    return 'no way';
  }else if(this.a + this.b <= this.c || this.a + this.c <= this.b || this.b +
    this.c <= this.a) {
    return "illegal";
  } if(side1 === side2 && side1 === side3) {
    return 'equilateral'
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles'
  }
  else{
    return 'scalene';
  }

};
}; */
/*******************************************************************************************/
/*********************************************************************************** */
  /* export class Triangle {
    constructor(a, b, c) {
       // Declaration sides
       this.sides = [a, b, c];//array sides
       // new array. How.? expand (doesn't modify original array)and set
       this.onlySides = [...new Set(this.sides)] ;
     }
     kind  () {

      const inequalSides = ()=>{
        const sides = this.sides;
        const length = sides.length;
        for (let i = 0; i < length; i++){
          let sum;
          if( i === length - 1){
            sum = sides[0] +sides[1];
          }else if (i === length - 2){
            sum = sides[0] + sides[i + 1];
          }else{
            sum = sides[i + 1] + sides[i + 2];
          }if(sides[i] >sum){
            return true;
          }
        }
      }
      
       const checkValid = ()=>{
         const noValid = this.onlySides.some((sideLength) => sideLength <=0);
         if (noValid)
           throw 'We are going to need more than zero';
         if (inequalSides())
          throw 'illegal';
       }
       
       
      let equilateral = ()=>{
        return this.onlySides.length === 1;
      }
      let isosceles = ()=>{
        return this.onlySides.length === 2;
      }

      checkValid();
      if(equilateral())
        return 'equilateral';
      if(isosceles())
        return 'isosceles';

        return 'scalene';
     
    
    
  };
  
    }; */
    /********************************************************************************************************/
   /*  export class Triangle {
      constructor(a, b, c) {
        this.sides = [a, b, c].sort((a, b) => a - b)
      }
    
      kind() {
        const [short, med, long] = this.sides
        const positive = short > 0
        const passesEquality = long - med - short < 0
        if (!positive || !passesEquality) {
          throw new RangeError('Sides are not valid')
        }
        switch (new Set(this.sides).size) {
          case 1: return 'equilateral';
          case 2: return 'isosceles';
          case 3: return 'scalene'
        }
      };
    }; */

    /********************************************************************************************** */
   /*  const rules = [
      {
        rule: ({a,b,c}) => a === 0 || b === 0 || c === 0,
        type: () => { throw new Error('Triangle can\'t have 0 size side') }
      },
      {
        rule: ({a,b,c}) => a <= 0 || b <= 0 || c <= 0,
        type: () => { throw new Error('Triangle can\'t have negative or zero side') }
      },
      {
        rule: ({a,b,c}) => a + b <= c || a + c <= b || b + c < a,
        type: () => { throw new Error('Triangle is impossible') }
      },
      {
        rule: ({a,b,c}) => a === b && a === c,
        type: () => 'equilateral'
      },
      {
        rule: ({a,b,c}) => a === b || a === c || b === c,
        type: () => 'isosceles'
      },
      {
        rule: ({a,b,c}) => a !== b && a !== c && b !== c,
        type: () => 'scalene'
      },
      {
        rule: () => true,
        type: () => { throw new Error('We\'re missing a rule') }
      },
    ]
    
    export class Triangle {
      constructor(a,b,c){
        this.sides = {a,b,c}
      }
    
      kind() {
        return rules
          .find(({rule}) => rule(this.sides))
          .type()
      };
    }; */
/****************************************************************************************/
/* export class Triangle {
  constructor(a, b, c) {
     this.sides = [a, b, c].sort((a ,b) => a - b);
     this.sideSet = new Set (this.sides)
   }
   kind  () {
    
   
    //const [a,b,c] = this.sides;
    //const zeroSides = a * b * c === 0;
    const lessSides = a < 0;
    const doubleLess = a + b < c;

    for(let side of this.sideSet){
      if(side <=0){
        throw 'We are going to need more than zero';
      }
    };
    
   //if(zeroSides)
     //throw 'We are going to need more than zero';
    if(lessSides)
    throw  'no way';
   if(doubleLess) 
    throw "illegal";
   if(a === b && a === c) 
    return 'equilateral'
   if (a === b || a === c || b === c) 
    return 'isosceles';
  
    return 'scalene';
  
}; 

  };*/
  /*****************************************************************/
    export class Triangle {
      constructor(...sides) {
         this.sides = sides.sort((a ,b) => a - b);
         this.sideSet = new Set(this.sides);
       }
       kind  () {     
       
        const [a,b,c] = this.sides;
        
        for(let side of this.sideSet){
          if(side <= 0 || a + b < c){
            throw 'No way'
          }
        };
            
    switch (this.sideSet.size){
      case 1:
        return 'equilateral';
      case 2:
        return 'isosceles';
      case 3:
        return 'scalene';
    }
  };
 };
