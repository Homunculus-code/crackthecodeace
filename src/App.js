import styles from './App.module.css';
import { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const E1 = {
    "name": "Calculate the Power",
    "link": "https://www.hackerearth.com/practice/math/number-theory/basic-number-theory-1/practice-problems/algorithm/calculate-the-power/"
}

const E2 = {
  "name": "Mark the Answer",
  "link": "https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/mark-the-answer-1/"
}

const E3 = 
  {
    "name": "Going to Office",
    "link": "https://www.hackerearth.com/practice/basic-programming/operators/basics-of-operators/practice-problems/algorithm/going-to-office-e2ef3feb/"
  }


const E4 = 
  {
    "name": "The First Meeting",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/little-shino-and-prime-difference-38c91b0d/"
  }


const M1 = 
  {
    "name":"Ali and Helping innocent people",
    "link": "https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/cartag-948c2b02/"
  }


const M2 = 
  {
    "name":"Add operator and fraction",
    "link": "https://www.hackerearth.com/practice/math/number-theory/totient-function/practice-problems/algorithm/kasrioo-145db44b/"
  }


const M3 = 
  {
    "name": "Does it divide?",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/does-it-divide-3c60b8fb/"
  }


const M4 = 
  {
    "name": "Help Oz",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/does-it-divide-3c60b8fb/"
  }

const D2 = 
  {
    "name": "Prime String",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/primestring/"
  }


const D1 = 
  {
    "name": "Roy and Rangoli",
    "link": "https://www.hackerearth.com/practice/math/number-theory/primality-tests/practice-problems/algorithm/roy-and-rangoli-1/"
  }



const App = () => {
    const [n, setN] = useState(-1);
    useEffect(() => {
      AOS.init();
    }, []);
    const killme = num => {
      setN(num);
    }
    if (n == 0){
      return(
       <>
       <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <button className = {styles.invisi}>
               <img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png"/>
               <p className = {styles.texti}>link</p>
            </button>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div className = {styles.container2}>
          <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div data-aos="zoom-in" className = {styles.lastgem}><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope} onClick = {() => killme(4)}/></div>  
        </div>
      </div>
      </>
      )
    }
    else if (n == 1){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <button className = {styles.invisi}>
               <img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png"/>
               <p className = {styles.texti}>link</p>
             </button>
          </div>
          <div className = {styles.container2}>
          <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div data-aos="zoom-in" className = {styles.lastgem}><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope} onClick = {() => killme(4)}/></div>  
        </div>
      </div>
       </>
      )
    }
    else if (n == 2){
      return(
        <>
        <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div className = {styles.container2}>
            <button className = {styles.invisi}>
               <img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png"/>
               <p className = {styles.texti}>link</p>
             </button>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div data-aos="zoom-in" className = {styles.lastgem}><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope} onClick = {() => killme(4)}/></div>  
        </div>
      </div>
       </>
      )
    }
    else if (n == 3){
      return(
      <>
       <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div className = {styles.container2}>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <button className = {styles.invisi}>
               <img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png"/>
               <p className = {styles.texti}>link</p>
             </button>
          </div>
          <div data-aos="zoom-in" className = {styles.lastgem}><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope} onClick = {() => killme(4)}/></div>  
        </div>
      </div>
      </>
      )
    }
    else if (n == 4){
      return(
      <>
      <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div className = {styles.container2}>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/hRJB0TY/My-project-2-modified.png" className = {styles.nope}/></div>
          </div>
          <div className = {styles.lastgem}>
             <button className = {styles.invisi}>
               <img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png"/>
               <p className = {styles.texti}>link</p>
             </button>
           </div>  
        </div>
      </div>
      </>
      )
    }
    return(
      <>
      <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", justifyItems: "flex-start"}}>
        <h1 className = {styles.heading}>Crack the Lock</h1>
        <div className = {styles.containers}>
          <div className = {styles.container1}> 
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png" className = {styles.normal} onClick = {() => killme(0)}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png" className = {styles.normal} onClick = {() => killme(1)}/></div>
          </div>
          <div className = {styles.container2}>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png" className = {styles.normal} onClick = {() => killme(2)}/></div>
            <div data-aos="zoom-in"><img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png" className = {styles.normal} onClick = {() => killme(3)}/></div>
          </div>
          <div data-aos="zoom-in" className = {styles.lastgem}><img src = "https://i.ibb.co/QdrJ5Mv/My-project-2.png" className = {styles.normal} onClick = {() => killme(4)}/></div>  
        </div>
      </div>
      </>
    )
}

export default App;
