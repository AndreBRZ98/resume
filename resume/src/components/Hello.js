import './Hello.css'

const Hello=()=>{
    return(
        <>
        <div className='hello'>
        <div className='content'>
            <p>Hello, I am</p>
            <p>Andre Barraza</p>
            <p>Front-end developer</p>
            <button href='/' className='button'>Know Me!</button>
        </div>
    </div>

    <div className='about' id='about'>
            <div className='container'>
                <img  alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an International Financial Planning company with offices i n multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
                    <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Hello;