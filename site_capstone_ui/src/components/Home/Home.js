import './Home.css'
import book from '../../assets/recipebook.jpg'

export default function Home() {
    return (
        <div className="Home"> 
          <div className='home-intro'>
            <div className='intro-blurb'>
              <span align= 'left'>Text</span>
              <span align= 'left'>............................................................
                  ..............................................................
              </span>
            </div>
            <div className='intro-img'>
            <img src={book} alt='recipe book'></img>
            </div>
          </div>
          <div className='home-layout'>
         
          </div>
          </div>
        
      )
    }